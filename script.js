var injected = false;
//This function would check if the name 
//given is in the active chatboxes and will
//close it if true.
var addListener = function(){
    document.addEventListener("click",function(){
    	var x = document.getElementsByClassName("_15p4 _2pis");
    	if(x.length != 0){
            for(var i = 0;i<x.length;i++){
                if(x[i].innerText == "Gaggu Sahour\n"){
                    x[i].childNodes[1].childNodes[4].childNodes[0].click();
                }
            }
    	}
    });
}

if(injected == false){
    injected = true;
    addListener();
}
