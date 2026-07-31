declare
cd "C:\Projects\TigerOS\TigerOS\web"

@'
declare module "cloudflare:workers" {
  export const env: {
    ASSETS: any;
    DB: any;
    IMAGES: any;
  };
}

declare global {
  type Fetcher = {
    fetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response>;
  };

  type D1Database = any;
  type D1PreparedStatement = any;
  type D1Result = any;
  type D1ResultData<T = unknown> = { results: T[] } | undefined;
}
