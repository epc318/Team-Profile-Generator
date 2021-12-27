const { expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

test("create an object for employee", () =>{
    const employee = new Employee("Rick", 3838, "rick@gmail.com");
    expect(employee.name).toBe("Rick");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});
test("get features for employee info", () =>{
    const employee = new Employee("Rick", 3838, "rick@gmail.com");
    expect(employee.getName()).toBe("James");
    expect(employee.getId()).toEqual(expect.any(String));
    expect(employee.getEmail()).toEqual(expect.any(Number));
    expect(employee.getRole()).toBe("Manager");
});    
