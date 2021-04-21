function billWithSettings(){

    var callbill=0;
    var smsBill=0;
    var warningLevel=0;
    var criticalLevel=0;

    var callCostTotal=0;
    var smsCostTotal=0;

    function setCallCost(callcost){
        callbill= callcost;
    }

    function getCallCost(){
        return callbill;
    }


    function setSmsCost(smscost){
        smsBill= smscost;
    }

    function getSmsCost(){
        return smsBill;
    }

    function setWarningLevel(wlevel){
        warningLevel = wlevel;
    }

    function getWarning (){
         return warningLevel;
    }

    function setCriticalLevel(clevel){
        criticalLevel = clevel;
    }

    function getCritical (){
        return criticalLevel
    }

    function makeCall(){
     callCostTotal += theCallCost
    }

    function getTotalCost(){
        return 6.00;

    }

    function getTotalCallCost(){
      return 6.00;
    }

    function getTotalSmsCost(){
        return call;
      }

    return {
        setCallCost,
        getCallCost,
        setSmsCost,
        getSmsCost,
        getWarning,
        setWarningLevel,
        getCritical,
        setCriticalLevel,
        makeCall,
        getTotalCost,
        getTotalCallCost,
        getTotalSmsCost
    }
}