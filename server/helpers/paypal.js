const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: 'sandbox',
  client_id: "sdfsdf",
  client_secret: "sdfsdf",
});

module.exports = paypal;
