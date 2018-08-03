  
   
  
    function showw(e)
    {
      
      var e1,e2,e3,e4;
      e1=document.getElementById("namearea").value;
      e2=document.getElementById("LastNamearea").value;
      e3=document.getElementById("emailarea").value;
      e4=document.getElementById("Passwordarea").value;

      if(e1 && e2 && e3 && e4)
       document.getElementById('messagee').style.display = "flex";
     else 
       document.getElementById('messageefasle').style.display = "flex";
         

      e.preventDefault();
       

    
    }
    
