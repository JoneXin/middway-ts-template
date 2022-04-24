import { Provide, TaskLocal, Task, FORMAT  } from '@midwayjs/decorator';

@Provide()
export class UserService {

    // 自定义
    @Task({
        repeat: { cron: '*/10 * * * * *' },
    })
    async test() {
        console.log(`====`)
    }
    // 每分钟
    @TaskLocal(FORMAT.CRONTAB.EVERY_MINUTE)
    async test1(){
        console.log('--')
    }
}
