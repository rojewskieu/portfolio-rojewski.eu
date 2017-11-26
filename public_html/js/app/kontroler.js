'use strict';

var kontroler = angular.module( 'kontroler' , [ 'ngRoute'] );


kontroler.controller( 'portfolio' , [ '$scope' , '$http' , function( $scope , $http ){
	
	$http.get( 'model/wpisy.json' ).
	success( function( data ){
		$scope.portfolio = data;
	}).error( function(){
		console.log( 'Błąd pobrania pliku json' );
	});
}]);




kontroler.controller( 'nawigacja' , [ '$scope' , '$location' , function( $scope , $location ){
	
	$scope.isActive = function (path) {
		return $location.path() === path;
	};

}]);


kontroler.controller('mainController', function($scope, $route, $location) {
    $scope.$on('$routeChangeSuccess', function(newVal, oldVal) {
        if (oldVal !== newVal) {
            $scope.routeClassName = $route.current.className;
        }
    })
});




kontroler.controller('mapsController', function() {});
kontroler.controller('aboutController', function() {});

