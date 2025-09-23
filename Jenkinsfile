pipeline {
    agent any

    environment {
        DOCKER_HUB_USERNAME = 'hcprajwal9901' // <--- REPLACE THIS
        APP_NAME = 'task_2' 
        GIT_REPO_URL = 'https://github.com/hcprajwal9901/task_2.git' // <--- REPLACE THIS (e.g., https://github.com/your-username/my-simple-app.git)
    }

    stages {
        stage('Checkout Source Code') {
            steps {
                git branch: 'main', url: "${GIT_REPO_URL}"
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh "docker build -t ${DOCKER_HUB_USERNAME}/${APP_NAME}:${BUILD_NUMBER} ."
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    sh "docker stop ${APP_NAME}-container || true"
                    sh "docker rm ${APP_NAME}-container || true"
                    sh "docker run -d -p 8080:8080 --name ${APP_NAME}-container ${DOCKER_HUB_USERNAME}/${APP_NAME}:${BUILD_NUMBER}"
                }
            }
        }
        // Optional: Push Docker Image stage is commented out for simplicity.
    }
    post {
        always { echo "Pipeline finished." }
        success { echo "Pipeline completed successfully!" }
        failure { echo "Pipeline failed. Check logs for details." }
    }
}