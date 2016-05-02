<#-- @ftlvariable name="Index" type="org.gradiant.fgttrainer.views.IndexView" -->
<!DOCTYPE html>
<html lang="es" ng-app="mockupsApp">

<head>
    <meta charset="UTF-8">
    <title>Mockups Entrenador</title>
    <!-- librerias -->
    <script src="/assets/lib/jquery-1.12.3.js"></script>
    <script src="/assets/lib/rangyinputs-jquery-src.js"></script>
    <!-- Compatibilidad con otros dispositivos -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- librerías opcionales que activan el soporte de HTML5 para IE8 -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
    <!-- CSS -->
    <link rel="stylesheet" type="text/css" href="/assets/css/myBootstrap.css" media="screen" />
</head>

<body>
    <!-- body style="background: url(img/textura_fondo.png) repeat left top;" -->
    <!-- Cuerpo -->
    <div class="container">
        <menu-Bar></menu-Bar>
        <!-- aquí es donde cargarán todas las vistas dependiendo de la url -->
        <ng-view></ng-view>
    </div>
    <footer></footer>
    <!-- librerias -->
    <script src="/assets/lib/angular.js"></script>
    <script src="/assets/lib/angular-route.js"></script>
    <!-- componentes -->
    <script src="/assets/js/app.js"></script>
    <script src="/assets/js/components/menuBar/menuBar.js"></script>
    <script src="/assets/js/components/skip/skip.js"></script>
    <script src="/assets/js/components/next/next.js"></script>
    <script src="/assets/js/components/footer/footer.js"></script>
    <script src="/assets/js/components/login/login.js"></script>
    <script src="/assets/js/components/signup/signup.js"></script>
    <script src="/assets/js/components/globo/globo.js"></script>
    <script src="/assets/js/components/sentimiento/sentimiento.js"></script>
    <script src="/assets/js/components/categorias/categorias.js"></script>
    <script src="/assets/js/components/sentimiento2/sentimiento2.js"></script>
    <!-- controladores -->
    <script src="/assets/js/controllers/mainController.js"></script>
</body>

</html>
