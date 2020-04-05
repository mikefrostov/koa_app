set -e 

sudo docker run --rm   --name pg-docker -e POSTGRES_PASSWORD=docker -d -p 5433:5432 -v $HOME/docker/volumes/postgres_lists:/var/lib/postgresql/data  postgres
