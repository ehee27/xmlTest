export const fetchSOAP = async (xmlBody) => {
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