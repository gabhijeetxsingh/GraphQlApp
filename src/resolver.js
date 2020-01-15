import { Dog } from "./models/dog"
import { Course } from "./models/Course"

export const resolvers = {
	Query: {
		helloWorld : () => "hello world",
		dogs: () => Dog.find(),
		allcourses: () => Course.find()
	},
	Mutation: {
		createDog: async(_,{name}) => {
			const puppy = new Dog({name });
			await puppy.save();
			return puppy;
		},
		createCourse :async (_,{title, author, description, topic, url})=>  {
			const course = new Course({title, author, description, topic, url});
			await course.save();
			return course;	
		}
	}

}