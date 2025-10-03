# 🚀  Commands (Docker, Git, MariaDB, Docker Compose)

Run the following commands on your EC2 instance to install and configure **Docker, Git, MariaDB, and Docker Compose** from abinashkumar

```bash
# Install Docker
yum install docker -y
systemctl start docker 
systemctl status docker

# Install Git
yum install git -y

# Install MariaDB
sudo yum install mariadb105-server -y

# Update packages
sudo yum update -y            

# Reinstall Docker (optional)
sudo yum install docker -y

# Start Docker service
sudo service docker start

# Add ec2-user to Docker group
sudo usermod -aG docker ec2-user

# Install Docker Compose
sudo curl -SL https://github.com/docker/compose/releases/download/v2.29.2/docker-compose-linux-x86_64 -o /usr/local/bin/docker-compose

# Give execute permission
sudo chmod +x /usr/local/bin/docker-compose

# Run Docker Compose (build containers)
docker-compose up --build

# Run Docker Compose in detached mode
docker-compose up -d --build
