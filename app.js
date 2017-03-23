(function(){

    // angular.module("uib/template/modal/window.html", []).run(["$templateCache", function($templateCache) {
    //     $templateCache.put("uib/template/modal/window.html",
    //         "<div class=\"modal-dialog {{size ? 'modal-' + size : ''}}\"><div class=\"modal-content\" uib-modal-transclude></div></div>\n" +
    //         "");
    // }]);

    // angular.module("uib/template/modal/myModalContent.html", []).run(["$templateCache", function($templateCache) {
    //     $templateCache.put("uib/template/modal/myModalContent.html",
    //         "<div class=\"modal-header\">\n" +
    //             "<button type=\"button\" class=\"close\" ng-click=\"cancel()\">\n" +
    //                 "<span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span>\n" +
    //             "</button>\n" +
    //             "<h4 class=\"modal-title\" id=\"confirmDeactivateLabel\">Save Info</h4>\n" +
    //         "</div>\n" +
    //         "<div class=\"modal-body\">\n" +
    //             "<p>Are you sure you want to save this?</p>\n" +
    //         "</div>\n" +
    //         "<div class=\"modal-footer\">\n" +
    //             "<button class=\"btn btn-sm btn-default\" ng-click=\"modalCancel()\">\n" +
    //                 "<i class=\"ace-icon fa fa-ban bigger-120\"></i>&nbsp;<strong>Cancel</strong>\n" +
    //             "</button>\n" +
    //             "<button class=\"btn btn-sm btn-success\" ng-click=\"modalSave()\">\n" +
    //                 "<i class=\"ace-icon fa fa-check bigger-120\"></i>&nbsp;<strong>Save</strong>\n" +
    //             "</button>\n" +
    //         "</div>");
    // }]);

    var app = angular.module('codeschool', [
        'ui.bootstrap.modal'
    ]);

    app.controller('ModalInstanceController', ['$scope', function ($scope) {
        // Cancel event
        $scope.modalCancel = function () {
            this.$dismiss('cancel');
        };

        // Discard changes and navigate to the desired location
        $scope.modalSave = function () {
            this.$close();
        };
    }]);

    app.controller('SelectChangeTestController', ['$uibModal', '$templateCache', '$scope', function($uibModal, $templateCache, $scope){
        $templateCache.put("uib/template/modal/window.html",
            "<div class=\"modal-dialog {{size ? 'modal-' + size : ''}}\"><div class=\"modal-content\" uib-modal-transclude></div></div>\n" +
            "");
        $templateCache.put("uib/template/modal/myModalContent.html",
            "<div class=\"modal-header\">\n" +
                "<button type=\"button\" class=\"close\" ng-click=\"modalCancel()\">\n" +
                    "<span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span>\n" +
                "</button>\n" +
                "<h4 class=\"modal-title\" id=\"confirmDeactivateLabel\">Save Info</h4>\n" +
            "</div>\n" +
            "<div class=\"modal-body\">\n" +
                "<p>Are you sure you want to save this?</p>\n" +
            "</div>\n" +
            "<div class=\"modal-footer\">\n" +
                "<button class=\"btn btn-sm btn-default\" ng-click=\"modalCancel()\">\n" +
                    "<i class=\"ace-icon fa fa-ban bigger-120\"></i>&nbsp;<strong>Cancel</strong>\n" +
                "</button>\n" +
                "<button class=\"btn btn-sm btn-success\" ng-click=\"modalSave()\">\n" +
                    "<i class=\"ace-icon fa fa-check bigger-120\"></i>&nbsp;<strong>Save</strong>\n" +
                "</button>\n" +
            "</div>");

        var controller = this;
        $scope.previousSelectedRestaurant = 0;
        $scope.selectedRestaurant = 0;
        
        $scope.restaurants = [
            { id: 1, name: "Moe's" },
            { id: 2, name: "Chipotle" },
            { id: 3, name: "5 Guys" },
            { id: 4, name: "Panera" }
        ];

        $scope.loadInfo = function(){
            if($scope.selectedRestaurant === "1"){
                $scope.city = "Bridgeville";
                $scope.state = "PA";
            } else {
                $scope.city = "";
                $scope.state = "";
            }
            $scope.previousSelectedRestaurant = $scope.selectedRestaurant;
        };

        $scope.submit = function(){
            console.log('button pressed');
            var modalInstance = $uibModal.open({
                template: $templateCache.get('uib/template/modal/myModalContent.html'),
                //templateUrl: 'uib/template/modal/myModalContent.html',
                controller: 'ModalInstanceController',
                controllerAs: 'modalCtrl',
                size: 'sm'
            });
            modalInstance.result.then(function(){
                console.log('Success result from modal');
            }, function(){
                console.log('Cancel result from modal');
            });
        };
    }]);
    
})();