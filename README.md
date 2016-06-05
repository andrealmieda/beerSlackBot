# Slack Beer Bot

This project was created with the objective of warn the office personal, when a build of a project failed!
This meant that the dev responsable for the commit that failed would have to pay beer to the whole team.

## Installation
### NODEJS

* `# wget -qO- https://deb.nodesource.com/setup_4.x | sudo bash -`
* `# apt-get install --yes nodejs`

### UBUNTU / DEBIAN

* `# apt install mplayer`



##Running

npm run bot -- whatEverTheBotKeyIs

##Problems
###The bot doesn't start up

make sure you pass the botkey as a arg for the npm run bot

###The sound doesn't reproduce

make sure that the sound card is correct using the aplay -l command
