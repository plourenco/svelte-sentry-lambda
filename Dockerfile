FROM node:18-alpine
RUN apk update && apk add bash
WORKDIR /app
CMD npm install && npm run build && npx sls deploy