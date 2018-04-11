var config = {};
config.web = {};

config.dbOptions = {
    db: { native_parser: true },
    server: {
        poolSize: 10,
        reconnectTries: Number.MAX_VALUE
    },
    user: 'bci-user',
    pass: 'bci2018'
};
config.dbEndpoint = 'mongodb://ds141889.mlab.com:41889/heroku_ckbp3nkl'
config.web.port = process.env.PORT || 8080;
config.secret = '09sltltR453Cr3TP4sEFHRd';
module.exports = config;