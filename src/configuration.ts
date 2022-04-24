import { Configuration, App } from '@midwayjs/decorator';
import * as koa from '@midwayjs/koa';
import * as validate from '@midwayjs/validate';
import * as info from '@midwayjs/info';
import { DefaultErrorFilter } from './filter/default.filter';
import { NotFoundFilter } from './filter/notfound.filter';
import { ReportMiddleware } from './middleware/report.middleware';
import * as typegoose from '@midwayjs/typegoose';
import * as staticFile from '@midwayjs/static-file';
import * as DefaultConfig from './config/config.default';
import * as UnittestConfig from './config/config.unittest';
import * as MongoConfig from './config/config.mongo';
import * as sequlize from '@midwayjs/sequelize';


@Configuration({
  imports: [
    koa,
    staticFile,
    validate,
    typegoose,
    sequlize,
    {
      component: info,
      enabledEnvironment: ['local'],
    },
  ],
  importConfigs: [
    {
      default: DefaultConfig,
      unittest: UnittestConfig,
      mongo:MongoConfig
    }
  ],
})
export class ContainerLifeCycle {

  @App()
  app: koa.Application;

  async onReady() {
    // add middleware
    this.app.useMiddleware([ReportMiddleware]);
    // add filter
    this.app.useFilter([NotFoundFilter, DefaultErrorFilter]);
  }
}
