
Feature('Ddiagnosisnotes');

Scenario('Ddiagnosisnotes', (I) => {

	I.resizeWindow(1920, 1050);
	I.signindr();
	I.wait(10); // dashboard
	I.amOnPage('/consultations/status/pending'); // my consultation tab 
	I.wait(5);
	I.amOnPage('/consultations/detail/1806/doctor'); // consultation page 
	I.wait('15');
	I.fillField('#diagnosis_notes', 'These are diagnosis notes for patient '); 
	I.wait(5);
	I.fillField('#personal_notes', 'These are personal notes for doctor');
	I.wait(10);
	

});
