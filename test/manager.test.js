const manager = require("../lib/manager");

test('should insantiate an employee class', () => {
    const newEmployee = new manager()
    expect(typeof(newEmployee)).toBe('object');
  });

test('should create a office number for employee', () => {
    const office = "office";
    const newEmployee = new manager("fakename","1","email",office);
    
    expect(newEmployee.office).toEqual(office);
  });

  test('should get role for employee', () => {
    const role = "Manager"
    const newEmployee = new manager("fakename","1","email")
    
    expect(newEmployee.getRole()).toEqual(role);
  });