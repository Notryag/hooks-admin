import axios from 'axios';
import type {AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError} from 'axios'
import { ResultData } from './interface';

const config = {
  baseUrl: import.meta.env.VITE_API_URL as string,
  timeout: 100000,
  withCredentials: true
}

class RequestHttp {
  service: AxiosInstance
  public constructor(config: AxiosRequestConfig) {
    this.service = axios.create(config)

    this.service.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        return {...config, headers :{...config.headers, "x-access-token": "token"}}
      }
    )

    this.service.interceptors.request.use(
      (response: AxiosResponse) => {
        const {data, config} = response

        return data
      },
      async (error: AxiosError) => {
        return Promise.reject(error)
      }
    )
  }

  get<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
    return this.service.get(url, {params, ..._object})
  }
  post<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
		return this.service.post(url, params, _object);
	}
	put<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
		return this.service.put(url, params, _object);
	}
	delete<T>(url: string, params?: any, _object = {}): Promise<ResultData<T>> {
		return this.service.delete(url, { params, ..._object });
	}
}

export default new RequestHttp(config)