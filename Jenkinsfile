pipeline {
    agent any
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Deploy to Render') {
            steps {
                sh 'node server.js'
            }
        }
    }
}
