const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.pkcxb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server (optional starting in v4.7)
        await client.connect();

        const usersCollection = client.db("usersDB").collection("users");

        app.get('/users', async (req, res) => {
            try {
                const cursor = usersCollection.find();
                const result = await cursor.toArray();
                res.status(200).send(result);
            } catch (error) {
                res.status(500).send({ error: "Failed to fetch user data" });
            };
        });

        app.get('/users/:id', async (req, res) => {
            try {
                const id = req.params.id;
                const query = { _id: new ObjectId(id) };
                const result = await usersCollection.findOne(query);
                res.status(200).send(result);
            } catch (error) {
                console.error("Error fetching coffee data:", error);
                res.status(500).send({ error: "Failed to fetch coffee data" });
            };
        });

        app.post('/users', async (req, res) => {
            try {
                const user = req.body;
                const result = await usersCollection.insertOne(user);
                res.status(201).json(result);

            } catch (error) {
                console.error('Error occurs - ', error);
                res.status(500).json({ message: 'Internal Server Error' });
            }
        });

        app.delete('/users/:id', async (req, res) => {
            try {
                const id = req.params.id;
                const query = { _id: new ObjectId(id) };
                const result = await usersCollection.deleteOne(query);
                res.status(200).send(result);
            } catch (error) {
                console.error("Error deleting coffee:", error);
                res.status(500).send({ error: "Failed to delete user" });
            };
        });

        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Hello Express JS');
});

app.listen(port, () => {
    console.log(`Server is connecting with port - ${port}`);
});
