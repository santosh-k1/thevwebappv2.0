
define(['app'], function (app) {
    app.controller('homeController', function ($scope) {
        $scope.message = "Message from HomeCtrl";
        $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var slides = $scope.slides = [];
  var currIndex = 0;
  $('#productSlider').carousel({
    interval: 50000
  })

  $scope.productSliderNext = function($scope){
    $('#productSlider').carousel('next')

  }
  $scope.productSliderPrev = function($scope){
    $('#productSlider').carousel('prev');

  }

  $scope.addSlide = function() {
    var newWidth = 1600 + slides.length + 1;
    slides.push({
      image: '//unsplash.it/' + newWidth + '/450',
      text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
      id: currIndex++
    });
  };

  $scope.randomize = function() {
    var indexes = generateIndexesArray();
    assignNewIndexesToSlides(indexes);
  };

  $scope.productSlider =[
    { productName:'Residency Apartment',
      productImage:'/gallery/3.jpg',
      productHeading:'Residency Apartment thumb',
      productButton:'View More',
      productContent:'As large as the Mithila suite, this suite exudes old world charm. All suites offer a butler service and luxury room & bath amenities. This suite is accommodating enough to',
    },
    { productName:'Residency Apartment',
      productImage:'/gallery/4.jpg',
      productHeading:'Residency Apartment thumb',
      productButton:'View More',
      productContent:'As large as the Mithila suite, this suite exudes old world charm. All suites offer a butler service and luxury room & bath amenities. This suite is accommodating enough to',
    },
    { productName:'Residency Apartment',
      productImage:'/gallery/5.jpg',
      productHeading:'Residency Apartment thumb',
      productButton:'View More',
      productContent:'As large as the Mithila suite, this suite exudes old world charm. All suites offer a butler service and luxury room & bath amenities. This suite is accommodating enough to',
    },
    { productName:'Residency Apartment',
      productImage:'/gallery/6.jpg',
      productHeading:'Residency Apartment thumb',
      productButton:'View More',
      productContent:'As large as the Mithila suite, this suite exudes old world charm. All suites offer a butler service and luxury room & bath amenities. This suite is accommodating enough to',
    },
    { productName:'Residency Apartment',
      productImage:'/gallery/6.jpg',
      productHeading:'Residency Apartment thumb',
      productButton:'View More',
      productContent:'As large as the Mithila suite, this suite exudes old world charm. All suites offer a butler service and luxury room & bath amenities. This suite is accommodating enough to',
    },
    { productName:'Residency Apartment',
      productImage:'/gallery/6.jpg',
      productHeading:'Residency Apartment thumb',
      productButton:'View More',
      productContent:'As large as the Mithila suite, this suite exudes old world charm. All suites offer a butler service and luxury room & bath amenities. This suite is accommodating enough to',
    }
  ]

  
var rowCount = $scope.productSlider.length / 4;
var productSection = Math.round(rowCount);



  function chunk(arr, size) {
    var newArr = [];
    for (var i=0; i<arr.length; i+=size) {
      newArr.push(arr.slice(i, i+size));
    }
    return newArr;
  }
  
  // Randomize logic below

  function assignNewIndexesToSlides(indexes) {
    for (var i = 0, l = slides.length; i < l; i++) {
      slides[i].id = indexes.pop();
    }
  }

  function generateIndexesArray() {
    var indexes = [];
    for (var i = 0; i < currIndex; ++i) {
      indexes[i] = i;
    }
    return shuffle(indexes);
  }

  // http://stackoverflow.com/questions/962802#962890
  function shuffle(array) {
    var tmp, current, top = array.length;

    if (top) {
      while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }
    }

    return array;
  }
        //alert('Home Controller');
        //$("#myCarousel").carousel(); 
    });
    app.filter('startFrom', function() {
      return function(input, start) {
             if(input) {
                 start = +start; //parse to int
                 return input.slice(start);
             }
             return [];
         }
     })
   
  });