const WorkAround = require('./workAround.js')

function getEmployeeInformation(inputSalary) {
    salary = inputSalary;
    console.log('Cadre: ' +  WorkAround.getCadre());
    console.log('Tax: ' + WorkAround.calculateTax());
    console.log('Benefits: ' + WorkAround.getBenefits());
    console.log('Bonus: ' + WorkAround.calculateBonus());
    console.log('Reimbursement Eligibility: ' + WorkAround.reimbursementEligibility() + '\n');
  }


getEmployeeInformation(10000);
getEmployeeInformation(50000);
getEmployeeInformation(100000);