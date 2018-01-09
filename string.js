var locations = require('./src/extra/allLocations.js');
var locFields = [];
for (var i = 0; i < (locations.battery).length; i++) {
  locFields.push([]);
}
for (var i = 0; i < (locations.battery).length; i++) {
  locFields[i]["latitude"] = locations.battery[i][1];
  locFields[i]["longitude"] = locations.battery[i][2];
  locFields[i]["name"] = locations.battery[i][0];
  locFields[i]["phone"] = locations.battery[i][3];
  locFields[i]["postal"] = locations.battery[i][4];
}

console.log(JSON.stringify(locations.paint))
