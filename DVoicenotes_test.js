
Feature('DVoicenotes');

Scenario('DVoicenotes', (I) => {

	I.resizeWindow(1920, 1050);
	I.signindr();
	I.wait(10); // dashboard
	I.amOnPage('/consultations/status/pending'); // my consultation tab 
	I.wait(5);
	I.amOnPage('/consultations/detail/1806/doctor'); // consultation page 
	I.wait('15');
	I.click('//*[@id="user_main_window"]/div[1]/div/div/div/div[2]/div[1]/div/div[2]/div[3]/div[3]/div[1]/div/div/div/div/section[1]/a[2]/img');
	I.wait(10);
	I.click('//*[@id="user_main_window"]/div[1]/div/div/div/div[2]/div[1]/div/div[2]/div[3]/div[3]/div[1]/div/div/div/div/section[1]/a[1]/img');
	I.click('//*[@id="user_main_window"]/div[1]/div/div/div/div[2]/div[1]/div/div[2]/div[3]/div[3]/div[1]/div/div/div/div/section[1]/button');
	I.wait(10);


});
