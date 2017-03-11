var myAppServer = angular.module('myAppServer', []);
 
//模拟远端服务数据
myAppServer.factory('remoteData',function(){
    var data = [
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
    return data;
});

//getEmployerService根据员工id查询
myAppServer.factory('getEmployerService', function($http){
	var doGetEmployerInfos = function(employerInfoList, id){
		var len = employerInfoList.length, 
		    employerInfos={};
		for (var i = 0; i<len; i++) {
			if(employerInfoList[i].id == id){
				employerInfos = employerInfoList[i];
			}
		}
		return employerInfos;
	};
	return {
		//传参数
		getEmployerInfos : function(remoteData, id){
			return doGetEmployerInfos(remoteData, id);
		}
	}
});