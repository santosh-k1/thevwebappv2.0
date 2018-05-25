
define(['app'], function (app) {
    app.controller('galleryController', function ($scope) {
        $scope.message = "Message from HomeCtrl";
        //alert('services Controller');
        $scope.myInterval = 3000;
        $scope.slides = [
            {
            image: 'http://lorempixel.com/400/200/'
            },
            {
            image: 'http://lorempixel.com/400/200/food'
            },
            {
            image: 'http://lorempixel.com/400/200/sports'
            },
            {
            image: 'http://lorempixel.com/400/200/people'
            }
        ];
            });
});