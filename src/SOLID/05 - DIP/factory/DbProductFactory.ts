import Db from "../model/Db";
import DbProduct from "../model/DbProduct";
import MongoDBProduct from "../model/MongoDBProduct";
import MySQLProduct from "../model/MySQLProduct";

export default class DbProductFactory{
    private static type: Db = Db.MYSQL;
    
    public static create(): DbProduct{
        
        if(DbProductFactory.type === Db.MYSQL){
            return new MySQLProduct();
        } else if(DbProductFactory.type === Db.MONGODB){
            return new MongoDBProduct();
        }

        throw new Error("Invalid DB type");
    }
}