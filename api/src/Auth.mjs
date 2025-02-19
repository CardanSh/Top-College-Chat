export default class Auth {

    constructor(dbHelper) {
        this.db = dbHelper
    }

    checkUser(login, pass) {
        return false;
    }
}