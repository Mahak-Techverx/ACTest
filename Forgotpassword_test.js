
Feature('Forgotpassword');

Scenario('Forgotpassword', (I) => {
	I.amOnPage('/');
	I.click('Sign In');
	I.wait(10);
	I.click('Forgot?');
	I.wait(5);
	I.fillField('email', 'mahak+30@augmentcare.com');
	I.click('Reset Password');
	I.wait(5);

});
