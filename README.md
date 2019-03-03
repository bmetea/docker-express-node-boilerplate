
Prerequisites: npm, docker

To make a Node.js api quickly and run it anywhere do:
1. Clone the repo: `git clone git@github.com:meteabogdan/docker-express-node-boilerplate.git`
2. Move to the root of the project: `cd docker-express-node-boilerplate`
3. Install express: `npm install express --save`
4. Build a docker image based on the Dockerfile in the current directory: `docker build . -t nodejs-rest`
5. In the Dockerfile I exposed port 3000. Running this command will run a docker container based on the image previously created and it will map port 3000 inside the container to port 9000 on the host machine `docker run -e VERSION=1.1 -p 9000:3000 nodejs-rest`
6. In app.js there's 2 routes `/endpoint1` and `/endpoint2` which you should now be able to hit by going here `localhost:9000/endpoint1`

