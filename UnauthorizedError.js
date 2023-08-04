const BaseError = require("./BaseError")
class UnauthorisedError extends BaseError{
    constructor(specificMessage){
        super("UnauthorisedError", "Unauthorised Access", 401)
        this.specificMessage = specificMessage
    }
}

module.exports = UnauthorisedError

