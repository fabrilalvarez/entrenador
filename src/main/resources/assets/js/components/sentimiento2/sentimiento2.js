angular.module("sentimiento2", [])
    .component("sentimiento2", {
        templateUrl: "./js/components/sentimiento2/sentimiento2.html"
    })
    .controller('apiAppCtrl', controladorPrincipal);

/** funciones */
function controladorPrincipal($scope, $http) {
    var vm = this;

    vm.buscaCervezas = function () {
        var url = "http://api.openbeerdatabase.com/v1/beers.json?callback=JSON_CALLBACK";
        if (vm.nombre) {
            url += "&query=" + vm.nombre;
        }
        $http.jsonp(url).success(function (respuesta) {
            console.log("res:", respuesta);
            vm.cervezas = respuesta.beers;
        });
    }
}
