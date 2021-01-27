const axios = require('axios');

const resolvers = {
    Query: {

        async categories() {
            try {
                const response = await axios.get('https://api.chucknorris.io/jokes/categories')
                const { data } = response
                return data
            } catch (error) {
                throw new Error(error)
            }
        },

        async joke(root:any, args:any ) {
            try {
               const response = await axios.get(`https://api.chucknorris.io/jokes/random?category=${args.category}`)
               return response.data
            } catch (error) {
                console.log(error, '???')
                throw new Error(error)
            }
        }

    }

};

export default resolvers;


