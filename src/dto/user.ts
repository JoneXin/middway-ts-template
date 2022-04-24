/**
 * @file 定义校验规则
 * @desc https://midwayjs.org/docs/extensions/validate 详细文档
 */
import { Rule, RuleType } from "@midwayjs/validate";
export class UserDTO {
  @Rule(RuleType.number().required())
  uid: number;

  @Rule(RuleType.string())
  username: string;

  @Rule(RuleType.string().max(10))
  phone: string;

  @Rule(RuleType.string().max(10))
  email: string;
}