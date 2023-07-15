import Database from "../servers/Database";
import PermissionType from "../servers/PermissionType";
import Middleware from "./Middleware";

export default class CheckPermissionMiddleware extends Middleware {

  public check(email: string, password: string): boolean {

    const users = Database.filter(item => item.email === email);

    if (!users.length) {
      console.log("Invalid e-mail");
      return false;
    }

    if (users[0].permission === PermissionType.ADMIN) {
      console.log("Welcome, Admin!");

      return this.checkNext(email, password);
    }

    console.log("Welcome, user!");

    return this.checkNext(email, password);
  }

}