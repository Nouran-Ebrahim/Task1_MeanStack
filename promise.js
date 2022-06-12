
function GetUser(Id) {
    console.log("Reading From users......")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                Id,
                Name: "Nouran",
                Email: "nouran.ssp"
            }) //excute
        }, 3000)
    })
}
function GetOrder(Email) {
    console.log("Reading From Orders......")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                Email,
                order: "mobile",
                customerId: 1,
                creationDate: "2022-02-02"
            })
        }, 3000);
    })
}
GetUser(1)
    .then(user => GetOrder(user.Email))
    .then(order => console.log("orders", order))
    .catch(error => console.error(error))