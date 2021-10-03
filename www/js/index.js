


document.getElementById("btnrun").addEventListener("click", function() {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('myapp').classList.add('ready');
    UnityAR.launchWithMessage("Manager","GetMessageFromCordova","Cordova Msg",
    (data)=>{
        console.log("success ",data);
    },(err)=>{
        console.log("error ",err);
    });;
  });


