
Feature('Dprescription');

Scenario('Dprescription', (I) => {

	I.resizeWindow(1920, 1050);
	I.signindr();
	I.wait(10); // dashboard
	I.amOnPage('/consultations/status/pending'); // my consultation tab 
	I.wait(5);
	I.amOnPage('/consultations/detail/1806/doctor'); // consultation page 
	I.wait('15');
	I.grabValueFrom('#medicine_name', 'Panadol 500Mg Tab');
	I.checkOption('#medicine_name', 'Panadol 500Mg Tab');
	I.grabValueFrom('#medicine_frequency','Every four hours');

	I.wait(10);

});
