
Feature('COD');

Scenario('Cash on Delivery', (I) => {

	I.signin();
    I.amOnPage('/consultants/63e4ecaafc/appointments');
    I.wait(15);
    I.click('//*[@id="slot_page"]/div[1]/div/div[2]');
    I.wait(5);
    I.click('//*[@id="slotsIntervals"]/div/div[1]/div[1]/p[1]');
    I.wait(10);
    I.see('Select a time slot to book an appointment');
    I.scrollTo('#div0', offsetX=0, offsetY=40);
    I.click('#div0');
    I.wait(10);
    I.click('Pay at Location');
    I.wait(5);
    I.click('//*[@id="dialogContent_1"]/div/div[5]/button');
    I.wait(10);
    I.click('Yes, Send it!');
    I.wait('30')

});
