#!/bin/sh

sudo service mongod start

OUT=sudo cat /var/log/mongodb/mongod.log
if  [ $OUT=*"waiting for connections on port 27017"* ]; then
    echo "MONGOD INICIADO"
else    
    sudo service mongod start
fi