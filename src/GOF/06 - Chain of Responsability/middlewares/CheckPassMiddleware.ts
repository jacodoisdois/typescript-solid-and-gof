import Database from "../servers/Database";
import PermissionType from "../servers/PermissionType";
import Middleware from "./Middleware";

export default class CheckPassMiddleware extends Middleware {

  public check(email: string, password: string): boolean {

    if (password === '123456') {
      console.log("WARNING: Weak password!");
      return this.checkNext(email, password);
    }

    return this.checkNext(email, password);
  }

}