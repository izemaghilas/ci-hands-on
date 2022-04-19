class User {
    constructor() {
        this.firstName = undefined;
        this.lastName = undefined;
    }

    setFirstName(firstName) {
        this.firstName = firstName;
    }

    setLastName(lastName) {
        this.lastName = lastName;
    }

    isValid() {
        return true;
    }
}

module.exports = User;