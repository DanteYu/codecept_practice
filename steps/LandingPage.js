
let landingPage;

'use strict';

let I;

module.exports = {

  _init() {
    I = require('../steps_file.js')();
    landingPage = require('../pages/landingPage');
    landingPage._init();
  },

  teststep : function(){
  	landingPage.land();
  	console.log('above is from steppbject file');
  } 

  // insert your locators and methods here
}
