//module
var app = angular.module('myApp', ['ngRoute', 'myAppController','myAppServer', 'myAppFilter']);

//$routeProvider提供了定义路由表的服务，它有两个核心方法，when(path,route)和otherwise(params)
app.config(function($routeProvider){
	$routeProvider.when('/main', {
		templateUrl:'templ/list.html',
		controller : 'listController'
	}).when('/edit/:id', {
		templateUrl:'templ/edit.html',
		controller : 'editController'
	}).when('/view/:id', {
		templateUrl:'templ/view.html',
		controller : 'viewController'
	}).when('/about', {
		templateUrl:'templ/about.html',
		controller : ''
	}).when('/routeDetail', {
		templateUrl:'templ/routeDetail.html',
		controller: ''
	}).otherwise({
		//重定向的地址
		redirectTo: '/main' 
	});
});