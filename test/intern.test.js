const intern = require("../lib/intern");

test('should insantiate an employee class', () => {
    const newEmployee = new intern()
    expect(typeof(newEmployee)).toBe('object');
  });

test('should create a school for employee', () => {
    const school = "school";
    const newEmployee = new intern("fakename","1","email",school);
    
    expect(newEmployee.school).toEqual(school);
  });

  test('should get role for employee', () => {
    const role = "Intern"
    const newEmployee = new intern("fakename","1","email")
    
    expect(newEmployee.getRole()).toEqual(role);
  });