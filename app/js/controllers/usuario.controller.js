app.controller('UsuarioController', UsuarioController);

UsuarioController.$inject=["$scope"]

function UsuarioController($scope){
  $scope.myHTML= '<p>Términos y condiciones paa el uso del módulo de <strong>Usuarios</strong></p>'
  + ' para más información visite <a href="http<://angularjs.org/">AngularJS!</a>';
}
