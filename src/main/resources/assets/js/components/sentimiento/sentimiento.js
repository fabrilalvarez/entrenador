angular.module("sentimiento", [])
    .component("sentimiento", {
        templateUrl: "/assets/js/components/sentimiento/sentimiento.html"
    })
    .controller('buscador', ['$http', controladorPrincipal]);

/** funciones */
function controladorPrincipal($http) {
    var vm = this;

    vm.buscaEnRegion = function () {
        $http.get(vm.url).success(function (respuesta) {
            //console.log("res:", respuesta);
            vm.paises = respuesta;
        });
    }
}
