const axios = require("axios");
const querystring = require("querystring");
function GeoCode(address) {
    let notqueryaddress = querystring.stringify({address: address});
    const index = notqueryaddress.indexOf("=");
    let queryaddress = notqueryaddress.substring(index+1);
    axios.get("http://www.mapquestapi.com/geocoding/v1/address?key=knTACfthNjNUXehownmiFKqOjxOW4Sd9&location="+queryaddress)
        .then(res => {
            console.log(res.data.results[0].locations[0].latLng);
            console.log(JSON.stringify(res.data))
        })
        .catch(err => {
            console.log(err)
        })
}
GeoCode("200 Verrill Rd, Poland, ME 04274, USA");
/*
Success:
http://www.mapquestapi.com/geocoding/v1/address?key=knTACfthNjNUXehownmiFKqOjxOW4Sd9&location=
 API KEY:
 knTACfthNjNUXehownmiFKqOjxOW4Sd9
 */