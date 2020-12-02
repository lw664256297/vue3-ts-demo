/**
 * Http接口数据格式
 */
export namespace Http {
  /**
   * @description 删除_id
   */
  interface IDeleteId {
    _id: string;
  }
  /**
   * @description 登录数据格式
   * @interface ILoginData
   */
  interface ILoginData {
    username: string;
    password: string;
  }

  /**
   * @description 支出和收入增加记录
   */
  interface MoneyZSData {
    moneyType: string;
    payDate: string;
    payType:string;
    money:number;
    note?:string;
    name:string;
  }

  interface MoneyDataLog{
    year?:string
  }

  /**
   * @description 更改接单状态
   */
  interface IUpdateStatus {
    status: boolean | number;
  }
  /**
   * @description 客服数据聊天记录查看详情
   */
  interface IChatRecord {
    sessionId: number | string;
  }
  /**
   * @description 聊天记录数据详情数据回显
   */
  interface IChatServiceInformation {
    platName: string;
    userId: number | string;
    nickName: string;
    createDate: string;
    startDate: string;
    completeDate: string;
    avgRespTime: string | number;
    maxRespTime: string | number;
    appraiseScore: string;
    appraiseType: string;
    appraiseContent: string;
    sysDeduction: number | string;
    integral: number | string;
  }
}
