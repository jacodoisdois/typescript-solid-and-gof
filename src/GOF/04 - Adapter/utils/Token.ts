export default class Token{
    private token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlVzZXJuYW1lIiwiaWF0IjoxNTE2MjM5MDIyfQ.dEXREkY9FqHh_C7iDw5Flh3CSw1m2iDxldDEd5i9jNI";

    getToken(): string{
        return this.token;
    }
}