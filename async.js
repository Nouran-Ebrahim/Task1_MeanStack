function GetUsers(Id) {
    console.log("Reading From users ......")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                Id,
                Name: "Nouran",
                Email: "nouran.ssp@gmail.com"
            })
        }, 3000)
    })
}

function GetOrders(Email) {
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
async function data() {
    const user = await GetUsers(1);
    console.log("users..", user)
    const order = await GetOrders(user.Email)
    console.log("Order..", order);
}
data()