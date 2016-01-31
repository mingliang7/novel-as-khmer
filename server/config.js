//Accounts.validateNewUser((user) =>{
//    console.log(user)
//    if (user.username && user.username.length >= 5)
//        return true;
//    throw new Meteor.Error(403, "Username must have at least 5 characters");
//});
//// Validate username, without a specific error message.
//Accounts.validateNewUser((user) =>{
//    return user.username !== "root";
//});
Accounts.onCreateUser((options, user)=> {
    if(user.username && user.username.length>=5){
        return user;
    }else{
        throw new Meteor.Error(403, "Username must have at least 5 characters");
        return false;
    }
});

