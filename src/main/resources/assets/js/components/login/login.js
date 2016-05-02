angular.module("login", [])
    .component("login", {
        templateUrl: "/assets/js/components/login/login.html"
    })
    .controller('controladorLogin', ['$http', controladorPrincipal]);

/** funciones */
function controladorPrincipal($http) {
    var cl = this;

    //inicializo un objeto en los datos de formulario
    cl.fdatos = {};

    // declaro la función enviar
    cl.enviar = function () {
        $http.post("A DONDE VOY A MANADAR EL FORMULARIO.PHP", cl.fdatos)
            .success(function (res) {
                console.log(res);
                //se podrá volcar la respuesta al modelo con algo como vm.res = res;
            });
    }
}
