import { cleanEnv, str, port } from 'envalid';

const validateEnv = (): void => {
    cleanEnv(process.env, {
        NODE_ENV: str({ choices: ['development', 'production'] }),
        PORT: port({ default: 3000 }),
        MONGO_USER: str(),
        MONGO_PASSWORD: str(),
        MONGO_PATH: str(),
    });
};

export default validateEnv;
