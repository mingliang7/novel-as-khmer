FlowRouter.route('/home', {
    action(params){
        BlazeLayout.render('layout', {main: 'mainLayout', content: 'home'});
    },
    name: 'home'
});