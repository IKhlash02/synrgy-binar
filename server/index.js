const http = require("http");
const fs = require("fs");
const getPublicDir = require("./helpers/getPublicDir");
const getHtml = require("./helpers/getHtml");
const { PORT = 8000 } = process.env;

const readStaticFiles = (reqUrl, res, contentType, enc) => {
  const filePath = getPublicDir(reqUrl);
  const fileStream = fs.createReadStream(filePath, enc);
  res.writeHead(200, { "Content-Type": contentType });
  fileStream.pipe(res);
};

const onReq = (req, res) => {
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(getHtml("index.html"));
  } else if (url == "/cars") {
    res.writeHead(200);
    res.end(getHtml("car_search.html"));
  } else if (url == "/example") {
    res.writeHead(200);
    res.end(getHtml("index.example.html"));
  } else if (url.match(".css$")) {
    readStaticFiles(url, res, "text/css", "UTF-8");
  } else if (url.match(".png$")) {
    readStaticFiles(url, res, "image/png");
  } else if (url.match(".svg$")) {
    readStaticFiles(url, res, "image/svg+xml");
  } else if (url.match(".jpg$")) {
    readStaticFiles(url, res, "image/jpg");
  } else if (url.match(".js$")) {
    readStaticFiles(url, res, "text/js", "UTF-8");
  }
};
const server = http.createServer(onReq);

server.on("error", (err) => {
  console.error("Server error:", err);
});

server.listen(PORT, "0.0.0.0", () => {
  console.info("Server sudah berjalan, silahkan buka http://0.0.0.0:%d", PORT);
});
