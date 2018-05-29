
Feature('DInvestigation');

Scenario('DInvestigation', (I) => {

	I.resizeWindow(1920, 1050);
	I.signindr();
	I.wait(10); // dashboard
	I.amOnPage('/consultations/status/pending'); // my consultation tab 
	I.wait(5);
	I.amOnPage('/consultations/detail/1806/doctor'); // consultation page 
	I.wait('15');
	//I.selectOption('Request Lab or radiology investigations', '//*[@id="ul-241"]/li[2]');
	//I.wait(10);
//pending
});