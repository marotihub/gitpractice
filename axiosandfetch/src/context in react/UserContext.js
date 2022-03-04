import React, { createContext, createElement } from 'react'

const context= createContext();
const context1= createContext()
const UserProvider= context.Provider;
const UserConsumer= context.Consumer;
const UserProvider1= context1.Provider;
const UserConsumer1= context1.Consumer;

export{UserProvider, UserConsumer, UserProvider1, UserConsumer1}