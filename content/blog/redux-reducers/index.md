---
title: What Are Redux Reducers?
date: '2021-12-23'
---
There seems to be some confusion around Reducers in Redux. When developers are first learning Redux it seems like magic. But after diving in and learning, you'll discover that Redux is simply good programming practices that are enforced through rules and programming restraints.

Let's start with what reducers are in general. In JavaScript there is a built in language implementation, the Array.prototype.reducer function. The reducer function takes in an array of values, performs the function that is passed into it as an argument and returns a single value. Reducers take in an array of values and produce a single result, thus 'reducing' the array to a single value.

What does that have to do with Redux reducers? Well, some people seem to think that the Redux library is taking the values and some place in the background is performing some kind of reducing logic. 

I can understand the temptation to think that. What Redux actually does under the hood is mysterious when you first begin using the library. But no. Redux isn't doing any reducing magic in the library itself. 

Reducers are called that because the programming is writing a function that performs that same time of role that the built in Array.prototype.reducer function does in the JavaScript library. In the JavaScript library, reducers take in an array of values and produce a single output based on the function created by the programmer and passed into the reducer.

In Redux, reducers take in two objects and process the objects according to the logic written by the programmer. The reducer then returns a SINGLE VALUE. See, two objects get passed in, one object gets returned. The reducer in Redux is behaving like a built in reducer in JavaScript.

In Redux the two objects passed in are the state object and the action object. The state object is the state of the application in a plain JavaScript object form. And the action object is a plain JavaScript object where there is a type key and a payload key. The type key represents the type of action or event that took place in th application. And the payload represents the value of interest that the application needs to act on. That could be something that needs to added, updated, or deleted. 

The reducer in Redux then returns a brand new object that represents the state after any modifications needed to the previous state. Keep in mind, that with proper state management that the previous state is NEVER modified directly. Instead a new object is created based on the logic of how the previous state needs to change.

That brand new object is returned as the single value that a reducer returns.