const crypto = require('crypto');
const reqBodyParser = require('../util/body-parser');

module.exports = async (req, res) => {
  if(req.url === "/api/movies") {
    try {
      let body = await reqBodyParser(req);
      console.log("Request Body: ", body);
    } catch (error) {
      
    }
  }
};