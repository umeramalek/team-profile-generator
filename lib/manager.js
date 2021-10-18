const employee = require("./employee");

class manager{
    constructor(name,id,email,office){
        super(name,id,email);
        this.office = office;
    }
    fetchOffice(){
        return this.office;
    }
}

module.exports = manager;