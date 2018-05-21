
Feature('Appointment');
//credit card

Scenario('Appointment', (I) => {

    I.amOnPage('/');
	I.click('Sign In');
	I.wait(10);
	I.fillField('#email', 'mahak+01@augmentcare.com');
	I.fillField('#password', '12345678');
	I.click('Sign In');
    I.wait(15);
    I.amOnPage('/consultants/63e4ecaafc/appointments');
    I.wait(25);
    I.click('//*[@id="slotsIntervals"]/div/div[1]/div[1]');
    I.wait(10);
    I.see('Select a time slot to book an appointment');
    I.scrollTo('#div0', offsetX=0, offsetY=40);
    I.click('#div0');
    I.wait(10);
    I.click('//*[@id="dialogContent_1"]/div/div[2]/div[1]/div/img');
    I.wait(5);
    I.click('//*[@id="dialogContent_1"]/div/div[5]/button');
    I.wait(10);
    I.switchTo('//*[@id="user_main_window"]/iframe[2]');
    I.see('Just one last step');
    I.fillField('.Fieldset-input.Textbox-control' , '4242424242424242');
   
    I.fillField('.Fieldset-input.Textbox-control' , '02/20');
    I.wait(10);





    // // // $I->executeJS('jQuery("iframe#braintree-hosted-field-number").attr("name", "Card number")'); 
    // I.executeScript('jQuery("iframe.strip_checkout_app").attr("name", "Card number")');
   
     

   
 
 




});
