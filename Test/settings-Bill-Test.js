describe('The bill with settings factory function', function(){

    it('should be able to set call cost', function(){
        let settingsBill = billWithSettings();

        settingsBill.setCallCost(2.00);
        assert.equal(2.00, settingsBill.getCallCost());
    });

    it('should be able to set sms cost', function(){
        let settingsBill = billWithSettings();

        settingsBill.setSmsCost(0.50);
        assert.equal(0.50, settingsBill.getSmsCost());
    });


    it('should be able to set both sms cost and call cost', function(){
        let settingsBill = billWithSettings();

        settingsBill.setSmsCost(0.56);
        settingsBill.setCallCost(2.56);

        assert.equal(0.56, settingsBill.getSmsCost());
        assert.equal(2.56, settingsBill.getCallCost());
    });

    it('should be able to set warning level', function(){
        let settingsBill = billWithSettings();

        settingsBill.setWarningLevel(10.00);
        assert.equal(10.00, settingsBill.getWarning());
    });

    it('should be able to set critical level', function(){
        let settingsBill = billWithSettings();

        settingsBill.setCriticalLevel(20.00);
        assert.equal(20.00, settingsBill.getCritical());
    });

    it('should be able to set both critical level and warning level', function(){
        let settingsBill = billWithSettings();

        settingsBill.setCriticalLevel(25.50);
        settingsBill.setWarningLevel(15.00);

        assert.equal(25.50, settingsBill.getCritical());
        assert.equal(15.00, settingsBill.getWarning());
    });


    describe('use values', function(){

        it('should be able to use the  call cost set', function(){
            let settingsBill = billWithSettings();
    
            settingsBill.setCallCost(2.30);
            settingsBill.getSmsCost(0.30);

            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            
            assert.equal(6.00, settingsBill.getTotalCost());
            assert.equal(6.00, settingsBill.getTotalCallCost());
            assert.equal(0.00, settingsBill.getTotalSmsCost());
        });

        it('should be able to use the  call cost set for 2 calls at 1.00 each', function(){
            let settingsBill = billWithSettings();
    
            settingsBill.setCallCost(1.00);
            settingsBill.getSmsCost(0.35);

            settingsBill.makeCall();
            settingsBill.makeCall();
            
            
            assert.equal(2.00, settingsBill.getTotalCost());
            assert.equal(2.00, settingsBill.getTotalCallCost());
            assert.equal(0.00, settingsBill.getTotalSmsCost());
        });

   
});
});