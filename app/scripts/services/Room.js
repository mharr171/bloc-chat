(function() {
  function Room($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child('rooms');
    var rooms = $firebaseArray(ref);

    // QUESTION: why Room.all rather than Room = rooms
    Room.all = rooms;

    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
