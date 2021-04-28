function textBill(){

    var total = 0;
    var smsTot=0;
    var callTot=0;
    var warning=0;
    var critical=0;
  
  function enterTextBill(theCost){
      
  
          if (theCost === "call"){
              callTot += 2.75;
          }
          else if (theCost === "sms"){
              smsTot += 0.75;
          }
      }

   

      function getCall(){
          return callTot;
      }

      function getSms(){
        return smsTot;
    }
  
  
  function getTot (){
      total= callTot +smsTot;
      return total
  }

  function getWarning(){
    if (getTot () >= 30 && getTot () < 50){
        return 'warning';
    }
    else if (getTot () >= 50.00){
        return 'critical';
    }
  }
  

 
     
  
      return {       
          getTot, 
          enterTextBill,
          getCall,
          getSms,
          getWarning
          
          
      }
  }
  
  