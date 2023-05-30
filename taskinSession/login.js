let counter=0;
let disable=false;
function check(){  
    var pass=document.getElementById("password").value;  
    if(pass==="123" && disable==false){
        document.getElementById("result").innerHTML="succeed"
        counter=0
    }
    else{
        counter++;
        if(counter>=3){
            pass.disabled=true
            document.getElementById("submit").disabled=true
            disable=true
            document.getElementById("submit").innerHTML="failed"
            document.getElementById("result").innerHTML="failed"
        }
        else{
          document.getElementById("result").innerHTML="try again"
        }
       
        
    }
   
    }  