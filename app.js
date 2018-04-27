(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
    $scope.response = "";

    $scope.Check = function() {

        //Input field into 'menu'
        var menu = $scope.lunchModel;

        //Check if the input field has any content
        if(menu != null) {
            var splitMenu = menu.split(",");
            var length = splitMenu.length;
            //Initialize variables for the "for" loop
            var array = [];
            var x = 0;

            //For loop that creates a new array with the actual dishes
            for(var i = 0; i<length; i++) {
                //Trim the current string
                var test = splitMenu[i].trim();
                if(test > 0) {
                    //If there is content, add the string to 'array'
                    array[x] = test;
                    x++;
                }
            }
            //Re-initialize variables
            length = array.length;

            //If the dish length is less than or equal to 3, give success message
            if(length <= 3 && length>0) {
                $scope.response = "Enjoy!";
                $scope.color = {"color":"green", "border": "green 2px solid"};
            }
            //If the dish length is greater than 3, give "too much" message
            else if (length > 3) {
                $scope.response = "Too Much!";
                $scope.color = {"color":"green", "border": "green 2px solid"};
            }
            //If nothing is in dish, give failure message
            else if(length == 0) {
                $scope.response = "Please enter data first";
                $scope.color = {"color":"red", "border": "red 2px solid"};
            }
        }
        //If nothing is in dish, give failure message
        else{
            $scope.response = "Please enter data first";
            $scope.color = {"color":"red", "border": "red 2px solid"};
        }
    };

};


})();