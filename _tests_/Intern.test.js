const Intern = require("../lib/Intern");

test("create an object for Intern", () =>{
    const intern = new Intern("Kip", 9999, "kip@gmail.com");
    expect(intern.name).toBe("Joe-Jack");
    expect(intern.id).toEqual(expect.any(String));
    expect(intern.email).toEqual(expect.any(Number));
});
test("get interns school", () =>{
    const intern = new Intern("Kip", 9999, "kip@gmail.com");
    expect(intern.getschool()).toEqual(expect.any(Number));
});
test("get interns role (ie: Intern)", () =>{
    const intern = new Intern("Kip", 9999, "kip@gmail.com");
    expect(intern.getRole()).toBe("Manager");
});