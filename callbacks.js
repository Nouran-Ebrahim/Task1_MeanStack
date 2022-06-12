function GetUser(Id, callback) {
    console.log("Reading From users......")
    setTimeout(() => {
        callback({
            Id,
            Name: "Nouran",
            Email: "nouran.ssp@gmail.com"
        })
    }, 2000);
}

function GetOrder(Email, callback) {
    console.log("Reading From orders......")
    setTimeout(() => {
        callback({
            Email,
            order: "mobile", 
            customerId: 1, 
            creationDate: "2022-02-02"
        })
    }, 3000);
}


//async call
GetUser(1, function(user) {
    console.log("user...", user)
    GetOrder(user.Email,function(order){
        console.log("orders...",order)
    })

})