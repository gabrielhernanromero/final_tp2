import Dao from '../Dao/dao.js'; 
import Service from '../service/service.js';
import Controller from '../controller/controller.js';
   

const dao = new Dao();
const service = new Service(dao);
const controller = new Controller(service);

export default controller;
