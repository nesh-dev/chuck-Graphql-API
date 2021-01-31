import "reflect-metadata";
import { Resolver, Query, Arg,  } from 'type-graphql'; 
import {jokeObject} from './types'
import axios from 'axios';

@Resolver()
export class JokeResolver { 
    @Query(() => [ String ])
    async categories() {
        try {
            const response = await axios.get('https://api.chucknorris.io/jokes/categories'); 
            const { data } = response
            return data
        } catch (error) {
            throw new Error(error)
        }
    }

    @Query(returns => jokeObject)
    async joke(@Arg("category") category: string) {
        try {
            const response = await axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`)
            return response.data
         } catch (error) {
             console.log(error, '???')
             throw new Error(error)
         }
    }
   
}

