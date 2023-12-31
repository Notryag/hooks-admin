export interface Result {
  code: string,
  msg: string
}

export interface ResultData<T = any> extends Result {
  data?: T
}

export namespace Login {
  export interface ReqLoginForm {
    username: string
    password: string
  }
}