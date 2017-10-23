(function() {
  function RoomCtrl(Room) {
    this.room = Room;
  }

  angular
    .module('blocChat')
    .controller('RoomCtrl', ['Room', RoomCtrl]);
})();
