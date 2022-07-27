const config = {
    host: 'g65jaeuc86rk7ms.eu.qlikcloud.com', //for example, 'abc.us.example.com'
    prefix: '/',
    port: 443,
    isSecure: true,
    webIntegrationId: '8k_IjjeD1D0LOF4SkToDmRm5vvWLf5oz',
  };
  require.config({
    baseUrl: `https://${config.host}/resources`,
    webIntegrationId: config.webIntegrationId,
  });

  require(['js/qlik'], (qlik) => {
    qlik.on('error', (error) => console.error(error));

    const app = qlik.openApp('9f373ea2-3008-427e-95da-ad1c877deded', config); // Replace 'AppId' with the movies app ID
    
   

    app.visualization.get('DzDMb').then((vis) => vis.show('QV03'))
    app.visualization.get('DzDMb').then((vis) => vis.show('QV04'))
    app.visualization.get('YABpx').then((vis) => vis.show('QV05'))


  });

  //http://127.0.0.1:8080?tenant=https://g65jaeuc86rk7ms.eu.qlikcloud.com&wiid=8k_IjjeD1D0LOF4SkToDmRm5vvWLf5oz&app=9f373ea2-3008-427e-95da-ad1c877deded
  