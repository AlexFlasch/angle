window.angle = angular;

angle.wantApp = function(appName, dependencies) {
    if(Object.prototype.toString.call(dependencies) !== '[object Array]'){
        return "Your dependencies wernt array. Wow. Much error.";
    }
    app = angular.module(appName, dependencies)
    app.controle = app.controller
    app.servis = app.service
    app.factore = app.factory
    app.derectiv = app.directive
    app.cartoon = app.animation
    app.prety = app.decorate
    return app;
}
