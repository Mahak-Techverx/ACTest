
Feature('Dchat');

Scenario('Dchat', (I) => {

	I.resizeWindow(1920, 1050);
	I.signindr();
	I.wait(10); // dashboard
	I.amOnPage('/consultations/status/pending'); // my consultation tab 
	I.wait(5);
	I.amOnPage('/consultations/detail/1806/doctor'); // consultation page 
	I.wait('15');
	I.click('#chat_icon_btn');
	I.fillField('#chat_field', 'Hello patient');
	I.click('#chat_send_btn');
	I.wait(10);

});
