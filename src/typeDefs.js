import {gql} from "apollo-server-express";

export const typeDefs = gql`
	
	type Query {
		helloWorld : String!
		dogs : [Dog!]!
		allcourses : [allCourses!]!
	}

	type Dog {
		id : ID!
		name : String!
	}

	type allCourses {
		id : ID!
		title : String!
		author : String!
		description : String!
		topic : String!
		url : String!
	}

	type Mutation {
		createDog(name : String!):Dog!
		createCourse(title : String!,author : String!,description : String!,topic : String!,url : String!):allCourses!
	}

`;