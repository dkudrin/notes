#!/bin/bash
# Run it with: bash <scriptname.sh>
# Make this scripts executable: chmod 555 <scriptname.sh> ; And the run it as executable with: ./<scriptname.sh>

sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list
sudo apt-get update
sudo apt-get install -y mongodb-org # A metapackage that will automatically install the four component packages listed below.
#sudo apt-get install -y mongodb-org-server # mongod daemon and associated configuration and init scripts.
#sudo apt-get install -y mongodb-org-mongos # mongos daemon.
#sudo apt-get install -y mongodb-org-shell # mongo shell.
#sudo apt-get install -y mongodb-org-tools # MongoDB tools: mongoimport bsondump, mongodump, mongoexport, mongofiles, mongooplog, mongoperf, mongorestore, mongostat, and mongotop.


# GUI app for mongo Mongochef