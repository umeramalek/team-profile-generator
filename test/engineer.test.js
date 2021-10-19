const engineer = require("../lib/engineer");

test('should insantiate an employee class', () => {
    const newEmployee = new engineer()
    expect(typeof(newEmployee)).toBe('object');
  });

test('should create a github for employee', () => {
    const github = "github";
    const newEmployee = new engineer("fakename","1","email",github);
    
    expect(newEmployee.github).toEqual(github);
  });

  test('should get role for employee', () => {
    const role = "Engineer"
    const newEmployee = new engineer("fakename","1","email")
    
    expect(newEmployee.getRole()).toEqual(role);
  });