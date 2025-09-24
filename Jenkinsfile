pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("task2-app")
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    docker.image("task2-app").run('-p 3000:3000')
                }
            }
        }
    }
}
