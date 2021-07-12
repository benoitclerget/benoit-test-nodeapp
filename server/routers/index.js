module.exports = function(app, appName, appVersion){
    // public routes
    // api routes
    require('./apis')(app, appName, appVersion)
    require('./health')(app, appName, appVersion)
    require('./html')(app)
}
