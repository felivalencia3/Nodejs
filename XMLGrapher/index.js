const fs = require("fs");
const neo4j = require('neo4j-driver').v1;
const parser = require("xml2json");
fs.readFile("./GenericObject.xml", (err,data) => {
    let json = parser.toJson(data);
    json = JSON.parse(json);
    json = JSON.stringify(json,null,2);
    console.log(json)
});