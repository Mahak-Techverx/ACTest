
'use strict';
// in this file you can append custom step methods to 'I' object

// module.exports = function() {
//   return actor({

//     // Define custom steps here, use 'this' to access default methods of I.
//     // It is recommended to place a general 'login' function here.

// 	signin: function(){ 
// 	this.amOnPage('/');
// 	this.click('Sign In');
// 	this.wait(10);
// 	this.fillField('#email', 'mahak+01@augmentcare.com');
// 	this.fillField('#password', '12345678');
// 	this.click('Sign In');
// 	this.wait(10);
// 	                    }
                                              

//   });
// }


module.exports = function() {
  return actor({

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

	signindr: function(){ 
	this.amOnPage('/');
	this.click('Sign In');
	this.wait(10);
	this.fillField('#email', 'mahak+dr@augmentcare.com');
	this.fillField('#password', '12345678');
	this.click('Sign In');
	this.wait(10);
	                    }
                                              

  });
}
