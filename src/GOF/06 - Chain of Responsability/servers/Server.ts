import Middleware from "../middlewares/Middleware";

export default class Server {

  private middleware: Middleware;

  setMiddleware(middleware: Middleware): void {
    this.middleware = middleware;
  }

  login(email: string, password: string): boolean {

    if (this.middleware.check(email, password)) {
      console.log("Authentication complete!");

      return true;
    }

    return false;
  }
}