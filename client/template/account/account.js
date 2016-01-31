var registerTpl = Template.accountRegister;
var loginTpl = Template.accountLogin;
Session.setDefault('showPassword', false);
registerTpl.onRendered(()=> {
    $('#accountRegister').trigger('reset');
});
registerTpl.helpers({
    toggleShowPassword(){
        var toggleShowPassword = Session.get('showPassword') == false ? 'password' : 'text';
        return toggleShowPassword;
    }
});
registerTpl.events({
    'click .showPassword'(){
        let getShowPassword = Session.get('showPassword');
        Session.set('showPassword', !getShowPassword);
    },
    'keyup #username'(e){
        var checkLength = e.currentTarget.value.length;
        if (checkLength < 5) {
            $('.valid-user').text('Username at least 5 characters');
            $('.valid-user').addClass('red-text');
        } else {
            $('.valid-user').text('Good to go!');
            $('.valid-user').removeClass('red-text');
            $('.valid-user').addClass('green-text');
        }
        if (checkLength == 0) {
            $('.valid-user').text('Username');
            $('.valid-user').removeClass('red-text');

        }
    },
    'keyup #password'(e){
        var confirmationPassword = $('#password-confirmation').val();
        var currentPassword = e.currentTarget.value;
        if (currentPassword !== '') {
            if (confirmationPassword == currentPassword) {
                $('.confirmation').removeClass('zmdi zmdi-close-circle')
                $('.confirmation').addClass('zmdi zmdi-check-circle');
                $('.valid-confirm-password').removeClass('red-text');
                $('.valid-confirm-password').addClass('green-text');
                $('.valid-confirm-password').text('Password Matched');
            }
        }
    },
    'keyup #password-confirmation'(e){
        var password = $('#password').val();
        var confirmPassword = e.currentTarget.value;
        if (password == confirmPassword) {
            $('.valid-confirm-password').removeClass('red-text');
            $('.valid-confirm-password').text('Password Matched');
            $('.valid-confirm-password').addClass('green-text');
            $('.confirmation').removeClass('zmdi zmdi-close-circle')
            $('.confirmation').addClass('zmdi zmdi-check-circle')

        } else {
            $('.valid-confirm-password').removeClass('green-text');
            $('.valid-confirm-password').addClass('red-text');
            $('.valid-confirm-password').text('Password Not Match');
            $('.confirmation').removeClass('zmdi zmdi-check-circle')
            $('.confirmation').addClass('zmdi zmdi-close-circle')
        }
    },
    'click .register'(e){
        let username = $('#username').val().trim();
        let email = $('#email').val().trim();
        let password = $('#password').val();
        let passwordConfirmation = $('#password-confirmation').val();
        Accounts.createUser({
            username: username,
            email: email,
            password: password
        }, function (err, res) {
            if (err) {
                Bert.alert(err.message, 'danger', 'fixed-top', 'fa-remove');
            } else {
                FlowRouter.go('home');
                Bert.alert('Thanks for register! Please verify your email :)', 'success', 'fixed-top', 'fa-check');
            }
        });
        e.preventDefault();
    }
});


loginTpl.events({
    'click .login'(e){
        e.preventDefault();
        var username = $('#usernameLogin').val();
        var password = $('#passwordLogin').val();
        Meteor.loginWithPassword(username, password, function (err, re) {
            if (err) {
                Bert.alert(err.message, 'danger', 'fixed-top', 'fa-remove');
            } else {
                Bert.alert(`Welcome Back ${username}!`, 'success', 'fixed-top', 'fa-check');

            }
        });
    }
});
