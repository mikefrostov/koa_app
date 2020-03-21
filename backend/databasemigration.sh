set -e 

sudo DATABASE_URL=postgres://postgres:docker@localhost:5433/postgres npm run migrate up
