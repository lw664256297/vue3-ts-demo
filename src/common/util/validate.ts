/* 验证用户名 */
export function isUsername(str: string) {
  if (!str) {
    return false;
  }
  const reg = /^[a-zA-Z0-9_]{1,20}$/;
  return reg.test(str);
}

// 是否邮箱
export function isEmail(str: string) {
  return /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(str);
}

// 数字+英文
export function isOrderNumber(str: string) {
  return /^[A-Za-z0-9]+$/.test(str);
}

// 数字+英文+中文 不包括下划线等符号
export function isNumChaEng(str: string) {
  return /^[\u4E00-\u9FA5A-Za-z0-9]+$/.test(str);
}

// 是否数字
export function isNumber(str: string) {
  return /^[0-9]*$/.test(str);
}

/**是否昵称(2-12位，支持中文，数字，特殊字符) */
export function isNickName(str: string) {
  return /^[A-Za-z\u4E00-\u9FA50-9_+&@#\/%?=~_|!:,.;]{2,12}$/.test(str);
}

/**是否权限角色名称(1-20中文+英文) */
export function isRoleName(str: string) {
  return /^(?!_)[A-Za-z\u4e00-\u9fa50-9_]{1,20}$/.test(str);
}
/**权限角色描述(限定1-100，不限输入类型) */
export function isRoleDes(str: string) {
  return /^[A-Za-z\u4E00-\u9FA50-9_+&@#\/%?=~_|!:,.;]{1,100}$/.test(str);
}
/**是否真实姓名(2-12中文+英文) */
export function isRealName(str: string) {
  return /^(?!_)[A-Za-z\u4e00-\u9fa5]{2,12}$/.test(str);
}

// 是否密码
export function isPassword(str: string) {
  return /^[\@A-Za-z|0-9_\!\#\$\%\^\&\*\.\~]{6,22}$/.test(str);
}

// 是否ip地址
export function isIpAddress(str: string) {
  return /^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$/.test(str);
}

// 1-4个中文字符
export function isMagicName(str: string) {
  return /^[\u4E00-\u9FA5]{1,4}$/.test(str);
}
// 1-5个中文字符
export function isMagicName5(str: string) {
  return /^[\u4E00-\u9FA5]{1,5}$/.test(str);
}
// 是否是姓名
export function isName(str: string) {
  return /^(?!_)[A-Za-z0-9_\u4e00-\u9fa5]+$/.test(str);
}

// 是否是包名 1-20(中英文)
export function isName20(str: string) {
  return /^(?!_)[A-Za-z0-9_\u4e00-\u9fa5]{1,20}$/.test(str);
}

// 是否 1-64(中英文)
export function isName64(str: string) {
  return /^(?!_)[A-Za-z0-9_\u4e00-\u9fa5]{1,64}$/.test(str);
}

// 是否正数
export function isPosNumber(str: string) {
  return /^\d+(\.\d{1,2})?$/.test(str);
}

// 是否正整数
export function isPosIntNumber(str: string) {
  return /^[0-9]\d*$/.test(str);
}

// 是否正整数
export function isPosIntNumber1(str: string) {
  return /^[1-9]\d*$/.test(str);
}

// 是否百分比小数
export function isPerNumber(str: string) {
  return /^(100(\.[0]{1,3})?|\d{1,2}(.\d{1,2})?)$/.test(str);
}

// 是否4位小数
export function isFourNumber(str: string) {
  return /^0(.\d{1,4})?$/.test(str);
}

// 是否中文
export function isChinese(str: string) {
  return /^[\u4e00-\u9fa5]{0,200}$/.test(str);
}

// 是否1-32个字符
export function isStringNull(str: string) {
  return /^.{1,32}$/.test(str);
}

/* 合法uri */
export function validateURL(textval: string) {
  const urlregex = /(https?|ftp|file):\/\/[-A-Za-z0-9+&@#\/%?=~_|!:,.;]+[-A-Za-z0-9+&@#\/%=~_|]/;
  return urlregex.test(textval);
}

/* 小写字母 */
export function validateLowerCase(str: string) {
  const reg = /^[a-z]+$/;
  return reg.test(str);
}

/* 大写字母 */
export function validateUpperCase(str: string) {
  const reg = /^[A-Z]+$/;
  return reg.test(str);
}

/* 大小写字母 */
export function validatAlphabets(str: string) {
  const reg = /^[A-Za-z]+$/;
  return reg.test(str);
}

/* 是否百分比 */
export function isPercent(str: string) {
  const reg = /^(100|\d{1,2})$/;
  return reg.test(str);
}

/* 是否是中国电话号码 */
export function isPhone(str: string) {
  const reg = /^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/;
  return reg.test(str);
}

/* 验证金额  2位小数点 */
export function isAmount(str: string) {
  const reg = /^(([1-9]\d*)|\d)(\.\d{1,2})?$/;
  return reg.test(str);
}
// 只能输入英文
export function isEng(str: string) {
  return /^[a-zA-Z]+$/.test(str);
}
