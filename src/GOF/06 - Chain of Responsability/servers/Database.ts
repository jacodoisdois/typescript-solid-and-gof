import PermissionType from "./PermissionType";

interface DatabaseItem {
  email: string;
  password: string;
  permission: PermissionType;
}

const Database: DatabaseItem[] = [{
  email: "email@comp.com.br",
  password: "123",
  permission: PermissionType.USER
},
{
  email: "email2@comp.com.br",
  password: "123",
  permission: PermissionType.ADMIN
},
{
  email: "email3@comp.com.br",
  password: "123456",
  permission: PermissionType.ADMIN
},
];

export default Database;