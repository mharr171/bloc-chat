(function() {
  function HomeCtrl($scope, Room, $uibModal) {
    this.room = Room;
    $scope.activeChatTitle = 'select a chatroom to begin';

    this.openComponentModal = function() {
      var modalInstance = $uibModal.open({
        templateUrl: 'templates/modal.html',
        controller: 'ModalCtrl as modal'
      });

      modalInstance.result.then(function(room) {
        this.room = room;
        Room.add(this.room);
        console.log('New room created')
      }, function() {
        console.log('New room cancelled')
      });
    };

    this.chooseChat = function(id, value) {
      console.log(value + " clicked with id:" + id);
      $scope.activeChatTitle = value;
    }

  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['$scope', 'Room', '$uibModal', HomeCtrl]);
})();
