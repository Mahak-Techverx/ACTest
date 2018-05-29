
Feature('Dtestvideo');

Scenario('Dtestvideo', (I) => {

	I.resizeWindow(1920, 1050);
	I.signindr();
	I.wait(10); // dashboard
	I.amOnPage('/consultations/status/pending'); // my consultation tab 
	I.wait(5);
	I.amOnPage('/consultations/detail/1806/doctor'); // consultation page 
	I.wait('15');
	I.click('#test_call_btn');
	I.wait(10);
	I.click('#test_call_end_btn');
	I.wait(10);


});
