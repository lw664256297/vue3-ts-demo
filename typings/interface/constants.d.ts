/**
 * 所有基础数据格式
 */
export namespace Cons {
  /**
   * @description 共用分页初始化配置
   * @interface IPagination
   */
  interface IPagination {
    total: number;
    current: number;
    page_size: number;
    page_size_opts: number[];
  }
  /**
   * @description 表单数据模型
   * @interface IFormDataModel
   * @template T
   */
  interface IFormDataModel<T> {
    loading: boolean;
    data: T;
    rules: Types.FormRule.Rule;
  }
  /**
   * @description 共用查询初始化配置
   * @interface IQueryData
   */
  interface IQueryData {
    pageNo: number;
    pageSize: number;
    orderBy?: {
      key: string;
      value: number;
    };
    filters?: any;
  }
  /**
   * @description 弹出层数据
   * @interface IModalObj
   */
  interface IModalObj<T> {
    title?: string;
    loading?: boolean;
    type?: number;
    isVisible: boolean;
    isUpdate?: boolean;
    data: T;
    rules?: Types.FormRule.Rule;
  }
  /**
   * @description 接口返回数据格式
   * @interface IResponseData
   */
  interface IResponseData {
    code: number;
    message: string;
    data: any;
  }
  /**
   * @description 基础数据类型
   * @interface IBaseDataModel 如果不需要确定数据类型，可以指定本类型
   */
  interface IBaseDataModel {
    [key: string]: any;
  }
  /**
   * @description 权限
   */
  interface IPremissions {
    [x: string]: any;
    id: number | string;
    name: string;
  }
}
