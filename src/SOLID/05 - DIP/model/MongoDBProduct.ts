import DbProduct from "./DbProduct";

export default class MongoDBProduct implements DbProduct{
    getProductById(productId: number): string {
        return `MongoDB: Product ${productId} data.`;
    }

}