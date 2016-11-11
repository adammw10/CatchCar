exports.handler = function(event, context) {
    var AWS = require("aws-sdk");
AWS.config.update({
  region: "us-west-2",
});
var docClient = new AWS.DynamoDB.DocumentClient();
var table = "CCDB"

var params = {
    TableName:table,
    Item:{
        "carId": event.carId,
        "Longitude": event.Longitude,
        "Latitude" : event.Latitude
    }
};

console.log("Adding a new item...");
docClient.put(params, function(err, data) {
    if (err) {
        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Added item:", JSON.stringify(data, null, 2));
    }
});
};