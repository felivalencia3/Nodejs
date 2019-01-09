const DOMParser = require("xmldom").DOMParser;
const fs = require("fs");
/*
console.log("started.");
const xml = fs.readFile("Labs/xml/GenericObject.xml", (err,data) => {
  if (err) throw err;
  console.log(xml);
  const doc = new DOMParser().parseFromString(data,"text/xml")
  const elements = doc.getElementsByTagName("resource");
})
*/
fs.readFile(__dirname+"/xml/GenericObject.xml",'utf8',(err,data) => {
  if (err) throw err;
  const doc = new DOMParser().parseFromString(data,"text/xml");
  
})