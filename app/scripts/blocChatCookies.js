(function() {
  function BlocChatCookies($cookies, $uibModal) {

    var currentUser = $cookies.get('blocChatCurrentUser');
    console.log("current user: " + currentUser);
    if (!currentUser || currentUser === '') {
      var modalInstance = $uibModal.open({
        templateUrl: 'templates/usernameModal.html',
        controller: 'UsernameCtrl as username',
        backdrop: 'static'
      });
    };

  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
