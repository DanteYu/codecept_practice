let dataset1 = require('../testdata/dataset1.js')();
let config = require('codeceptjs').config.get();

const event = require('codeceptjs').event;
const output = require('codeceptjs').output;


Feature('within demo');

Scenario.only('test screenshot', (I) => {
I.amOnPage('https://www.hupu.com/');
I.saveDocumentScreenshot('foo' + new Date().getTime() + '.png',true);
});


Scenario('access config', {retries: 2}, (I)=>{

	output.print(config.timeout);
	output.print('This is basic information');
	output.debug('This is debug information');
	output.log('This is verbose logging information');
  if(config.tests = "./spec/s*_test.js"){
    output.print("yes, it is s*test.js")
  };
});

Scenario('login github @smoke', {retries: 2}, (I, landingPage, landingPageStep)=>{
	I.amOnPage('http://www.baidu.com');
	I.foo();
	landingPage.land();
	landingPageStep.teststep();
	// I.see('test');
	I.say('Above is the link for baidu search engine');
	I.sayHelloWorld();
	I.openBaiduByWebdriver();
	I.getConf();
	console.log(event.test.title);
});

Data(dataset1.accounts).Scenario('Test Login', (I, current) => {
  console.log(current.login); // current is reserved!
  console.log(current.password);
});

Data(function*() {
  yield { user: 'davert', pwd: 'test'};
  yield { user: 'andrey', pwd: 'test'};
}).Scenario('test generator', (I, current) => {

console.log(current.user);
console.log(current.pwd);
});

Data(['1', '2', '3']).Scenario('test array', (I, current)=>{
	console.log(current);
})

Data(function(){
	return ['1', '2'];
}).Scenario('test array', (I, current)=>{
	console.log(current);
})
