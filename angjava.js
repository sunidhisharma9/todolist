
   	angular.module('ToDo',[]).
	controller('todoController',['$scope',function($scope){
		$scope.todos = [
		{'title':'You can add more here..','done':false}];

		$scope.addTodo=function(){
          $scope.todos.push({'title':$scope.newTodo,'done':false})
          $scope.newTodo=''
		}
		$scope.clearCompleted = function(){
          $scope.todos= $scope.todos.filter(function(item){
          	return !item.done
          })

		}
	}])

  