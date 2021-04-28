function calculateBill(){

    var total = 0;
  
  function entercalculateBill(theCost){
      var cost = theCost.split(',');
  
      for (var i=0;i<cost.length;i++){
            var bill = cost[i].trim();
          if (bill === "call"){
              total += 2.75;
          }
          else if (bill === "sms"){
              total += 0.75;
          }
      }
  
  }

  function getLevel(){
    if (getTot () >= 30 && getTot () < 50){
        return 'warning';
    }
    else if (getTot () >= 50.00){
        return 'critical';
    }
  }
  
  function getTot (){
      return total;
  }
     
  
      return {       
          getTot, 
          entercalculateBill,
          getLevel
      }
  }
  
  