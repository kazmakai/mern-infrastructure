// Import all named exports attached to a userAPI object
// This syntax an be helpful documenting where the methods come from

import * as usersAPI from './users-api'

export async function signUp(userData) {
    // Delefate the network request code to the users-api.js API module
    // which will ultimately return a JSON Web Token (JWT)
    const token = await usersAPI.signUp(userData);
    // Persist the "token"
    localStorage.setItem('token', token);
    return token;
}