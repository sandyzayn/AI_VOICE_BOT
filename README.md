# 🎤 AI Voice Replacement Frontend Application

A **simple and elegant** frontend application with AI voice replacement interface, containerized with **Docker** and orchestrated with **Kubernetes**.

## 🚀 Quick Start

### Prerequisites
- **Docker** installed and running
- **Kubernetes** cluster (Minikube/Docker Desktop)
- **kubectl** configured
- Modern web browser with microphone access

### 📦 Local Development

#### Option 1: HTTP Server
```bash
npm install -g http-server
cd src
http-server -p 8000
```
Visit: `http://localhost:8000`

#### Option 2: Direct File Access
- Simply open `src/index.html` in your browser

### 🐳 Docker Deployment

#### Build the Docker Image
```bash
docker build -t voice-app .
```

#### Run the Container
```bash
docker run -d -p 3002:80 --name voice-app-container voice-app
```

#### Verify Deployment
```bash
docker ps
docker logs voice-app-container
```
Visit: `http://localhost:3002`

### ☸️ Kubernetes Deployment

#### Start Kubernetes Cluster
```bash
minikube start
minikube status
```

#### Load Docker Image
```bash
minikube image load voice-app:latest
```

#### Deploy Application
```bash
kubectl apply -f kubernetes/deployment.yaml
kubectl apply -f kubernetes/service.yaml
```

#### Monitor Deployment
```bash
kubectl get pods -w
kubectl get services
```

#### Access the Application
```bash
minikube service voice-app-service
```

## 🛠️ Project Structure

```
voice-app/
├── src/                    # Frontend source code
│   ├── index.html         # Main application
│   ├── styles/
│   │   └── style.css      # Styling
│   └── js/
│       └── app.js         # Voice processing logic
├── kubernetes/            # K8s manifests
│   ├── deployment.yaml    # Deployment configuration
│   └── service.yaml       # Service configuration
├── Dockerfile            # Container definition
└── README.md            # This file
```

## 🎯 Features

- 🎤 **Voice Recording** - Record audio directly from your microphone
- 🔄 **Voice Transformation** - Simulated AI voice effects
- 🎨 **Modern UI** - Clean and responsive design
- 🐳 **Containerized** - Easy deployment with Docker
- ☸️ **Orchestrated** - Scalable with Kubernetes
- 📱 **Mobile Friendly** - Works on all devices

## 🔧 Technical Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Container**: Docker, Alpine Linux, Nginx
- **Orchestration**: Kubernetes
- **Web Server**: Nginx
- **Audio API**: Web Audio API

## 📋 Usage Instructions

1. **Click** "Start Recording" and allow microphone access
2. **Speak** into your microphone
3. **Click** "Stop Recording" when finished
4. **Play** your original recording
5. **Transform** your voice using AI simulation
6. **Select** different voice styles from the dropdown

## 🚨 Important Security Notes

> **⚠️ Warning**: This application requires microphone access. Ensure you're using HTTPS in production environments.

> **🔒 Privacy**: All audio processing happens locally in the browser. No data is sent to external servers.

## 🛡️ Kubernetes Configuration

The application is deployed with:
- **ReplicaSet**: 2 instances for high availability
- **Health Checks**: Liveness and readiness probes
- **Resource Limits**: Optimized CPU and memory usage
- **Service**: LoadBalancer for external access

## 🔍 Monitoring

### Check Application Status
```bash
# Kubernetes
kubectl get all -l app=voice-app

# Docker
docker ps
docker logs voice-app-container
```

### View Application Logs
```bash
kubectl logs -l app=voice-app
```

## 🧹 Cleanup

### Remove Docker Container
```bash
docker stop voice-app-container
docker rm voice-app-container
```

### Remove Kubernetes Deployment
```bash
kubectl delete -f kubernetes/
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🆘 Troubleshooting

### Common Issues

- **Microphone not working**: Check browser permissions and use HTTPS
- **Port already in use**: Use different port (3003, 3004, etc.)
- **Container name conflict**: Remove existing container first
- **Image not found**: Ensure Docker image is built locally


*Built with ❤️ using modern web technologies and cloud-native principles.*
