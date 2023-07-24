 function validateform(){  
              var name=document.myform.name.value;
              var password=document.myform.password.value;
            if (name==null || name=="") {
                alert("Name can't be blank");
                return false;
            }  
 
            if(password.length<8){  
              alert("Password must be at least 8 characters long.");  
              return false;  
              }  
            }

 function thanks(){
  var feedback=document.form.feedback.value;
  if (feedback==null||feedback==""){
    alert("Feedback cannot be submitted blank");
  }
  else{
  alert("Thanks for your feedback");}
 }           
