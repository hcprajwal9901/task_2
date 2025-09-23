# Simple Node.js App with Jenkins CI/CD using Docker

## Overview
This project demonstrates a **basic CI/CD pipeline using Jenkins and Docker** for a simple Node.js application. The app runs a basic HTTP server that responds with a message.

**Features:**
- Simple Node.js HTTP server
- Dockerized application
- Jenkins pipeline for automatic build and deployment

---

## Project Structure

simple-node-app/
├─ app.js # Node.js HTTP server
├─ package.json # Node.js project dependencies
├─ Dockerfile # Docker image build instructions
└─ Jenkinsfile # CI/CD pipeline script for Jenkins


---

## Code

### **app.js**

```javascript
const http = require('http');

const hostname = '0.0.0.0';
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello from Jenkins CI/CD!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```



###How to Run Locally

Clone the repository:

```git clone https://github.com/<your-username>/<your-repo>.git
cd simple-node-app
```


Install Node.js dependencies:
```
npm install
```

Run the app:
```
node app.js
```

Open browser at http://localhost:8080 to see:

Hello from Jenkins CI/CD!

###How to Build & Run with Docker

Build Docker image:
```
docker build -t simple-node-app .
```

Run Docker container:
```
docker run -d -p 8080:8080 --name simple-node-app simple-node-app
```

Access app in browser at http://localhost:8080.

##Jenkins CI/CD Pipeline

###Jenkins pipeline automatically:

Pulls code from GitHub

Builds Docker image

Runs the container

###Configure Jenkins:

Create a Pipeline project

Set Pipeline script from SCM

Provide GitHub repo and branch

Jenkinsfile path: Jenkinsfile

###Run the pipeline and verify app running at http://<server-ip>:8080
