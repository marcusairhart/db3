connect();

async function connect() {
    const urlQlikServer = "https://g65jaeuc86rk7ms.eu.qlikcloud.com";
    const urlLoggedIn = "/api/v1/audits";//Use GET request to see if you are authenticated
    const urlLogin = "/login";
    const webIntegrationId = '8k_IjjeD1D0LOF4SkToDmRm5vvWLf5oz';        

    //Check to see if logged in
    return await fetch(`${urlQlikServer}${urlLoggedIn}`, {
        credentials: 'include',
        headers: {                  
            'Qlik-Web-Integration-ID':webIntegrationId
        }
    })
    .then(async function(response)
    {
        //check if user is authenticated; if not, redirect to login page
		if(response.status===401){
            const url = new URL(`${urlQlikServer}/login`);
            url.searchParams.append('returnto', 'https://marcusairhart.github.io/db3/');
            url.searchParams.append('qlik-web-integration-id', '8k_IjjeD1D0LOF4SkToDmRm5vvWLf5oz');
            window.location.href = url;
        }	
    })
    .catch(function(error)
    {
        console.error(error);
    });	
}			