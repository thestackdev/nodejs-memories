#/bin/bash

echo 'Deploy started...'
rsync -av --exclude='node_modules' --exclude='.git' ../nodejs-memories/ ubuntu@152.70.74.152:~/projects/memories
ssh ubuntu@152.70.74.152 "cd ~/projects/memories && docker-compose up -d --build"
echo 'Deployed!'
