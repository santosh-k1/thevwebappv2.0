
define(['app'], function (app) {
    app.controller('homeController', function ($scope) {
        $scope.message = "Message from HomeCtrl";
        //alert('Home Controller');
        //$("#myCarousel").carousel(); 
    });
});