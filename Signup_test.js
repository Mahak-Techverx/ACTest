
Feature('Signup');

Scenario('Signup', (I) => {

    I.amOnPage('/');
	I.click('Create Account');
	I.wait(10);
	I.fillField('first_name', 'mahak');
	I.fillField('last_name', 'test');
	I.fillField('email', 'mahak+53@augmentcare.com');
	I.click('Sign Up');
	I.wait(10);
	I.click('//*[@id="user_main_window"]/div[5]/div[7]/div/button');
	I.wait(10);

});
