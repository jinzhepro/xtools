/**
 * 检验输入值是否为有效的电子邮件地址
 *
 * 电子邮件地址的有效性通过正则表达式进行验证，该正则表达式检查输入值是否符合基本的电子邮件格式
 * 此函数专注于检查格式，而不是验证电子邮件地址的实际存在或有效性
 *
 * @param {string} val - 待验证的字符串值
 * @returns {boolean} - 如果输入值为有效的电子邮件地址格式，则返回true；否则返回false
 */
export const isEmail = (val) => {
  // 定义电子邮件验证规则，该正则表达式匹配至少一个或多个字词字符，后跟@符号，再后跟至少一个或多个字词字符，最后是一个点和一个或多个字母字符
  const rule = /\w+@\w+\.[A-z]/;
  // 使用定义的规则测试输入值，并返回测试结果
  return rule.test(val);
};

