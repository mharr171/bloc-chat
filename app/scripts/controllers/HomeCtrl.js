(function() {
  function HomeCtrl($scope, Room, Message, $uibModal) {
    this.room = Room;
    $scope.activeChatTitle = 'select a chatroom to begin';
    $scope.messages = {};

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
      $scope.messages = Message.getByRoomId(id);
      console.log(Message);
      console.log($scope.messages);
      console.log(JSON.stringify($scope.messages));
    }

  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['$scope', 'Room', 'Message', '$uibModal', HomeCtrl]);
})();
