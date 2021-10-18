const employee = require("./employee");

class intern {
    constructor(name,id,email,school){
        super(name,id,email)
        this.school = school;
    }
    fetchSchool(){
        return this.school;
    }
}

module.exports = intern;