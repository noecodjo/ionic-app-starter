angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $state) {

  $scope.logout = function() {
    Ionic.Auth.logout();
    $state.go('login');
  };
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope, $ionicPopup, $state) {

  var user = Ionic.User.current();

  $scope.logout = function() {
    Ionic.Auth.logout();
    $state.go('login');
  };

  if (user.isAuthenticated()) {
    // the user is already signed in
    $scope.user = user;
  } else {
    // we need to show a login or sign up form
  }

  $scope.resetPassword = function() {
    user.resetPassword().then(resetPasswordSuccess, resetPasswordFailure);
  };

  var resetPasswordSuccess = function(response) {
    var alertPopup = $ionicPopup.alert({
      title: 'Yeah',
      template: 'Password was updated!'
    });
  };

  var resetPasswordFailure = function(error) {
    var alertPopup = $ionicPopup.alert({
      title: 'Ouch!',
      template: 'Something turn out quite bad trying to reset your password'
    });
  };



})


.controller('SignupCtrl', function($scope, $state, $ionicPopup) {

  $scope.data = {};

  $scope.signup = function() {
    Ionic.Auth.signup($scope.data).then(signupSuccess, signupFailure);
  };

  var signupSuccess = function() {
    console.log('success');
    $scope.data.image = 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAhEAAAAJDhhYTYwYTQ3LTkzZGEtNGE0Yy04YzViLWMyMzVmZmI0M2M4Mg.jpg';
    var options = { 'remember': true };
    Ionic.Auth.login('basic', options, $scope.data).then(authSuccess, authFailure);
  };

  var signupFailure = function() {
    var alertPopup = $ionicPopup.alert({
      title: 'Ouch!',
      template: 'Something happened while creating your account'
    });
  };

  var authSuccess = function() {

  };

  var authFailure = function() {

  };

})

.controller('LoginCtrl', function($scope, $state, $ionicPopup) {

  $scope.data = {};

  $scope.login = function() {
    var options = { 'remember': true };
    Ionic.Auth.login('basic', options, $scope.data).then(authSuccess, authFailure);

    var push = new Ionic.Push({
      "debug": false
    });

    push.register(function(token) {
      console.log("Device token:",token.token);
      push.saveToken(token.token);  // persist the token in the Ionic Platform
    });
    
  };

  $scope.facebook = function() {
    Ionic.Auth.login('facebook', {'remember': true}).then(authSuccess, authFailure);
  };

  var authSuccess = function(res) {
    console.log('res', JSON.stringify(res));
    $state.go('tab.dash', {}, {reload: true});
  };

  var authFailure = function(res) {
    console.log(JSON.stringify(res));
    var alertPopup = $ionicPopup.alert({
      title: 'Ouch!',
      template: 'Something happened while logging you in'
    });
  };

})

.controller('AppCtrl', function($scope, $state, $ionicPopup, AUTH_EVENTS) {
 
  $scope.user = Ionic.User.current();

  $scope.$on(AUTH_EVENTS.notAuthorized, function(event) {
    var alertPopup = $ionicPopup.alert({
      title: 'Unauthorized!',
      template: 'You are not allowed to access this resource.'
    });
  });
 
  $scope.$on(AUTH_EVENTS.notAuthenticated, function(event) {
    Ionic.Auth.logout();
    $state.go('login');
    var alertPopup = $ionicPopup.alert({
      title: 'Session Lost!',
      template: 'Sorry, You have to login again.'
    });
  });

  var deploy = new Ionic.Deploy();
  
  deploy.watch().then(function() {}, function() {}, function(deployUpdateAvailable) {
    // triggered upon each periodic check for updates.
    // deployUpdateAvailable will be true if an update is available
    // otherwise it will be false
    if(deployUpdateAvailable) {
      deploy.update().then(function(res) {
        console.log('Ionic Deploy: Update Success! ', res);
      }, function(err) {
        console.log('Ionic Deploy: Update error! ', err);
      }, function(prog) {
        console.log('Ionic Deploy: Progress... ', prog);
      });
    }
  });
 
});
