class EnvConstants {

    public greeting(): string {

        console.log("import.meta.env () -> ", import.meta.env.SERVER_GREETING);
        console.log("process.env () -> ", process.env.SERVER_GREETING);
        console.log("import.meta.env (PUBLIC)-> ", import.meta.env.PUBLIC_SERVER_GREETING);
        console.log("process.env (PUBLIC) -> ", process.env.PUBLIC_SERVER_GREETING);
        console.log("import.meta.env (VITE) -> ", import.meta.env.VITE_SERVER_GREETING);
        console.log("process.env (VITE) -> ", process.env.VITE_SERVER_GREETING);
        
        return import.meta.env.SERVER_GREETING;
    }
}

const import_meta_env_constants = new EnvConstants();
export default import_meta_env_constants;