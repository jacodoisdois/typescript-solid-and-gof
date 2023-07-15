import CheckPassMiddleware from "./middlewares/CheckPassMiddleware";
import CheckPermissionMiddleware from "./middlewares/CheckPermissionMIddleware";
import CheckUserMiddleware from "./middlewares/CheckUserMiddleware";
import Server from "./servers/Server";

const server = new Server();

const middleware = new CheckUserMiddleware();

middleware.linkWith(new CheckPermissionMiddleware());
middleware.linkWith(new CheckPassMiddleware());

server.setMiddleware(middleware);

server.login("email2@comp.com.br", "123");
server.login("email3@comp.com.br", "123456");