declare global {
  type Fetcher = {
    fetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response>;
  };

  type D1Database = any;
  type D1Result = any;
  type D1PreparedStatement = any;
  type D1ResultData<T = unknown> = { results: T[] } | undefined;
}

export {};