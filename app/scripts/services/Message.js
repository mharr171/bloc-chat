(function() {
  function Message($firebaseArray, $cookies) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    var onComplete = function(ref) {
      var id = ref.key;
      console.log('added message with id ' + id);
    }

    var onError = function(reason) {
      console.log('Uh oh! There was an error!\n', reason);
    }

    Message.getByRoomId = function(roomId) {
      var ref2 = ref.orderByChild('roomId').equalTo(roomId);
      return $firebaseArray(ref2);
    };

    Message.send = function(messageContent, activeRoomId) {
      var dateTime = new Date();
      console.log('username: ', $cookies.get('blocChatCurrentUser'));
      console.log('content: ', messageContent);
      console.log('sentAt: ', dateTime.getHours() + ':' + dateTime.getMinutes());
      console.log('roomId: ', activeRoomId);

      messages.$add({
        username: $cookies.get('blocChatCurrentUser'),
        content: messageContent,
        sentAt: dateTime.getHours() + ':' + dateTime.getMinutes(),
        roomId: activeRoomId
      }).then(onComplete, onError);
    };

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();
