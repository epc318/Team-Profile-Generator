const Employee = require("./lib/Employee.js");

test("create an object for employee", () =>{
    const employee = new Employee("Rick", 3838, rick@gmail.com);
    expect(employee.name).toBe("James");
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(Number));
});
