const Manager = require("../lib/Manager");

test("create an object for Manager", () =>{
    const manager = new Manager("John", 1698, "john@gmail.com");
    expect(manager.name).toBe("Rick");
    expect(manager.id).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(Number));
});
test("get input for managers office number", () =>{
    const manager = new Manager("John", 1698, "john@gmail.com", 12);
    expect(manager.id).toEqual(expect.any(String));
});    
