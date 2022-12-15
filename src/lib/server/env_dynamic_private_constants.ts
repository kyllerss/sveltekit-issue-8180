import { env } from "$env/dynamic/private";

class EnvConstants {

    public greeting(): string {
        return env.SERVER_GREETING!;
    }
}

const env_dynamic_private_constants = new EnvConstants();
export default env_dynamic_private_constants;