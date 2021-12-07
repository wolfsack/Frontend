FROM node:16.13.1 as builder


# update npm
RUN npm install npm@latest -g

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

COPY . .

RUN npm run build

FROM node:16.13.1

WORKDIR /app

COPY --from=builder /app/build/ ./build

COPY package.json  package-lock.json /app/

ENV PORT=3030

EXPOSE 3030

ENTRYPOINT [ "node" ]

CMD ["./build"]