// singleton

// object literals


const mySym = Symbol("key1")


const JsUser = {
    name : "Vrushank",
    "full Name" : "Vrushank G",
    [mySym] : "mykey1",
    age : 20,
    location : "tumkur",
    email : "vrushank@nvidia.com",
    isLoggedIn : false,
    lastLoggedInDays : ["Monday","Tuesday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full Name"]);
// console.log(typeof (mySym));

JsUser.email = "vrushank@city.com"
//Object.freeze(JsUser);
JsUser.email = "vrushank@npm.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello");
}
console.log(JsUser.greeting());


