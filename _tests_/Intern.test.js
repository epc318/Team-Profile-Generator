const { expect } = require("@jest/globals");
const Intern = require("../lib/Intern");

test("create an object for Intern", () =>{
    const intern = new Intern("Kip", 9999, "kip@gmail.com");
    expect(intern.name).toBe("Kip");
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
});
test("get interns school", () =>{
    const intern = new Intern("Kip", 9999, "kip@gmail.com", "UCLA");
    expect(intern.school).toEqual(expect.any(String));
    expect(intern.getSchool()).toBe(intern.school);
});
test("get interns role (ie: Intern)", () =>{
    const intern = new Intern("Kip", 9999, "kip@gmail.com");
    expect(intern.getRole()).toBe("Intern");
});