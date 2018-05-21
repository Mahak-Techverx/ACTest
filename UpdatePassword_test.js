
Feature('UpdatePassword');

Scenario('UpdatePassword', (I) => {

	I.signin();
	I.amOnPage('/profile/general');
	I.wait(5);
	I.amOnPage('/profile/update-password');
	I.wait(10);
	I.fillField('Enter New Password', '12345678');
	I.fillField('Re-Enter New Password', '12345678');
	I.click('Submit');
	I.wait(15);


});
