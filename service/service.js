
class Service {
    constructor(dao) {
        this.dao = dao;
    }
    
getAll = async () => {  
    return await this.dao.getAll();
}

}


export default Service;