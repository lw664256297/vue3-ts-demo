import { post, get } from "../http";
import { Http, Cons } from "../../../typings/interface";
export default {
  // 登陆
  Login(data: Http.ILoginData): Promise<Cons.IResponseData> {
    return post<Cons.IResponseData>(`/login`, data);
  },
  // 注册
  Reg(data: Http.ILoginData): Promise<Cons.IResponseData> {
    return post<Cons.IResponseData>(`/reg`, data);
  },
};
