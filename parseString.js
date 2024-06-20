// run a useEffect and store data in state

import { parseString } from 'xml2js'

const xmlBody = `<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <GetAvailableTours xmlns="http://webapi.globusandcosmos.com/">
      <brand>Globus</brand>
    </GetAvailableTours>
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
    parseString(res, function (err, result) {
      let data = JSON.stringify(result)

      console.log('This shit right heeer', data)
    })
  )
