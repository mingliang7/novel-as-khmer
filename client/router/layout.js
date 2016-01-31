FlowRouter.route('/', {
   action(params){
       BlazeLayout.render('layout', {main: 'mainLayout', content: 'home'});
   }
});