Feature('CodeceptJS Demonstration');

Background((I) => { // or Background
  I.amOnPage('/documentation');
  console.log('I am in before()');
});

After((I) => {
	console.log('I am in after()');
});

Scenario('test some forms', (I) => {
  I.click('Create User');
  // I.see('User is valid');
  // I.dontSeeInCurrentUrl('/documentation');
  I.see('test');
});

Scenario('test title', (I) => {
  I.seeInTitle('Example application');
});
