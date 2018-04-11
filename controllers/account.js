var response = require('../utils/utils');
var config         = require('../config/config');
var labels         = require('../config/labels');
var mongoose = require('mongoose');
var AccountBD = mongoose.model('account');

exports.getAccount = function(req, res) {
    try {
        var query = AccountBD.find({ "number": req.params.number }).exec();
        query.then(function(account){
            if(account){
                res.status(200).jsonp(response.successfulResponse(labels.SUCC000, account));
            }else{
                res.status(400).jsonp(response.errorResponse(400,labels.ERRA007))
            }
        }).catch(function(err){
            res.status(500).jsonp(response.errorResponse(500,labels.ERRA006, err.message));
        });
        
    } catch (handler) {
        res.status(500).send(response.errorResponse(500,labels.ERRA006, handler.message));
    }
};