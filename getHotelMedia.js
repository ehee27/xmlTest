// getHotelMedia with hotel code "HRMRAIL"
import { parseString } from 'xml2js'

const xmlBody = `<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <GetHotelMedia xmlns="http://webapi.globusandcosmos.com/">
      <hotelCode>HRMRAIL</hotelCode>
    </GetHotelMedia>
  </soap:Body>
</soap:Envelope>`

const fetchSOAP = async () => {
  const data = await fetch(
    'https://contentapi.globusfamily.com/gvitawapi.asmx?WSDL',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'text/xml',
      },
      body: xmlBody,
    }
  )
  return data
}

fetchSOAP()
  .then(res => res.text())
  .then(res =>
    parseString(res, function (err, results) {
      // let string = JSON.stringify(results)
      // let data = JSON.parse(string)
      let data = JSON.stringify(results)
      console.log('This shit right heeer', data)
    })
  )
