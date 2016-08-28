https://nodejs.org/en/docs/guides/nodejs-docker-webapp/

* List of all running containers: `sudo docker ps`
* List of latest cli outputs: `sudo docker logs -f <container_name>`
* `sudo docker run --name <container_name> -p <port_number>:<port_number> --restart=always`
* Load in background: `-d`
* Bind host:client ports: `-p <port_number>:<port_number>`
* Restart service after server restart: `--restart=always`
* NPM install: `sudo docker run -it --rm --name my-running-script -v "$PWD":"$PWD" -w "$PWD" node:4 npm i`
* Stop running container: `sudo docker stop <container_name>`
* Start new container: `sudo docker run  <container_name>`
* Remove stopped container: `sudo docker rm <container_name>`
* Show mongo cosnole: `sudo docker exec -i mongodb mongo`