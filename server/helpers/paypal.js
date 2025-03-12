const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "aaaa",
  client_secret: "bbbb",
});

module.exports = paypal;
