const employee = require("../lib/employee");

test('should insantiate an employee class', () => {
    const newEmployee = new employee()
    expect(typeof(newEmployee)).toBe('object');
  });

  test('should create a name for employee', () => {
    const name = "Umera"
    const newEmployee = new employee(name)
    
    expect(newEmployee.name).toEqual(name);
  });
  
  test('should create an id for employee', () => {
    const id = "1"
    const newEmployee = new employee("fakename",id)
    
    expect(newEmployee.id).toEqual(id);
  });

  test('should create an email for employee', () => {
    const email = "email"
    const newEmployee = new employee("fakename","1",email)
    
    expect(newEmployee.email).toEqual(email);
  });

  test('should get role for employee', () => {
    const role = "Employee"
    const newEmployee = new employee("fakename","1","email")
    
    expect(newEmployee.getRole()).toEqual(role);
  });