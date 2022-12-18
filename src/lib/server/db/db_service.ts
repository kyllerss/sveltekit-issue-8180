import { env } from "$env/dynamic/private";

class DBService {

    public update_database(): void {
        console.log("Updating database using a greeting: ", env.SERVER_GREETING);
    }
}

const db_service = new DBService();
export default db_service;