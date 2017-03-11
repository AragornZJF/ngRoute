//声明一个过滤器
var myAppFilter = angular.module('myAppFilter', []);

//过滤器
myAppFilter.filter('typeFilter',function(){
    var f = function(input){
        return input == '1' ? '男' : '女';
    }
    return f;
});