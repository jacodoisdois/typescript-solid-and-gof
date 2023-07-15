import CheckPermissionMiddleware from "./middlewares/CheckPermissionMIddleware";
import CheckUserMiddleware from "./middlewares/CheckUserMiddleware";
import Server from "./servers/Server";

const server = new Server();

const middleware = new CheckUserMiddleware();

middleware.linkWith(new CheckPermissionMiddleware());

server.setMiddleware(middleware);

server.login("email2@comp.com.br", "123");