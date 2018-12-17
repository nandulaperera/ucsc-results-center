app.controller('ViewFileController',function (
    $mdDialog,
    VirtualConsoleService,
    $scope)
{

    $scope.logText = '';
    VirtualConsoleService.viewFile()
    .then((data)=>{
        console.log(data.data);
        $scope.logText = data.data.toString();
    });

    $scope.cancel = function() {
        $mdDialog.cancel();
    };

});