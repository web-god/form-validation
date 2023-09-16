let user=document.getElementById("user");

let pass=document.getElementById("password");

let flag=1;

function validateForm(){
    if(user.value==""){
      document.getElementById("userError").innerHTML="User Name is Empty"
      flag=0;
    }

    else if(user.value.length<3){
        document.getElementById("userError").innerHTML="User Name require min 3 char" 
        flag=0;
    }

    else{
        document.getElementById("userError").innerHTML=" " 
        flag=1;
    }

    if(pass.value==""){
        document.getElementById("passError").innerHTML="Password is Empty"
        flag=0;
    }

     else{
        document.getElementById("passError").innerHTML=" " ;
        flag=1;
    }
  
      if(flag==1){
        return true;
      }
    else{
        return false;
    }
}