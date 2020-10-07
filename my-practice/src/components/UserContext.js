import React from 'react';
//if we pass the parameter to the React.CreateContext("Anything")
//it will be passed as default value in provider 
const UserContext = React.createContext("YourDailyTech");
//const UserContext = React.createContext();

//Provider & consumer 
//User provider is responsible for providing a value to all decendent components

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export {UserProvider,UserConsumer}
export default UserContext;