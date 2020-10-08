#!/bin/bash 
set -e 

sudo docker stop $(sudo docker ps -q --filter ancestor=back:1 )
sudo docker stop $(sudo docker ps -q --filter ancestor=front:1 )
sudo docker rm $(sudo docker ps --all -q --filter ancestor=back:1 )
sudo docker rm $(sudo docker ps --all -q --filter ancestor=front:1 )
