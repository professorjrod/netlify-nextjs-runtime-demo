const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI;

const addBlogPost = async (data) => {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await client.connect();

  const database = client.db("blogposts");
  const collection = database.collection("blogposts");

  const result = await collection.insertOne(data);

  const insertedId = result.insertedId;

  return insertedId;
};

export default addBlogPost;
