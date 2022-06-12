# Task1_MeanStack
Write a simple app that simulates that you are fetching data from database.

Imagine that you have customers and orders for every customer.

What you have to do that you will specific customer e.g with id 1 this will return object 
like this :  {email: "", name:"", id:}
after you get the customer you will get this customer orders using customer email from the object above and return
array orders like [{order: "mobile", customerId: 1, creationDate: "2022-02-02"} ]  

Note: you will not connect to database, you will return the data hard coded like above.

This task needs to be done in 3 different ways:
1. Callback approach.
2. Promise.
3. Async/await
