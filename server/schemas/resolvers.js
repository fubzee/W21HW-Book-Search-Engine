const { AuthenticationError } = require('apollo-server-express');
const { User } = require ('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        user: async (parent, { username }) => {
            return await User.findOne( { username: username })
        }
    },
    Mutation: {
        addUser: async (parent , { username, email, password} ) => {
            return User.create({ username, email, password});
        },
        saveBook: async (parent , {username, savedBooks }) => {
            const user = await User.findOneAndUpdate( 
                { _id:  ID },
                { 
                    $addToSet: { savedBooks: savedBooks }, 
                },
                { 
                    new: true, 
                    runValidators: true,
                }
            );
            const token = signToken(user);
            return { token,user };
        },        
        login: async (parent, {username, password}) => {
            const user = await User.findOne( {username} );
            if (!user) {
                throw new AuthenticationError('Something went wrong')
            }

            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Something went wrong!')
            }
        }
    },
};
module.exports = resolvers;