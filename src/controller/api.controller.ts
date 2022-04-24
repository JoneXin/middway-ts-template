import { Inject, Controller, Get, Query } from '@midwayjs/decorator';
import { Context } from '@midwayjs/koa';
import { UserService } from '../service/user.service';
import { TreeHandlerService } from '../service/tree.service';
import { UserDTO } from '../dto/user';
import { Validate } from '@midwayjs/validate';

@Controller('/api')
export class APIController {

	@Inject()
	ctx: Context;

	@Inject()
	userService: UserService;

	@Inject()
	treeHandlerService: TreeHandlerService;

	@Get('/get_user')
	@Validate()
	async getUser(@Query() user: UserDTO) { // 参数校验
		const res = await this.userService.getUser(user);
		return { success: true, message: 'OK', data: res };
	}

	@Get('/xlogs_tree')
	async getTreeStruct() {
		try {
			const treeNodes = await this.treeHandlerService.getTreeStruct();
			return { code: 200, message: '请求成功', data: treeNodes };
		} catch (_) {
			return { code: 500, message: '服务器内部错误', data: [] };
		}
	}
}
