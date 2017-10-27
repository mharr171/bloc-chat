(function() {
    function Room($firebaseArray) {
      var Room = {};
      var ref = firebase.database().ref().child('rooms');
      var rooms = $firebaseArray(ref);

      Room.all = rooms;

      var onComplete = function(ref){
        var id = ref.key;
        console.log('added record with id ' + id);
        rooms.$indexFor(id); // returns location in the array
      }

      var onError = function(reason){
          console.log('Uh oh! There was an error!\n', reason);
      }

        /**
        * @function Room.add
        * @desc calls the firebase $add function to  add a room object to our
        * list of rooms
        * @param {object} roomObj
        */
      Room.add = function(roomObj) {
        console.log('Room.add called, adding ', roomObj, ' to the $firebaseArray');
        rooms.$add(roomObj).then(onComplete,onError);
        };

        return Room;
      }

      angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
    })();
