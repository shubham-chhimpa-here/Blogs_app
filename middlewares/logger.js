const { LogModel } = require("../models/logger.model");

async function logger(req, res, next) {
    const requestTime = new Date();
    const requestIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const requestMethod = req.method;
    const requestURL = req.originalUrl;

    const newlog = new LogModel({time:requestTime, ip:requestIP, method:requestMethod, url:requestURL})
    await newlog.save()
    next()
}

module.exports = {logger}
