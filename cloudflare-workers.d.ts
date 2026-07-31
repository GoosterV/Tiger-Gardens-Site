type Fetcher = {
  fetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response>;
};

type D1Database = any;
type D1Result = any;
type D1PreparedStatement = any;
type D1ResultData<T = unknown> = { results: T[] } | undefined;

declare module "cloudflare:workers" {
  export interface Env {
    ASSETS: Fetcher;
    DB: D1Database;
    IMAGES: {
      input(stream: ReadableStream): {
        transform(options: Record<string, unknown>): {
          toBlob?: () => Promise<Blob>;
          blob: () => Promise<Blob>;
        };
      };
    };
  }

  export const env: Env;
}