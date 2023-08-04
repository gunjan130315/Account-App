class Bank{
    static Bankid = 0
    constructor (bankId,BankName){
        this.bankId= bankId.Bankid++;
        this.BankName = BankName ;
        this.accountsInBank =[];

    }
}
module.exports = Bank;