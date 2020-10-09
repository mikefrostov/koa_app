#!/bin/bash 
set -e 

#remove backend ct and image
echo 'removing backend ct and image: '
sudo docker stop $(sudo docker ps -q --filter ancestor=back:1 )
sudo docker rm $(sudo docker ps --all -q --filter ancestor=back:1 )
sudo docker image rm $( sudo docker images -q --filter reference='back:1' )

echo 'removing frontend ct and image: '
#remove front ct and image
sudo docker stop $(sudo docker ps -q --filter ancestor=front:1 )
sudo docker rm $(sudo docker ps --all -q --filter ancestor=front:1 )
sudo docker image rm $( sudo docker images -q --filter reference='front:1' )


echo 'removing postgres ct'
sudo docker stop $(sudo docker ps -q --filter ancestor=postgres )

