
  
  
  
   describe('calculate the  bill total for calls and sms', function(){
    let settingsBill = calculateBill();

   it('should  returns the total bill for sms and calls', function(){
   let settingsBill = calculateBill();
   settingsBill.entercalculateBill('call');
   assert.equal(2.75, settingsBill.getTot());
       
   });

   it('should  returns the total bill for sms', function(){
    let settingsBill = calculateBill();
    settingsBill.entercalculateBill('sms');
    assert.equal(0.75, settingsBill.getTot());
        
    });

    it('should  returns the total bill for both call and sms', function(){
        let settingsBill = calculateBill();
        settingsBill.entercalculateBill('sms,call,call,call,sms');
        assert.equal(9.75, settingsBill.getTot());
            
        });

        it('should  returns the total bill for both call and sms', function(){
            let settingsBill = calculateBill();
            settingsBill.entercalculateBill('sms,call,call,call,sms,sms,call,call,call,sms,sms,call,call,call,sms');
            assert.equal(29.25, settingsBill.getTot());
                
            });


        it('should  returns the warning', function(){
            let settingsBill = calculateBill();
            
            settingsBill.entercalculateBill('sms,call,call,call,sms,sms,call,call,call,sms,sms,call,call,call,sms,sms,call,call,call,sms,sms,call');
    
           
            assert.equal('warning', settingsBill.getLevel());
                           
            });


            it('should  returns the critical', function(){
                let settingsBill = calculateBill();
                
                settingsBill.entercalculateBill('sms,call,call,call,sms,sms,call,call,call,sms,sms,call,call,call,sms,sms,call,call,call,sms,sms,call,sms,call,call,call,sms,sms,call,call,call,sms,sms,call,call,call,sms,sms,call,call,call,sms,sms,call');
        
               
                assert.equal('critical', settingsBill.getLevel());
                               
                });
  
});
