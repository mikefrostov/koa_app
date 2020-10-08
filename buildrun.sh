#!/bin/bash
set -e 

cd backend/
npm install -y
sudo docker build -t back:1 .
cd ../frontend/
npm install -y
npm run-script build
sudo docker build -t front:1 .
cd ../
sudo docker run -d -p 4001:4001 -t front:1
sudo docker run -d -p 4002:4002 -t back:1
sudo ./backend/postgrescontainer.sh
