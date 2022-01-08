import type { CacheAxiosResponse, CacheRequestConfig } from '../cache/axios';

export interface AxiosInterceptor<T> {
  onFulfilled?(value: T): T | Promise<T>;
  onRejected?(error: any): any;
  apply: () => void;
}

export type RequestInterceptor = AxiosInterceptor<CacheRequestConfig<unknown, unknown>>;
export type ResponseInterceptor = AxiosInterceptor<CacheAxiosResponse<unknown, unknown>>;
