pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/kimberlynangira/java-todo.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }
        stage('Deploy to Render') {
            steps {
                sh 'curl https://api.render.com/deploy/srv-cuy2n9r0fhs739kleeg?key=<YOUR_RENDER_DEPLOY_KEY>'
            }
        }
    }

    post {
        failure {
            mail to: 'nangirakimberly09@gmail.com', subject: 'Jenkins Build Failed', body: 'The Jenkins build failed. Check the logs for details.'
        }
    }
}
