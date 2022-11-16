import { MongoClient } from "mongodb";

let client;
export default async function getCollection(){
    const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@clustersample0.gbteaah.mongodb.net/?retryWrites=true&w=majority`;
    
    if (!client){
        client = new MongoClient(uri);
    }
  
    await client.connect();

    return client.db('todoApp').collection('todos');
}