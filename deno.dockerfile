FROM hayd/debian-deno:1.0.0

EXPOSE 3000

WORKDIR /app

USER deno

ADD . .

CMD ["run", "-A", "--allow-env", "index.js"]