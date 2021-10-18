const employee = require("./employee");

class engineer {
    constructor(name,id,email,github){
        super(name,id,email)
        this.github = github;
    }
    fetchGithub(){
        return this.github;
    }
}

module.exports = engineer;