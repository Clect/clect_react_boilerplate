/**
 * Created by zhudan on 2016/11/18.
 */
var nconf = require('nconf').argv();
var node_env = nconf.get('NODE_ENV') || 'local';
var config = {
        prod: {
            log: {
                console: {
                    silent: true
                }
            }
        },
        gld: {
            log: {
                console: {
                    silent: true
                }
            }
        },
        test: {
            log: {
                console: {
                    silent: true
                }
            }
        },
        dev: {
            log: {
                console: {
                    silent: true
                }
            }
        },
        local: {
            log: {
                console: {
                    silent: false
                }
            }
        }
    };

var envConfig = config[node_env];
    envConfig.ENV = node_env;
module.exports = envConfig;
