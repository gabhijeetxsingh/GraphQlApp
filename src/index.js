import express from "express";
import mongoose from "mongoose";
import {
    graphqlExpress,
    graphiqlExpress,
} from 'graphql-server-express';
import bodyParser from 'body-parser';
import { ApolloServer, gql } from "apollo-server-express";
import { resolvers } from "./resolver";
import { typeDefs } from "./typeDefs";
import cors from "cors";
import morgan from "morgan";
import { Course } from "./models/Course"


const server = async () => {

    const app = express();
    const server = new ApolloServer({
        typeDefs,
        resolvers
    })

    app.use(cors());
    app.use(morgan('dev'));

    server.applyMiddleware({ app });

    try {

        await mongoose.connect("mongodb+srv://abhijeetxsingh:test1234@learninggraphql-bcsfc.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });
    } catch (err) {
        console.log(err)
    }

    app.get("/", (req, res) => {
        res.send("hello world");
    })

    app.listen({ port: 4001 }, () => {
        console.log("connected")
    })
}

server();