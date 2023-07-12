import DbProduct from "./DbProduct";

export default class MySQLProduct implements DbProduct{
    getProductById(productId: number): string {
        return `MySQL: Product ${productId} data.`;
    }

}