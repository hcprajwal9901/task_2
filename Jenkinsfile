pipeline {
    agent any

    environment {
        IMAGE_NAME = "simple-node-app"
        IMAGE_TAG = "latest"
    }

    stages {
        stage('Checkout') {
            steps {
                // Use master branch for your repo
                git url: 'https://github.com/hcprajwal9901/task_2.git', branch: 'master'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat "docker build -t %IMAGE_NAME%:%IMAGE_TAG% ."
            }
        }

        stage('Run Docker Container') {
            steps {
                bat """
                docker stop %IMAGE_NAME% || exit 0
                docker rm %IMAGE_NAME% || exit 0
                docker run -d -p 3000:8080 --name %IMAGE_NAME% %IMAGE_NAME%:%IMAGE_TAG%
                """
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully! Your app should be accessible at http://localhost:8080'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
