angular.module('app').controller('galleryCtrl', function($scope) {
  //$scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.maulSlides = [
    {
      image:'images/darth_maul/maul-image1.jpeg'
    },
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuxdp3u3bEPs5F3JfAn29xYFJ-WOhmGWvJAeTwUEu9BVK8rwI2Lw'
    },
    {
      image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTcNQL_jmadhhRuY4H6vNsRvOtNkRqysMYKMhfrXhqjZZbkWhU-tA'
    },
    {
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQgaRzyiDK4exG3Oc6yaloflEWUrZwJ8GfP2lkgYJ-Tsbj_rKR'
    }  
  ];
   $scope.obiSlides = [
    {
      image:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTeV_bTRzvXoJth3lGgegaOgYhHhDdJAetACbGV4EIdWYDBJSin'
    },
    { image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTJYq-6eKTyZg5uC21Mn85qQvzlKTAsQlKhJKrTzEvFpgi6Tjpvqw'
    },
    {
      image:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTYZy5LOOghe1UI6Hg8mEMckzWX1ceEO9k6FRrwUWSuluss8jgNMQ'
    }  
  ];
  $scope.revanSlides = [
    {
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8TlF32OwKGvThqf3LafhY5xKG6cdvhv_4ZwAnEWQgdJKWPIF0-w'
    },
    { image: 'http://pre06.deviantart.net/da52/th/pre/i/2013/208/e/9/darth_revan_by_superninjanub-d6ffv6r.jpg'
    },
    {
      image:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS3EWytKOA7kOjeyBMmKy-NEf51ad3NRnvaWvdWDzCAclkMlORA'
    },
    {
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT3Ga_H6iJK_2PfyHShCXk1uK6QqC6Naq00TY-mGJ69ci22feblUg'
    }  
  ];
  
})