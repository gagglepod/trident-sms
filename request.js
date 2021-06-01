// Twilio Credentials
var accountSid = "<AccountSid>";
var authToken = "<AuthToken>";

//require the Twilio module and create a REST client
var client = require("twilio")(accountSid, authToken);

client.messages.create(
  {
    to: "<ToNumber>",
    from: "<FromNumber>",
    body: "<BodyText>",
  },
  function (err, message) {
    console.log(message.sid);
  }
);
