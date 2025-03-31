pipeline {
    agent any

    environment {
        RENDER_URL = 'https://java-todo-bt4c.onrender.com' // Replace with your Render URL
    }

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
                sh 'curl https://api.render.com/deploy/srv-cuy2n9r0fhs739kleeg?key=<https://api.render.com/deploy/srv-cvjv2n9r0fns739kle6g?key=zpEopGRO-3w>'
            }
        }
    }

    post {
        success {
            slackSend (
                color: 'good',
                message: "Build ${env.BUILD_ID} deployed successfully to ${env.RENDER_URL}",
                channel: '#kimberly_ip1'
            )
        }
        failure {
            mail to: 'nangirakimberly09@gmail.com', subject: 'Jenkins Build Failed', body: 'The Jenkins build failed. Check the logs for details.'
        }
    }
}
