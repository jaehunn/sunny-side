export declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SUPABASE_URL: string;
      SUPABASE_KEY: string;
    }

    interface Module {
      /** HMR */
      hot: any;
    }
  }
}
