'use strict';


angular.module('resetApp')
  .controller('ResetPasswordCtrl', function($http, $routeParams, SweetAlert){
        const self = this;
        self.newPassword = '';
        self.repeatPassword = '';
        self.passwordValid = function() {
            return self.newPassword.length > 7;
        };

        self.passwordsMatch = function() {
            return self.repeatPassword === self.newPassword;
        };

        self.changePassword = function() {
            if (self.passwordValid() && self.passwordsMatch()) {
                $http.post('http://localhost:3000/v1/users/changePassword?appId=743f932a6fecf5cc30730c2385d6e7c7&clientKey=b7fd395de3739fd6bc36d459ac47ec5e642a0331&accessToken='+$routeParams.accessToken, { password: self.newPassword }).then(function successCallback() {
                    SweetAlert.swal('Good job!', 'Your password has been changed!', 'success');
                    self.newPassword = '';
                    self.repeatPassword = '';
                }, function errorCallback(response) {
                    SweetAlert.swal('We are sorry', 'Your password could not be changed.', 'error');
                    console.log(response);
                });
            }
        };
  });
