describe('calculate the textbill totals', function(){
    let settingsBill = textBill();

   it('should  returns the total bill for sms ', function(){
   let settingsBill = textBill();
   settingsBill.enterTextBill('sms');
   assert.equal(0.75, settingsBill.getTot());
       
   });

  

   it('should  returns the total bill for  calls', function(){
   let settingsBill = textBill();
   settingsBill.enterTextBill('call');
   assert.equal(2.75, settingsBill.getTot());
       
   });


   it('should  returns the total bill for  calls and sms', function(){
    let settingsBill = textBill();
    settingsBill.enterTextBill('sms');
    settingsBill.enterTextBill('sms');
    settingsBill.enterTextBill('call');
    settingsBill.enterTextBill('call');

    assert.equal(5.50, settingsBill.getCall());
    assert.equal(1.5, settingsBill.getSms());
    assert.equal(7.00, settingsBill.getTot());
        
    });

    it('should  returns the total bill for  calls and sms', function(){
        let settingsBill = textBill();
        settingsBill.enterTextBill('sms');
        settingsBill.enterTextBill('sms');
        settingsBill.enterTextBill('call');
        settingsBill.enterTextBill('call');
        settingsBill.enterTextBill('sms');
        settingsBill.enterTextBill('sms');
        settingsBill.enterTextBill('call');
        settingsBill.enterTextBill('call');
        settingsBill.enterTextBill('sms');
        settingsBill.enterTextBill('sms');
        settingsBill.enterTextBill('call');
        settingsBill.enterTextBill('call');
        settingsBill.enterTextBill('sms');
        settingsBill.enterTextBill('sms');
        settingsBill.enterTextBill('call');
        settingsBill.enterTextBill('call');
    
        assert.equal(28.00, settingsBill.getTot());
        assert.equal(22.00, settingsBill.getCall());
    assert.equal(6.00, settingsBill.getSms());
            
        });

        it('should  returns the warning', function(){
            let settingsBill = textBill();
            
            settingsBill.enterTextBill('call');
            settingsBill.enterTextBill('call');
            settingsBill.enterTextBill('call');
            settingsBill.enterTextBill('call');
            settingsBill.enterTextBill('call');
            settingsBill.enterTextBill('call');
            settingsBill.enterTextBill('call');
            settingsBill.enterTextBill('call');
            settingsBill.enterTextBill('call');
            settingsBill.enterTextBill('call');
            settingsBill.enterTextBill('call');
            settingsBill.enterTextBill('call');
            settingsBill.enterTextBill('call');
            settingsBill.enterTextBill('call');
            settingsBill.enterTextBill('call');
            settingsBill.enterTextBill('call');
            settingsBill.enterTextBill('call');
            settingsBill.enterTextBill('call');
    
           
            assert.equal('warning', settingsBill.getWarning());
                           
            });


            it('should  returns the critical', function(){
                let settingsBill = textBill();
                
                settingsBill.enterTextBill('call');
                settingsBill.enterTextBill('call');
                settingsBill.enterTextBill('call');
                settingsBill.enterTextBill('call');
                settingsBill.enterTextBill('call');
                settingsBill.enterTextBill('call');
                settingsBill.enterTextBill('call');
                settingsBill.enterTextBill('call');
                settingsBill.enterTextBill('call');
                settingsBill.enterTextBill('call');
                settingsBill.enterTextBill('call');
                settingsBill.enterTextBill('call');
                settingsBill.enterTextBill('call');
                settingsBill.enterTextBill('call');
                settingsBill.enterTextBill('call');
                settingsBill.enterTextBill('call');
                settingsBill.enterTextBill('call');
                settingsBill.enterTextBill('call');
                settingsBill.enterTextBill('call');
                settingsBill.enterTextBill('call');
                settingsBill.enterTextBill('call');
                settingsBill.enterTextBill('call');
                settingsBill.enterTextBill('call');
                settingsBill.enterTextBill('call');
        
               
                assert.equal('critical', settingsBill.getWarning());
                               
                });
  
});

