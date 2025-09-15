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
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full Name"]);


