#### Snippet of backend(Node.js)`DockerFile`

You will find this `DockerFile` file in the root directory of the project.

```bash
FROM node:13.13.0-stretch-slim
#Argument that is passed from docer-compose.yaml file
ARG NODE_PORT
#Echo the argument to check passed argument loaded here correctly
RUN echo "Argument port is : $NODE_PORT"
# Create app directory
WORKDIR /usr/src/app
#COPY . .
COPY . .
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
RUN npm install
#In my case my app binds to port NODE_PORT so you'll use the EXPOSE instruction to have it mapped by the docker daemon:
EXPOSE ${NODE_PORT}
CMD npm run dev
```

##### Explanation of backend(Node.js) `DockerFile`

- The first line tells Docker to use another Node image from the [DockerHub](https://hub.docker.com/). We’re using the official Docker image for Node.js and it’s version 10 image.

- On second line we declare argument `NODE_PORT` which we will pass it from `docker-compose`.

- On third line we log to check argument is successfully read 

- On fourth line we sets a working directory from where the app code will live inside the Docker container.

- On fifth line, we are copying/bundling our code working directory into container working directory on line three.

- On line seven, we run npm install for dependencies in container on line four.

- On Line eight, we setup the port, that Docker will expose when the container is running. In our case it is the port which we define inside `.env` file, read it from `docker-compose` then passed as a argument to the (backend)`DockerFile`.

- And in last, we tell docker to execute our app inside the container by using node to run `npm run dev. It is the command which I registered in __package.json__ in script section.
###### :clipboard: `Note: For development purpose I used __nodemon__ , If you need to deploy at production you should change CMD from __npm run dev__ to __npm start__.`

****

### Building and running your application

When you're ready, start your application by running:
`docker compose up --build`.

Your application will be available at http://localhost:3000.

### Deploying your application to the cloud

First, build your image, e.g.: `docker build -t myapp .`.
If your cloud uses a different CPU architecture than your development
machine (e.g., you are on a Mac M1 and your cloud provider is amd64),
you'll want to build the image for that platform, e.g.:
`docker build --platform=linux/amd64 -t myapp .`.

Then, push it to your registry, e.g. `docker push myregistry.com/myapp`.

Consult Docker's [getting started](https://docs.docker.com/go/get-started-sharing/)
docs for more detail on building and pushing.

### References
* [Docker's Node.js guide](https://docs.docker.com/language/nodejs/)