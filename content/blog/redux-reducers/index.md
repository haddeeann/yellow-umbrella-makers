---
title: Basic Architecture of Redux
date: '2021-12-31'
---
## Introduction
Some of the main topics in Redux are actions, reducers, the store, and state. What are each of these things separately and how do they interact?

## State
State can be thought of as the data that is in the application at any one moment in time. It's the data of the application and the current condition of the application. State of the application can also be thought of as the word for condition of the application. It's the same kind of meaning that could be said about any object. A person could say that the state of their car was dirty. Or clean.

That is what state means as a concept. But what is state when it comes to Redux? With Redux, an object is made and all the information that needs to be stored in a session is put into that object. It's the state object. When a web component needs to be made the initial value of the state is set up. And whenever state is updated, it's always done through a special 'useState' method.

The reason state is ONLY updated with special methods in Redux is because whenever Redux updates the state object, under the hood it's actually creating a new state object and returning. Redux never directly updates the state object. With every change it makes a new object with the old state and the changes needed into a new object.

This allows something called time travel with Redux. This process simply uses existing Redux dev tools to be able to cycle through all the previous state objects.

## Actions
Actions are an object that contain key values that describe the actions and events that take place in the application. Whenver something happens in an application that needs to modify the state of the application then an action object is created. That action object should contain two keys: payload and type. The type key should contain a string that describes the type of action that just occurred. 

The payload value should contain the 'data of interest'. Data of interest is any data that needs to be changed in some way. Often when the state of an application needs to be changed then a type of C.R.U.D. activity needs to take place. The payload will contain any of the data for the transaction.

When an action is created, it's then 'dispatched'. That means that it is sent to the store.

## Store
The store is a function that acts as a repository for the state of the application. It's a central location where the data can be retrieved from. If the application needs to update or retrieve state, then it will fetch it from the store or send the store an action that will be used to update the overall data of the application.

Each time an action is dispatched, it receives the state and actions objects as parameters. The store then acts as a director to send the actions and objects to the correct reducer. The logic that determines which reducers is used is directed by the developer and based on the type key value pair in the action object.

## Reducer
The reduce method in VanillaJS is a built function on the Array object. It's a method performed on arrays that take a function in as an argument. The functions job is to take the many values in the array and reduce it to one value that gets returned. The function that gets passed into the reduce method is a reducer.

A reducer takes many values and 'reduces' it to a single value.

That is where Redux reducers get their name. Reducers perform a similar function. The reducers job in Redux is to receive an action object and a state object. And according the the functions within the reducer return a new modified version of the state object.

The reducer uses the type of action on the type key value pair to determine how to process the data. It then uses the data received on the action payload and the data on the state object and creates a new state and returns the new state to the store.

## Conclusion
And that describes the process that the data flows through in a Redux application. Examining it that way, each of the major pieces that make up a Redux application can be broke down to it's simplest role.

