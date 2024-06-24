import convert from "xml-js";
import { fetchSOAP } from './utils/xmlReqMethod.js'

// GetHotelMedia Call
// https://contentapitrain.globusfamily.com/gvitawapi.asmx?op=GetHotelMedia
const getHotelMediaXmlBody = `<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <GetHotelMedia xmlns="http://webapi.globusandcosmos.com/">
      <hotelCode>HRMRAIL</hotelCode>
    </GetHotelMedia>
  </soap:Body>
</soap:Envelope>`;


fetchSOAP(getHotelMediaXmlBody)
    .then(res => res.text())
    .then(data => {
        const options = { compact: true, spaces: 2 };
        let result = convert.xml2json(data, options);
        let jsonData = JSON.parse(result);
        console.log(jsonData["soap:Envelope"]["soap:Body"]["GetHotelMediaResponse"]["GetHotelMediaResult"]);
    });

// GetAllHotelCodes Call
// https://contentapitrain.globusfamily.com/gvitawapi.asmx?op=GetAllHotelCodes
const getAllHotelCodesXmlBody = `<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <GetAllHotelCodes xmlns="http://webapi.globusandcosmos.com/" />
  </soap:Body>
</soap:Envelope>`

fetchSOAP(getAllHotelCodesXmlBody)
    .then(res => res.text())
    .then(data => {
        const options = { compact: true, spaces: 2 };
        let result = convert.xml2json(data, options);
        let jsonData = JSON.parse(result);
        console.log(jsonData["soap:Envelope"]["soap:Body"]["GetAllHotelCodesResponse"]["GetAllHotelCodesResult"]["string"]);
    });
