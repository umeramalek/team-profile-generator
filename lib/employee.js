class employee {
    constructor(name,id,email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    fetchName(){
        return this.name;
    }
    fetchId(){
        return this.id;
    }
    fetchEmail(){
        return this.email;
    }

}
module.exports = employee;