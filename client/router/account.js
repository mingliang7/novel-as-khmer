FlowRouter.route('/login', {
    action(params){
        BlazeLayout.render('layout', {main: 'mainLayout', content: 'accountLogin'});
    },
    name: 'account.login'
});