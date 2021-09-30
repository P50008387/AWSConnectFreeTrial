 //window.myCPP = window.myCPP || {};
 window.onload = getCurrentMetrics;
   //replace with the CCP URL for the current Amazon Connect instance
   // const ccpUrl = "https://MYINSTANCE.awsapps.com/connect/ccp#/";

    //const ccpUrl = "https://capitachat.my.connect.aws/ccp#/";

    //replace with API URL
    const metricAPI = " https://jx53h5r104.execute-api.us-east-1.amazonaws.com/connectMetricsApi";


    //connect.core.initCCP(containerDiv, {
     //   ccpUrl: ccpUrl,        
     //   loginPopup: true,         
    //    softphone: {
    //        allowFramedSoftphone: true
    //    }
    //});

    connect.contact(subscribeToContactEvents);  
    

    function subscribeToContactEvents(contact) {
        window.myCPP.contact = contact;
        updateContactAttribute(contact.getAttributes());    
        contact.onEnded(clearContactAttribute);
        
    }

    function updateContactAttribute(msg){
        const tableRef = document.getElementById('attributesTable').getElementsByTagName('tbody')[0];      
        for (let key in msg) {
            if (msg.hasOwnProperty(key)) {
                        let row = tableRef.insertRow(tableRef.rows.length);
                        let cell1 = row.insertCell(0);
                        let cell2 = row.insertCell(1);
                        cell1.innerHTML = key;
                        cell2.innerHTML = msg[key]['value'];
            }
        }
        
    }

    function clearContactAttribute(){
        const old_tbody= document.getElementById('attributesTable').getElementsByTagName('tbody')[0];
        const new_tbody = document.createElement('tbody');    
        old_tbody.parentNode.replaceChild(new_tbody, old_tbody);     
    }

    function millisToMinAndSec(millis) {
          const minutes = Math.floor(millis / 60000);
          const seconds = ((millis % 60000) / 1000).toFixed(0);
          return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
        }

     function getCurrentMetrics(){
            const request = new XMLHttpRequest();
            request.open('GET', metricAPI , true);
            request.onload = function () {

              // Begin accessing JSON data here
              let data = JSON.parse(this.response);

              if (request.status >= 200 && request.status < 400) {
                 console.log(data);
                 updateQueueAttribute(data);          
              } else {
                console.log('error');
                
              }
            }
        request.send();
        setTimeout(getCurrentMetrics, 5000);
    }


     function  updateQueueAttribute(data){
        
        document.getElementById('calls').innerHTML = data.CONTACTS_IN_QUEUE;
        document.getElementById('lwt').innerHTML = millisToMinAndSec(data.OLDEST_CONTACT_AGE);
        document.getElementById('availableAgents').innerHTML = data.AGENTS_AVAILABLE;
        document.getElementById('onlineAgents').innerHTML = data.AGENTS_ONLINE;
	    document.getElementById('Agentsstaffed').innerHTML = data.AGENTS_STAFFED;
	    document.getElementById('Agentsoncall').innerHTML = data.AGENTS_ON_CALL;
	    document.getElementById('Agentserror').innerHTML = data.AGENTS_ERROR;
	    document.getElementById('Agentsnonprod').innerHTML = data.AGENTS_NON_PRODUCTIVE;

       
     
         
    }