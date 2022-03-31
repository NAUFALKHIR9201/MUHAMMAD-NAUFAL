const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.hzytu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    if (err){
        console.log(err.message)
        return
      }
      console.log("Connected to mongodb");
      
      client.db('MyDatabase').collection('people').insertOne({
        name: 'Mertie Wolff',
        city: ' 诸 绍辉',
        avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/535.jpg',
        pass: '$2a$10$Y8pSHcBQ2pFloAFA93VRLuKlkMfCIRUwRosxXFE2.D.cMUgeS0MU.',
      }).then(result => {
        console.log(result);
      })
client.db('sample_training').collection('inspections').findOne().then(result => {
console.log(result);
});
});