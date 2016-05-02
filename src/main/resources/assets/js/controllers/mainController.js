angular
    .module('mainController', [])
    .controller('signUP', signUP)
    .controller('globo', globo)
    .controller("mouseDetector", mouseDetector)
    .controller('sentimientoController', sentimientoController)
    .controller('categoriasController', categoriasController)
    .controller('sentimiento2Controller', sentimiento2Controller)
    .controller('loginController', loginController);

/** funciones */
function signUP($scope) {
    $scope.action = "exitoso!";
}
/** Esta funcion se pueden optimizar, se dejan así para posibles usos distintos en el futuro */
function sentimientoController($scope, $location) {
    $scope.nombre = "Sentimiento";
    $scope.irSentimiento = function () {
        $location.url('/sentimiento');
    };
}
/** Esta funcion se pueden optimizar, se dejan así para posibles usos distintos en el futuro */
function categoriasController($scope, $location) {
    $scope.nombre = "Categorias";
    $scope.irCategorias = function () {
        $location.url('/categorias');
    };
} /** Esta funcion se pueden optimizar, se dejan así para posibles usos distintos en el futuro */
function sentimiento2Controller($scope, $location) {
    $scope.nombre = "Sentimiento2";
    $scope.irSentimiento = function () {
        $location.url('/sentimiento2');
    };
}
/** Esta funcion se pueden optimizar, se dejan así para posibles usos distintos en el futuro */
function loginController($scope, $location) {
    $scope.nombre = "Login";
    $scope.irLogin = function () {
        $location.url('/login');
    };
    $scope.irSignUp = function () {
        $location.url('/signup');
    };
}
/** IMPORTANTE detector mouse */
function globo($scope) {
    $scope.quepasa = "AQUI VA UN TEXTO PARA ANALIZAR";
    var i;
    $scope.list = [];
    for (i = 0; i < 24; i++) {
        $scope.list.push(i);
    }
    $scope.globoBotonesPosicion = 0;
    $scope.onmouseover = function (i) {
        $scope.globoBotonesPosicion = i;
    }
    $scope.$watch('globoBotonesPosicion', function (n, o) {
        $("#" + o).removeClass("globoBotones");
        $("#" + n).addClass("globoBotones");
    });
}

function mouseDetector($scope) {
    // Initialization
    $scope.onMouseDownResult = "";
    $scope.onMouseUpResult = "";
    $scope.onMouseEnterResult = "";
    $scope.onMouseLeaveResult = "";
    $scope.onMouseMoveResult = "";
    $scope.onMouseOverResult = "";

    // Utility functions

    // Accepts a MouseEvent as input and returns the x and y
    // coordinates relative to the target element.
    var getCrossBrowserElementCoords = function (mouseEvent) {
        var result = {
            x: 0,
            y: 0
        };

        if (!mouseEvent) {
            mouseEvent = window.event;
        }

        if (mouseEvent.pageX || mouseEvent.pageY) {
            result.x = mouseEvent.pageX;
            result.y = mouseEvent.pageY;
        } else if (mouseEvent.clientX || mouseEvent.clientY) {
            result.x = mouseEvent.clientX + document.body.scrollLeft +
                document.documentElement.scrollLeft;
            result.y = mouseEvent.clientY + document.body.scrollTop +
                document.documentElement.scrollTop;
        }

        if (mouseEvent.target) {
            var offEl = mouseEvent.target;
            var offX = 0;
            var offY = 0;

            if (typeof (offEl.offsetParent) != "undefined") {
                while (offEl) {
                    offX += offEl.offsetLeft;
                    offY += offEl.offsetTop;

                    offEl = offEl.offsetParent;
                }
            } else {
                offX = offEl.x;
                offY = offEl.y;
            }

            result.x -= offX;
            result.y -= offY;
        }

        return result;
    };

    var getMouseEventResult = function (mouseEvent, mouseEventDesc) {
        var coords = getCrossBrowserElementCoords(mouseEvent);
        return mouseEventDesc + " at (" + coords.x + ", " + coords.y + ")";
    };

    $scope.onMouseDown = function ($event) {
        $scope.onMouseDownResult = getMouseEventResult($event, "Mouse down");
    };

    $scope.onMouseUp = function ($event) {
        $scope.onMouseUpResult = getMouseEventResult($event, "Mouse up");
    };

    $scope.onMouseEnter = function ($event) {
        $scope.onMouseEnterResult = getMouseEventResult($event, "Mouse enter");
    };

    $scope.onMouseLeave = function ($event) {
        $scope.onMouseLeaveResult = getMouseEventResult($event, "Mouse leave");
    };

    $scope.onMouseMove = function ($event) {
        $scope.onMouseMoveResult = getMouseEventResult($event, "Mouse move");
    };

    $scope.onMouseOver = function ($event) {
        $scope.onMouseOverResult = getMouseEventResult($event, "Mouse over");
    };
}
/*
function sentimientoController($scope, $location) {
    $scope.nombre = "sentimiento";
    $scope.irSentimiento = function () {
        $location.url('/sentimiento');
    };
}
function sentimientoController($scope, $location) {
    $scope.nombre = "sentimiento";
    $scope.irSentimiento = function () {
        $location.url('/sentimiento');
    };
}
function sentimientoController($scope, $location) {
    $scope.nombre = "sentimiento";
    $scope.irSentimiento = function () {
        $location.url('/sentimiento');
    };
}
function sentimientoController($scope, $location) {
    $scope.nombre = "sentimiento";
    $scope.irSentimiento = function () {
        $location.url('/sentimiento');
    };
}
*/
