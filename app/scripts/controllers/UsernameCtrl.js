(function() {
  function UsernameCtrl($scope, $cookies, $uibModal, $uibModalInstance) {

    this.submit = function() {
      if (this.name) {
        $cookies.put('blocChatCurrentUser', this.name);
        $uibModalInstance.close();
      }
    };


  };

  angular
    .module('blocChat')
    .controller('UsernameCtrl', ['$scope', '$cookies', '$uibModal', '$uibModalInstance', UsernameCtrl]);
})();
