(function(){

    var app = angular.module('codeschool', ['ui.bootstrap.modal']);

    app.controller('ModalInstanceController', function($uibModalInstance){
    });

    app.controller('SelectChangeTestController', function($uibModal){
        var controller = this;
        this.selectedRestaurant = 0;
        
        this.restaurants = [
            { id: 1, name: "Moe's" },
            { id: 2, name: "Chipotle" },
            { id: 3, name: "5 Guys" },
            { id: 4, name: "Panera" }
        ];

        this.loadInfo = function(){
            if(controller.selectedRestaurant === "1"){
                controller.city = "Bridgeville";
                controller.state = "PA";
            } else {
                controller.city = "";
                controller.state = "";
            }
        };

        this.submit = function(){
            console.log('button pressed');
            $uibModal.open({
                templateUrl: 'modalContent.html',
                controller: 'ModalInstanceController'
            });
        };
    });
    
})();