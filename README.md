Getting started with Linode
https://www.linode.com/docs/getting-started

Securing your server
https://www.linode.com/docs/security/securing-your-server

Setup nodejs on ubuntu server
https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-16-04

To ensure nodejs app is restarted whenever there's a crash with app, changes in file or directories or subdirectories, or system reboot.
Install pm2 , sudo npm install -g pm2
Add app.js to pm2, pm2 start app.js --name 'budgetApp' --watch
The --watch automatically restarts your app when a file changes in the current directory or its subdirectories.

When the system reboots, have it startup your app.
pm2 startup

copy the path outputted in terminal after above command.

Save all running process so pm2 can remember, pm2 save
