(function() {
  function HomeCtrl(Room) {
    this.room = Room;

    // var roomName = 'name';
    // Room.add({$value: 'room '+roomName});
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
