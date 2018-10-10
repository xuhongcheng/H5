'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
	ENV_CONFIG: '"dev"',
	// BASE_API: '"http://weixin.gtcx.top/"' //开发地址
	BASE_API: '""'
})
