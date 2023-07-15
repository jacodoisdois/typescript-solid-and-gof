import Database from "../servers/Database";
import Middleware from "./Middleware";

export default class CheckUserMiddleware extends Middleware {

  public check(email: string, password: string): boolean {

    if (email.indexOf("@") === -1) {
      console.log("Invalid e-mail!");
      return false;
    }

    if (!Database
      .filter(user =>
        user.email === email
        &&
        user.password === password)
      .length) {
      console.log("Invalid e-mail or password!");

      return false;
    }


    return this.checkNext(email, password);
  }

}