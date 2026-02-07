import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.ATLAS_URI || "";
const client = new MongoClient(uri);

try {
  await client.connect();
  await client.db("admin").command({ ping: 1 });
  console.log("Successfully connected to MongoDB!.");
}
catch (err) {
  console.error(err);
}

let db = client.db("employees");
export default db;
