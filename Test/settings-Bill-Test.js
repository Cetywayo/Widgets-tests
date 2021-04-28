describe('The bill with settings factory function', function(){

    it('should be able to set call cost', function(){
        let settingsBill = BillWithSettings();

        settingsBill.setCallCost(1.00);
        assert.equal(1.00, settingsBill.getCallCost());
    });

    it('should be able to set sms cost', function(){
        let settingsBill = BillWithSettings();

        settingsBill.setSmsCost(0.50);
        assert.equal(0.50, settingsBill.getSmsCost());
    });


    it('should be able to set both sms cost and call cost', function(){
        let settingsBill = BillWithSettings();

        settingsBill.setSmsCost(0.56);
        settingsBill.setCallCost(2.56);

        assert.equal(0.56, settingsBill.getSmsCost());
        assert.equal(2.56, settingsBill.getCallCost());
    });

    it('should be able to set warning level', function(){
        let settingsBill = BillWithSettings();

        settingsBill.setWarningLevel(10.00);
        assert.equal(10.00, settingsBill.getWarning());
    });

    it('should be able to set danger level', function(){
        let settingsBill = BillWithSettings();

        settingsBill.setCriticalLevel(20.00);
        assert.equal(20.00, settingsBill.getCritical());
    });

    it('should be able to set both danger level and warning level', function(){
        let settingsBill = BillWithSettings();

        settingsBill.setCriticalLevel(25.50);
        settingsBill.setWarningLevel(15.00);

        assert.equal(25.50, settingsBill.getCritical());
        assert.equal(15.00, settingsBill.getWarning());
    });

        
describe("use values" , function(){
   it ("should be able to use the call cost set", function(){
       let settingsBill = BillWithSettings();

       settingsBill.setCallCost(2.25);
       settingsBill.setSmsCost(0.85);
       settingsBill.setCriticalLevel(10.00);
       settingsBill.makeCall();
       settingsBill.makeCall();
       settingsBill.makeCall();

       assert.equal(6.75, settingsBill.getTotalcost());
       assert.equal(6.75, settingsBill.getTotalCallcost());
       assert.equal(0.00, settingsBill.getTotalSmscost());


   });

   it ("should be able to use the call cost set for 2 calls at 1.35 each", function(){
    let settingsBill = BillWithSettings();

    settingsBill.setCallCost(2.00);
    settingsBill.setSmsCost(0.85);
    settingsBill.setCriticalLevel(10.00);

    settingsBill.makeCall();
    settingsBill.makeCall();
    settingsBill.makeCall();
    settingsBill.makeCall();
    settingsBill.makeCall();
    
    

    assert.equal(10.00, settingsBill.getTotalcost());
    assert.equal(10.00, settingsBill.getTotalCallcost());
    assert.equal(0.00, settingsBill.getTotalSmscost());


});

it ("should be able to send 2 sms's at 0.85", function(){
    let settingsBill = BillWithSettings();

    settingsBill.setCallCost(1.35);
    settingsBill.setSmsCost(0.85);
    settingsBill.setCriticalLevel(10.00);

    settingsBill.sendSms();
    settingsBill.sendSms();
    

    assert.equal(0.00, settingsBill.getTotalCallcost());
    assert.equal(1.70, settingsBill.getTotalSmscost());
    assert.equal(1.70, settingsBill.getTotalcost());


});

it ("should be able to send 2 sms's at 0.85 and make 2 call at 1.35", function(){
    let settingsBill = BillWithSettings();

    settingsBill.setCallCost(1.35);
    settingsBill.setSmsCost(0.85);
    settingsBill.setCriticalLevel(10.00);

    settingsBill.sendSms();
    settingsBill.sendSms();
    settingsBill.sendSms();
    settingsBill.sendSms();
    settingsBill.makeCall();
    settingsBill.makeCall();
    

    assert.equal(2.70, settingsBill.getTotalCallcost());
    assert.equal(3.40, settingsBill.getTotalSmscost());
    assert.equal(6.10, settingsBill.getTotalcost());


});

});
   
describe("warning & danger level" , function(){
    it ("should return the  class  name of 'warning', if warning is reached", function(){
        let settingsBill = BillWithSettings();
 
        settingsBill.setCallCost(2.25);
        settingsBill.setSmsCost(0.85);
        settingsBill.setWarningLevel(5.00);
        settingsBill.setCriticalLevel(10.00);
 
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
 
        assert.equal("warning", settingsBill.addClass
        ());
        
 
 
    });

    it ("should return the  class  name of 'danger', if danger level has been   reached", function(){
        let settingsBill = BillWithSettings();
 
        settingsBill.setCallCost(3.25);
        settingsBill.setSmsCost(0.85);
        settingsBill.setCriticalLevel(10.00);
 
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();

        assert.equal('danger', settingsBill.addClass());
        
 
 
    });

    it ("should stop the total call from increasing when the  danger level has been  reached", function(){
        let settingsBill = BillWithSettings();
 
        settingsBill.setCallCost(2.50);
        settingsBill.setSmsCost(0.85);
        settingsBill.setCriticalLevel(10.00);
 
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();

        assert.equal("danger", settingsBill.addClass());
        
        assert.equal(10, settingsBill.getTotalCallcost());
 
    });

    it ("should the total to increse after updating the danger level", function(){
        let settingsBill = BillWithSettings();
 
        settingsBill.setCallCost(2.50);
        settingsBill.setSmsCost(0.85);
        settingsBill.setWarningLevel(8.00);
        settingsBill.setCriticalLevel(10.00);
 
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();

        assert.equal("danger", settingsBill.addClass());
        assert.equal(10, settingsBill.getTotalCallcost());

        
        settingsBill.setCriticalLevel(20.00);
        assert.equal("warning", settingsBill.addClass());
        settingsBill.makeCall();
        settingsBill.makeCall();
        assert.equal(15, settingsBill.getTotalcost());
    });

});

});