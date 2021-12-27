const Employee = require("../lib/Employee");

test("create an object for employee", () =>{
    const employee = new Employee("Rick", 3838, "rick@gmail.com");
    expect(employee.name).toBe("Rick");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

