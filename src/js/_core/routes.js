app.config(function($routeProvider, $locationProvider) {
  $routeProvider

/////////////////////////////////////////////////////////////STARTUP AND LOGIN / SIGNUP ////////////////////////////////
  .when('/', {
    templateUrl: '/tpl/public/home.html',
    controller: 'homeCtrl',
    title:'Home'
  })
  .when('/login', {
    templateUrl: '/tpl/public/login.html',
    controller: 'loginCtrl',
    title:'Login'
  })
  .when('/start', {
    templateUrl: '/tpl/public/start.html',
    controller: 'startCtrl',
    title:'start'
  })


/////////////////////////////////////////////////////////////DASHBOARD//////////////////////////////////////////////////
  .when('/dashing/dashboard', {
    templateUrl: '/tpl/dashing/dashboard.html',
    controller: 'dashboardCtrl',
    title:'Dashing Dashboard'
  })

/////////////////////////////////////////////////////////////BLOG///////////////////////////////////////////////////////
  .when('/dashing/blog', {
    templateUrl: '/tpl/dashing/blog/blog.html',
    controller: 'blogCtrl',
    title:'Dashing blog'
  });
  // .when('/dashing/blog/edit/:slug', {
  //   templateUrl: '/tpl/dashing/blog/post.html',
  //   controller: 'blogCtrl',
  //   title:'Dashing blog'
  // })



  $routeProvider.otherwise({redirectTo: '/'});

  // configure html5 to get links working on jsfiddle
  $locationProvider.html5Mode(true).hashPrefix('!');
});
