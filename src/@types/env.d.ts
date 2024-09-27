declare global {
    namespace NodeJS {
        interface ProcessEnv {
            DISCORD_BOT_KEY: string;
        }
    }
}

export {};
