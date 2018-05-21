
Feature('CODInvoice');

Scenario('CODInvoice', (I) => {

	I.resizeWindow(1920, 1050);
	I.signindr();
	I.wait(10); // dashboard
	I.amOnPage('/consultations/status/pending'); // my consultation tab 
	I.amOnPage('/consultations/detail/1843/doctor'); // consultation page 
	I.wait('25')
	I.click('Invoice');
	I.wait(10);
	I.click('#add_invoice_btn');
	I.fillField('Invoice Name', 'Medical Checkup');
	I.wait(5);
	I.fillField('#procedure_item', 'test procedure');
	I.fillField('#item_price' , '20');
	I.fillField('#discount_percent', '2');
	I.wait(15);
	I.click('#save_invoice_btn');
	I.wait(10);

});
