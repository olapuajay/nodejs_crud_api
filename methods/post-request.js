const crypto = require('crypto');
const reqBodyParser = require('../util/body-parser');

module.exports = async (req, res) => {
  if(req.url === "/api/movies") {
    try {
      let body = await reqBodyParser(req);
      body.id = crypto.randomUUID();
      req.movies.push(body);
      console.log("Request Body: ", body);
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end();
    } catch (err) {
      console.log(err);
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          title: "Validation Failed",
          message: "Request body is not valid"
        })
      );
    }
  }
};