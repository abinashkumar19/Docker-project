yum install docker -y
systemctl start docker 
systemctl status docker
yum install git -y
sudo yum install mariadb105-server -y


sudo yum update -y            
sudo yum install docker -y
sudo service docker start
sudo usermod -aG docker ec2-user
sudo curl -SL https://github.com/docker/compose/releases/download/v2.29.2/docker-compose-linux-x86_64 -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
docker-compose up --build



docker-compose up -d --build
