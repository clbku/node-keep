var app = angular.module("app.todos", ["xeditable"]);

app.controller("todoController", ['$scope', 'svTodos', function($scope, svTodos) {
    $scope.appName = "Node todos";
    $scope.formData = {};
    $scope.loading = true;
    $scope.todos = [];
    svTodos.get().then(function(res) {
        $scope.todos = res.data;
        $scope.loading = false;
    });
    $scope.createTodo = function() {
        $scope.loading = true;
        var todo = {
            text: $scope.formData.text,
            isDone : false
        };

        // $scope.todos.push(todo);

        svTodos.create(todo).then(function(res){
            $scope.todos = res.data;
            $scope.loading = false;
        });
        $scope.formData.text="";
    };
    $scope.updateTodo = function(todo) {
        $scope.loading = true;
        svTodos.update(todo).then(function(res) {
            $scope.todos = res.data;
            $scope.loading = false;
        });
    };
    $scope.deleteTodo = function(todo) {
        $scope.loading = true;

        svTodos.delete(todo._id).then(function(res) {
            $scope.todos = res.data;
            $scope.loading = false;
        })
    }
}]);