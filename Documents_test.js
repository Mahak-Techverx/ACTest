
Feature('Documents');

Scenario('Documents', (I) => {

	I.resizeWindow(1680, 1050);
	I.signin();
	I.amOnPage('/profile/general');
	I.wait(5);
	I.amOnPage('/profile/documents');
	I.wait(10);
	I.attachFile('//*[@id="tab-content-1759"]/div/div/div/div[1]/div/div[1]/div', 'Medication Authorization.pdf');
	I.wait(10);	

});
