// Scott has 2 packages he is using here
// 1) xml2js
// 2) xml-js
// I need to determine which is easier to build JSON from XML

import convert from 'xml-js';

// Create the POST body specifying the resource to retrieve
const xmlBody = `<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <GetHotelMedia xmlns="http://webapi.globusandcosmos.com/">
      <hotelCode>HRMRAIL</hotelCode>
    </GetHotelMedia>
  </soap:Body>
</soap:Envelope>`;

// Does SOAP take GET requests, or do I have to always use POST?
const fetchSOAP = async () => {
    const data = await fetch(
        'https://contentapi.globusfamily.com/gvitawapi.asmx?WSDL',
        {
            method: 'POST',
            headers: {
                'Content-type': 'text/xml'
            },
            body: xmlBody
        }
    );

    return data;
};

fetchSOAP()
    .then(res => res.text())
    .then(data => {
        const options = { compact: true, spaces: 2 };
        let result = convert.xml2json(data, options);
        let jsonData = JSON.parse(result);
        console.log(jsonData["soap:Envelope"]["soap:Body"]["GetHotelMediaResponse"]["GetHotelMediaResult"]);
    })

// At this point I should have a response object called "data";
// Now I need to convert the XML to JSON or better a JS object