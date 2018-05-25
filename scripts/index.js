require.config({
    baseUrl: "scripts/appScript",
    
    // alias libraries paths.  Must set 'angular'
    paths: {
        'angular': 'angularJs/angular',
        'angular-route': 'angularJs/angular-route.min',
        'angularAMD': 'angularJs/angularAMD.min',
        'jquery':'jQuery/jquery.min',
        'bootstrap':'bootstrap/bootstrap.min',
        'ui-bootstrap-tpls':'bootstrap/ui-bootstrap-tpls'
    },
    
    // Add angular modules that does not support AMD out of the box, put it in a shim
    shim: {
        'angularAMD': ['angular'],
        'angular-route': ['angular'],
        'ui-bootstrap-tpls':['angular']
    },
    
    // kick start application
    deps: ['app']
});
    



