set -e 

sudo docker run --rm   --name pg-dockerlists -e POSTGRES_PASSWORD=docker -d -p 5434:5432 -v $HOME/docker/volumes/postgres_hashed:/var/lib/postgresql/data  postgres
