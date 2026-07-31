declare module "cloudflare:workers" {
  export const env: {
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
  };
}

declare global {
  type Fetcher = any;
  type D1Database = any;
  type D1PreparedStatement = any;
  type D1Result = any;
  type D1ResultData<T = unknown> = { results: T[] } | undefined;
}

export {};