const Engineer = require("../lib/Engineer");

test("create an object for Engineer", () =>{
    const engineer = new Engineer("Nelson", 1776, "nelson@gmail.com");
    expect(engineer.name).toBe("John");
    expect(engineer.id).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(Number));
});
test("get engineers github username", () =>{
    const engineer = new Engineer("Nelson", 1776, "nelson@gmail.com");
    expect(engineer.getGithub()).toEqual(expect.any(Number));
});
test("get engineers role (ie: Engineer)", () =>{
    const engineer = new Engineer("Nelson", 1776, "nelson@gmail.com");
    expect(engineer.getRole()).toBe("Manager");
});