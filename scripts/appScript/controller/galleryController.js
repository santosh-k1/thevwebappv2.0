define(['app'], function (app) {
    app.controller('galleryController', function ($scope,$timeout, $interval) {
        $scope.message = "Message from HomeCtrl";
        //alert('services Controller');
        $scope.counter = 5;
				var counterIntvl = $interval(function(){
					$scope.counter = $scope.counter - 1;
					if($scope.counter == 0){
						$interval.cancel(counterIntvl);
					}
				}, 1000);
				// Local images
				$scope.images = [
					{
						id: 546,
						title : 'My first image',
						alt : 'photo1',
						url : './content/images/gallery/3.jpg',
						thumbUrl : './content/images/gallery/3.jpg',
						bubbleUrl : './content/images/gallery/3.jpg',
						extUrl : 'http://google.com/image/1',
						desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat enim dui, vitae pretium turpis faucibus ac. Donec nisi ex, tempus non leo vel, laoreet convallis libero.',
						deletable : true
					},
					{
						id: 892,
						url : './content/images/gallery/4.jpg',
						thumbUrl : './content/images/gallery/4.jpg',
						bubbleUrl : './content/images/gallery/4.jpg',
						desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
					},
					{
						id: 5454,
						url : './content/images/gallery/5.jpg',
						thumbUrl : './content/images/gallery/5.jpg',
						bubbleUrl : './content/images/gallery/5.jpg',
						deletable : true,
					},
					{
						id: 34,
						title : 'My fourth image',
						alt : 'photo4',
						url : './content/images/gallery/6.jpg',
						thumbUrl : './content/images/gallery/6.jpg',
						bubbleUrl : './content/images/gallery/6.jpg',
						extUrl : 'http://google.com/image/4',
						desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat enim dui, vitae pretium turpis faucibus ac. Donec nisi ex, tempus non leo vel, laoreet convallis libero. Vestibulum luctus libero nisl, elementum placerat libero ornare quis. Etiam aliquet, tellus et sagittis ullamcorper, nulla arcu volutpat orci, id vehicula quam orci sed nisi. Cras pellentesque faucibus elit a sagittis. Ut bibendum, arcu ac maximus efficitur, odio magna luctus nisi, a sollicitudin orci odio in quam. Nunc non tempus quam, vel ullamcorper massa. Quisque aliquet velit eget leo venenatis, eu sagittis justo aliquet. Ut ac sollicitudin tortor. Duis id egestas lacus. In nibh eros, pretium sed cursus sed, lobortis ac elit.',
						deletable : true
					},
					{
						id: 415,
						url : './content/images/gallery/7.jpg',
						thumbUrl : './content/images/gallery/7.jpg',
						bubbleUrl : './content/images/gallery/7.jpg',
					},
					{
						id: 5582,
						url : './content/images/gallery/8.jpg',
						thumbUrl : './content/images/gallery/8.jpg',
						bubbleUrl : './content/images/gallery/8.jpg',
					},
					{
						id: 64634,
						title : 'My seventh image',
						alt : 'photo7',
						url : './content/images/gallery/9.jpg',
						thumbUrl : './content/images/gallery/9.jpg',
						bubbleUrl : './content/images/gallery/9.jpg',
						
					},
					{
						id: 475,
						url : './demo-images/11.jpg',
						url : './content/images/gallery/11.jpg',
						thumbUrl : './content/images/gallery/11.jpg',
						bubbleUrl : './content/images/gallery/11.jpg',
						deletable : true
					},
					{
						id: 452,
						title : 'My 9th image',
						alt : 'photo9',
						url : './content/images/gallery/12.jpg',
						thumbUrl : './content/images/gallery/12.jpg',
						bubbleUrl : './content/images/gallery/12.jpg',
						
					}
				];

				$scope.moreImages = [
					{
						id: 658,
						url : './content/images/gallery/13.jpg',
						thumbUrl : './content/images/gallery/13.jpg',
						bubbleUrl : './content/images/gallery/13.jpg',
						
					}
				];

				$scope.conf = {
					imgAnim : 'fadeup'
				};

				/*****************************************************/

				$timeout(function(){
					$scope.images = $scope.images.concat($scope.moreImages);
				}, 5000);
				
				
				// Thumbnails
				$scope.thumbnails = true;
				$scope.toggleThumbnails = function(){
					$scope.thumbnails = !$scope.thumbnails;
				}

				// Inline
				$scope.inline = false;
				$scope.toggleInline = function(){
					$scope.inline = !$scope.inline;
				}

				// Bubbles
				$scope.bubbles = true;
				$scope.toggleBubbles = function(){
					$scope.bubbles = !$scope.bubbles;
				}

				// Image bubbles
				$scope.imgBubbles = false;
				$scope.toggleImgBubbles = function(){
					$scope.imgBubbles = !$scope.imgBubbles;
				}

				// Background close
				$scope.bgClose = false;
				$scope.closeOnBackground = function(){
					$scope.bgClose = !$scope.bgClose;
				}

				// Gallery methods gateway
				$scope.methods = {};
				$scope.openGallery = function(){
					$scope.methods.open();
				};

				// Gallery callbacks
				$scope.opened = function(){
					console.info('Gallery opened!');
				}

				$scope.closed = function(){
					console.warn('Gallery closed!');
				}

				$scope.delete = function(img, cb){
					cb();
				}
			
    });
});