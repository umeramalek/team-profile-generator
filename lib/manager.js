const employee = require("./employee");

class manager extends employee{
    constructor(name,id,email,office){
        super(name,id,email);
        this.office = office;
    }
    getOffice(){
        return this.office;
    }
    getRole(){
        return "Manager"
    }
}

module.exports = manager;