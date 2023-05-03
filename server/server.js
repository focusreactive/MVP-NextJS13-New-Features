import * as http from "http";

const logs = {};

http
  .createServer(async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Content-Type", "application/json");

    // await new Promise((res) => setTimeout(res, 5000));
    const url = `https://jsonplaceholder.typicode.com${req.url}`;
    const counter = (logs[url] = (logs[url] || 0) + 1);

    // if (logs[url] > 2) {
    //   res.writeHead(404, { "Content-Type": "text/plain" });
    //   return res.end();
    // }

    console.log(new Date(), `https://jsonplaceholder.typicode.com${req.url}`, counter);
    const result = await fetch(url).then((r) => r.json());

    res.end(JSON.stringify({ counter, data: result }));
  })
  .listen(4000);
