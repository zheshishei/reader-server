cd /tmp

# try to remove the repo if it already exists
rm -rf reader-server; true

git clone https://github.com/zheshishei/reader-server reader-server

cd reader-server

npm install

/usr/bin/node server.js
