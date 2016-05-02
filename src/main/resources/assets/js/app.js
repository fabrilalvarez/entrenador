var app = angular
    .module("mockupsApp", [
        'ngRoute',
        'menuBar',
        'footer',
        'skip',
        'next',
        'login',
        'globo',
        'signup',
        'sentimiento',
        'categorias',
        'sentimiento2',
        'mainController']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/login', {
            templateUrl: '/assets/js/components/login/login.html',
            controller: 'indexController'
        })
        .when('/sentimiento', {
            templateUrl: '/assets/js/components/sentimiento/sentimiento.html',
            controller: 'sentimientoController'
        })
        .when('/categorias', {
            templateUrl: '/assets/js/components/categorias/categorias.html',
            controller: 'categoriasController'
        })
        .when('/sentimiento2', {
            templateUrl: '/assets/js/components/sentimiento2/sentimiento2.html',
            controller: 'sentimiento2Controller'
        })
        .when('/signup', {
            templateUrl: '/assets/js/components/signup/signup.html',
            controller: 'signup'
        })
        .otherwise({
            redirectTo: '/login'
        });
});
