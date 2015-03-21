FROM ubuntu

RUN apt-get update && apt-get install -y \
  nodejs

RUN apt-get update

RUN apt-get install -y \
  nodejs \
  npm \
  git \
  git-core \

COPY start.sh /tmp/

RUN chmod +x /tmp/start.sh

CMD ./tmp/start.sh
