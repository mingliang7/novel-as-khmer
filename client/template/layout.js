var index = Template.layout;
var mainLayoutTpl = Template.mainLayout;
index.onRendered(()=> {
    $(".button-collapse").sideNav({
        closeOnClick: true
    });
});

index.helpers({
    checkUser(currentUser){
        if (currentUser) {
            FlowRouter.go('/home');
        } else {
            FlowRouter.go('/login')
        }
    }
});

index.events({
    'click .logout'(){
        Meteor.logout();
        FlowRouter.go('/home');
    },
    'click .slide-profile'(){
       $('.button-collapse').trigger('click')
    }
});