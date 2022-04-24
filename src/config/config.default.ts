import { MidwayConfig } from '@midwayjs/core';

export default {
	// use for cookie sign key, should change to your own and keep security
	keys: '1648103126946_2316',
	koa: {
		port: 3000,
	},
	sequelize: {
		options: {
			database: 'test',
			username: 'root',
			password: 'Leaper@123',
			host: '127.0.0.1',
			port: 3306,
			encrypt: false,
			dialect: 'mysql',
			define: { charset: 'utf8' },
			timezone: '+08:00',
			logging: false
		},
		sync: false // 本地的时候，可以通过sync: true直接createTable
	},
	mongoose: {
		client: {
			uri: 'mongodb://106.12.137.158:27017/logger',
			// options: {
			//   useNewUrlParser: true,
			//   useUnifiedTopology: true,
			//   user: 'admin',
			//   pass: '123456'
			// }
		}
	},
	mongoKesContentNum: 100
} as MidwayConfig;
