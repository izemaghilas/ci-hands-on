const User = require("./User");

describe("User tests", ()=>{
    let user = new User();
    
    beforeEach(()=>{
        user.setFirstName("first name");
        user.setLastName("last name");
    });

    test("should return true on valid user data", ()=>{
        expect(user.isValid()).toBeTruthy();
    });
});