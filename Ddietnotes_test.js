
Feature('Ddietnotes');

Scenario('Ddietnotes', (I) => {

	I.resizeWindow(1920, 1050);
	I.signindr();
	I.wait(10); // dashboard
	I.amOnPage('/consultations/status/pending'); // my consultation tab 
	I.wait(5);
	I.amOnPage('/consultations/detail/1806/doctor'); // consultation page 
	I.wait('15');
	I.switchTo('#ui-tinymce-1_ifr');
	I.fillField('#tinymce', 'These are diet notes ');
	I.switchTo('');
	I.wait(5);
	I.click('#diet_notes_save_btn');
	I.wait(10);
});
