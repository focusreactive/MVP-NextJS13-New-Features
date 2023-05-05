import * as http from 'http';

const logs = {};

http
  .createServer(async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Content-Type', 'application/json');

    console.log(req.url);

    try {
      if (req.url.includes('/logs')) {
        res.end(JSON.stringify({ logs }));
      }

      // await new Promise((res) => setTimeout(res, 5000));
      const url = `https://jsonplaceholder.typicode.com${req.url}`;
      const counter = (logs[req.url] = (logs[req.url] || 0) + 1);

      // if (logs[url] > 2) {
      //   res.writeHead(404, { "Content-Type": "text/plain" });
      //   return res.end();
      // }

      const result = await fetch(url, { cache: 'no-store' }).then((r) =>
        r.json(),
      );

      res.end(JSON.stringify({ counter, data: result, logs }));
    } catch (error) {
      console.error(error);
    }
  })
  .listen(4000);
