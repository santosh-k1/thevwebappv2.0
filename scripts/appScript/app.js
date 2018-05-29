define(['angularAMD', 'angular-route','jquery','bootstrap','ui-bootstrap-tpls','angular-animate','angular-sanitize','ng-image-gallery'], function (angularAMD) {
    var app = angular.module("webapp", ['ngRoute','ui.bootstrap','ngAnimate', 'ngSanitize','thatisuday.ng-image-gallery']);
    app.config(function ($routeProvider) {
      $routeProvider
      .when("/", angularAMD.route({
        templateUrl: 'view/home.html', 
        controller: 'homeController',
        controllerUrl: 'controller/homeController'
    }))
    .when("/about", angularAMD.route({
        templateUrl: 'view/about.html', 
        controller: 'aboutController',
        controllerUrl: 'controller/aboutController'
    }))
    .when("/services", angularAMD.route({
      templateUrl: 'view/services.html', 
      controller: 'servicesController',
      controllerUrl: 'controller/servicesController'
  }))
  .when("/gallery", angularAMD.route({
    templateUrl: 'view/gallery.html', 
    controller: 'galleryController',
    controllerUrl: 'controller/galleryController'
  }))
  .when("/contacts", angularAMD.route({
    templateUrl: 'view/contacts.html', 
    controller: 'contactsController',
    controllerUrl: 'controller/contactsController'
  }))
      .otherwise({redirectTo: "/"});
    });
    
    return angularAMD.bootstrap(app);
    window.$ = window.jQuery = require('jquery')
  });


