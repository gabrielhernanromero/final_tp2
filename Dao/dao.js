class Dao{

    data = [];

    getAll = async () => {
        return this.data;
    }

    create = async (item) => {
        this.data.push(item);
        return item;
    }

}

export default Dao;