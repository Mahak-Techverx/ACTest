
Feature('DSymptoms');

Scenario('DSymptoms', (I) => {

	I.resizeWindow(1920, 1050);
	I.signindr();
	I.wait(10); // dashboard
	I.amOnPage('/consultations/status/pending'); // my consultation tab 
	I.wait(5);
	I.amOnPage('/consultations/detail/1806/doctor'); // consultation page 
	I.wait('15');
	I.fillField('#sign_and_symptoms', 'This is patient sign and symptoms filled by doctor');
	I.wait(10)
	I.attachFile('input[type="file"]', 'Appointment report.png');
	I.wait(5);
	I.fillField('#doc_title' , 'My test doc');
	I.fillField('#doc_description', 'This is test doc');
	I.click('#doc_upload_btn');
	I.wait(20);

});
