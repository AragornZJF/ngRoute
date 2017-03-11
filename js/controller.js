var employerInfoList = [
    {   "id" : 0,
        "name": "Avenstar", 
        "type": 1,
        "phoneNumber" : "18895047986",
        "carDate": "2017-2-25",
        "department" : "研发部"
    },
    {
    	"id" : 1,
        "name": "Gates", 
        "type": 2,
        "phoneNumber" : "18295047986",
        "carDate": "2017-2-20",
        "department" : "销售部"
    },
    {
    	"id" : 2,
        "name": "ShareLi", 
        "type": 2,
        "phoneNumber" : "18795047986",
        "carDate": "2017-2-26",
        "department" : "技术部"
    },
    {
    	"id" : 3,
        "name": "Bobi", 
        "type": 2,
        "phoneNumber" : "18895047986",
        "carDate": "2016-1-26",
        "department" : "销售部"
    },
    {
    	"id" : 4,
        "name": "Kimi", 
        "type": 1,
        "phoneNumber" : "18395047986",
        "carDate": "2016-1-26",
        "department" : "人事部"
    }
];

var myAppCtrl = angular.module('myAppController', []);

//list
myAppCtrl.controller('listController', ['$scope','$routeParams',
	function($scope, $routeParams){
		$scope.employerList = [];
		$scope.employerList = employerInfoList;
		$scope.delete = function(index){
			employerInfoList.splice(index,1);
		};
	}
]);

//edit
myAppCtrl.controller('editController', ['$scope','$routeParams','$location', 'remoteData','getEmployerService',
	function($scope, $routeParams,$location, remoteData, getEmployerService){
		$scope.employer = {};
		$scope.employer = remoteData[$routeParams.id];
		$scope.ok = function(){
			employerInfoList[$routeParams.id] = $scope.employer;
			$location.path('/list');
		}
		$scope.cancel = function(){
			$location.path('/list');
		}
	}
]);

//view
myAppCtrl.controller('viewController', ['$scope','$routeParams','$location', 'remoteData',
	function($scope,$routeParams,$location, remoteData){
		$scope.employer = employerInfoList[$routeParams.id];
		$scope.close = function(){
			$location.path('/list');
		}
	}
]);

//delete
myAppCtrl.controller('deleteController', ['$scope','$routeParams','$location', 'getEmployerService',
	function($scope,$routeParams,$location,getEmployerService){
		for (var i = 0; i<employerInfoList.length; i++) {
			if(employerInfoList[i].id == $routeParams.id){
				employerInfoList.splice(i,1);
			}
		}
		$location.path('/list');
	}
]);