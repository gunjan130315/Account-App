const ValidationError = require("./ValidationError")
const UnAuthorizedError = require("./UnauthorizedError")


class User {
    static ID = 0
    static allUsers =[]
    constructor(fullName, gender, age, isAdmin) {
        this.Id = User.ID++
        this.fullName = fullName
        this.gender = gender
        this.isAdmin = isAdmin
        this.age = age
        this.Bank = []
        this.Account = []
    }

    newUser(fullName, gender,age) { 
        try { 
            if (!this.isAdmin) { 
                throw new UnAuthorizedError("You are not An Admin") 
            } 
            if (typeof fullName != "string") { 
                throw new ValidationError("Invalid FullName") 
            } 
            if (typeof gender != "string"){
                throw new ValidationError("Invalid Gender")
            }
            if (typeof age != "number"){
                throw new ValidationError("Invalid Age")
            }
            let userObj = new User(fullName, gender, age ,false) 
            User.allUsers.push(userObj) 
            return userObj 
        }  
        catch (error) { 
            return error 
        } 
    }

    static newAdmin(fullName, gender ,age) {
        try{
        if (typeof fullName != "string") {
            throw new ValidationError("Invalid full name")
        }
        return new User(fullName, gender, age ,true)
    } catch(error) {
        return error 
    }
    }

    




}

let a = User.newAdmin("Gunjan", "F", 21 )
let u1 = a.newUser("Tanu", "F", 25)
let u2 = a.newUser("Neel", "M", 23)

console.log(a);
console.log(u1);
console.log(u2);

