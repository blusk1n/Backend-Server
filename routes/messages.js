var express = require("express");
var router = express.Router();
const MessagesModel = require("../models/Messages");
const sequelize = require("../models/index");
sequelize.sync().then(data => console.log(data));

router.get("/", (req, res, next) => {
  res.send("respond with a message");
});

router.post("/store", (req, res) => {
  let body = req.body;
  console.log({ body });

  let msg = body.messageContent;
  MessagesModel.create({
    messageContent: msg
  })
    .then(message => {
      res.json(msg);
    })
    .catch(err => {
      res.json(err);
    });
  res.send(msg);
});
// let msg = body.messageContent;
// MessagesModel.create(msg)
//   .then(message => {
//     res.json(msg);
//   })
//   .catch(err => {
//     res.json(err);
//   });

module.exports = router;
