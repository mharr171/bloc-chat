(function() {
  function HomeCtrl(Room, $uibModal) {
    this.room = Room;

    this.openComponentModal = function() {
      var modalInstance = $uibModal.open({
        templateUrl: 'templates/modal.html',
        controller: 'ModalCtrl as modal'
      });

      modalInstance.result.then(function(room) {
        this.room = room;
        Room.add(this.room);
        console.log('New room created')
      }, function(){console.log('New room cancelled')});
    };

  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
