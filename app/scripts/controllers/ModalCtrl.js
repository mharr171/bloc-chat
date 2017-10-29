(function() {
  function ModalCtrl($uibModal, $uibModalInstance) {

    this.ok = function() {
      $uibModalInstance.close(this.name);
      console.log(this.name);
    };

    this.cancel = function() {
      $uibModalInstance.dismiss('cancel');
    };

  };

  angular
    .module('blocChat')
    .controller('ModalCtrl', ['$uibModal', '$uibModalInstance', ModalCtrl]);
})();
