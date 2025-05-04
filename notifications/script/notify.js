var btn1 = document.getElementById("notify");

btn1.addEventListener("click", notifyMe);

function notifyMe(){
    Notification.requestPermission().then(doIhavePermission => {
        if(doIhavePermission === "granted"){
            new Notification("You have been notified!", {
                body: "Hey there is more than meets the eye.",
                icon: "img/info.png",
                tag: "ontime"
            })
        }
        
    })
}