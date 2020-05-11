set -e 

sudo DATABASE_URL=postgres://postgres:docker@localhost:5434/postgres npm run migrate up
