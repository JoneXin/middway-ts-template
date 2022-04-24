import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from '@midwayjs/typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { Tree } from '../entity/mongo/tree';

@Provide()
export class TreeHandlerService {

    @InjectEntityModel(Tree)
    treeModel: ReturnModelType<typeof Tree>; // 返回 一个 Tree 集合类型

    async getTreeStruct(): Promise<Array<Tree>> {
       return await this.treeModel.find({});
    }
}