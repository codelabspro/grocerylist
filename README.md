# grocerylist

This app was created by folowing the steps here

https://www.meteor.com/tutorials/blaze/creating-an-app


Insert data by running

meteor

meteor mongo

meteor:PRIMARY> db.tasks.insert({ text: "Hello world!", createdAt: new Date() });
WriteResult({ "nInserted" : 1 })
meteor:PRIMARY> db.tasks.insert({ text: "Buy apples", createdAt: new Date() });
WriteResult({ "nInserted" : 1 })
meteor:PRIMARY> db.tasks.insert({ text: "Buy oranges", createdAt: new Date() });
WriteResult({ "nInserted" : 1 })
meteor:PRIMARY> db.tasks.insert({ text: "Buy bananas", createdAt: new Date() });
WriteResult({ "nInserted" : 1 })
meteor:PRIMARY> quit

http://grocerytodolist.meteor.com/
