describe('calculate radio button bill  total for sms and call', function(){
    let settingsBill = radioButtonBill();

   it('should  returns the total bill for sms ', function(){
   let settingsBill = radioButtonBill();
   settingsBill.checkTheBill('sms');
   assert.equal(0.75, settingsBill.getTot());
       
   });

   it('should  returns the total bill for call ', function(){
    let settingsBill = radioButtonBill();
    settingsBill.checkTheBill('call');
    assert.equal(2.75, settingsBill.getTot());
        
    });
 

    it('should  returns the total bill for both ', function(){
        let settingsBill = radioButtonBill();
        settingsBill.checkTheBill('call');
        settingsBill.checkTheBill('call');
        settingsBill.checkTheBill('call');
        settingsBill.checkTheBill('call');
        settingsBill.checkTheBill('call');
        
        assert.equal(13.75, settingsBill.getCall());
        assert.equal(0., settingsBill.getSms());
        assert.equal(13.75, settingsBill.getTot());
            
        });

        it('should  returns the total bill for both ', function(){
            let settingsBill = radioButtonBill();
            settingsBill.checkTheBill('call');
            settingsBill.checkTheBill('call');
            settingsBill.checkTheBill('sms');
            settingsBill.checkTheBill('sms');
            settingsBill.checkTheBill('sms');
            
            assert.equal(5.50, settingsBill.getCall());
            assert.equal(2.25, settingsBill.getSms());
            assert.equal(7.75, settingsBill.getTot());
                
            });


        it('should  returns the warning', function(){
            let settingsBill = radioButtonBill();
            
            settingsBill.checkTheBill('call');
            settingsBill.checkTheBill('call');
            settingsBill.checkTheBill('call');
            settingsBill.checkTheBill('call');
            settingsBill.checkTheBill('call');
            settingsBill.checkTheBill('call');
            settingsBill.checkTheBill('call');
            settingsBill.checkTheBill('call');
            settingsBill.checkTheBill('call');
            settingsBill.checkTheBill('call');
            settingsBill.checkTheBill('call');
            settingsBill.checkTheBill('call');
            settingsBill.checkTheBill('call');
            settingsBill.checkTheBill('call');
            settingsBill.checkTheBill('call');
            settingsBill.checkTheBill('call');
            settingsBill.checkTheBill('call');
            settingsBill.checkTheBill('call');
    
           
            assert.equal('warning', settingsBill.getTheLevels());
                           
            });


            it('should  returns the critical', function(){
                let settingsBill = radioButtonBill();
                
                settingsBill.checkTheBill('call');
                settingsBill.checkTheBill('call');
                settingsBill.checkTheBill('call');
                settingsBill.checkTheBill('call');
                settingsBill.checkTheBill('call');
                settingsBill.checkTheBill('call');
                settingsBill.checkTheBill('call');
                settingsBill.checkTheBill('call');
                settingsBill.checkTheBill('call');
                settingsBill.checkTheBill('call');
                settingsBill.checkTheBill('call');
                settingsBill.checkTheBill('call');
                settingsBill.checkTheBill('call');
                settingsBill.checkTheBill('call');
                settingsBill.checkTheBill('call');
                settingsBill.checkTheBill('call');
                settingsBill.checkTheBill('call');
                settingsBill.checkTheBill('call');
                settingsBill.checkTheBill('call');
                settingsBill.checkTheBill('call');
                settingsBill.checkTheBill('call');
                settingsBill.checkTheBill('call');
                settingsBill.checkTheBill('call');
                settingsBill.checkTheBill('call');
                settingsBill.checkTheBill('call');
        
               
                assert.equal('critical', settingsBill.getTheLevels());
                               
                });
   
});