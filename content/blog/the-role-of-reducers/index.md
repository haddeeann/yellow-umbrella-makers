---
title: Explain the Role of Reducers
date: '2022-01-18'
---
# Introduction: 
Redux is a predictable state container using JavaScript. Redux is used to manage, store, and update state in an application in a central location and with predictable rules. Learning the key concepts and terminology in Redux is important. Some of the key terms are state, actions, reducers, and store.

Reducers are functions that take information from at least two sources (objects or arrays), process the information and apply changes, and return a new object. How does this fit back into the Redux library? In Redux, the reducers role is to take in the state object and the action object and based on the action object make a new state based on the previous state and return it. So reducers in Redux perform the same function that the built in JavaScript reducer function performs. Redux reducers are similar to JavaScript reducers in what they do.

# Features: 
The reducers role in Redux is to reduce information from two sources, the state object and the action object and return a new state object to the application. 

To understand further it will help to discuss what application state and action objects are. Application state can be in the form of a plain JavaScript object or an array. It's that simple to start with. State can be either an array or an object. State contains the information within the application or information about the condition of application itself.

Actions are JavaScript objects. Actions have a type field and a payload field. The type field carries the type of action that occurred in the application. The payload field of the action object contains the data that has just changed in some way or is the 'data of interest'. That could mean that it's the data that is to be deleted or something else might need to be done with that particular piece of data.

Actions and state are the two objects that are acted upon in reducers.  

The reducers are functions that take the current state object and the action object as arguments. The reducer determines how to transform the data based on the action type. The action type describes the event that occurred in the application. 

The reducer creates a new object based on the previous state object and return the shiny new state object. The reducer can be thought of as an event listener that returns the new state based on the action described in the action object's type field.

There are rules to how reducers are to be used and it's an important part of the role of reducers.

First, reducers can never modify the current state. Every time a reducer gets two objects, it must return a NEW object based on the old state object. This is in part because objects are passed by reference in JavaScript. That means if the reducer changed the object it would be changed everywhere. And the application could no longer access the old state object. That would mean two things: unpredictable results within the state object and application, and 'time travel' with redux wouldn't be possible.

Another rule of reducers it that reducers need to be pure functions. That means that they are not allowed to change any data that is outside of the reducers. This rule eliminates side effects from causing difficult to track problems in an application. Examples of things that reducers are not allowed to do are saving files, Ajax requests, or modifying the DOM in the HTML document.

This contributes to the definition of the role of a reducer in an application. This limits the role of the reducers to taking in the two objects, performing the logic, and returning the new state object. This is an important part of the role. Limiting the role of the reducer this way eliminates many of the errors that would be caused by unintended side effects. It simplifies the code and is the intended usage pattern for Redux.

This idea and rule applies to the deeply nested data as well. So when making an application all of the state, even the deeply nested data needs to be a fresh, new object and a copy of the original data.

The reducers are all passed into the store. The store's purpose is in part to hold the state of the application and returns state to the application when it's requested. The store also receives and invokes the correct reducer, passing the state and action into the right reducer. 

In essence, the store is the glue in Redux that connects the UI (probably React) to all of the state and reducers. All of the UI gets state through the store. In turn, the store distributes all actions and state objects to the correct reducer. Once the reducer gets the state and action objects, its job is to return a new state object to the store. The store then keeps track of all of the state. It 'stores' the state. This all happens whenever an action is created and dispatched from the UI. 

## Examples: 
One of the easiest ways to create a new application with React and Redux included is to use the toolchain Create React App. Creating an application that includes Redux is fairly straightforward. The Create React App toolchain allows the use of templates when creating an application. The template for creating a React with Redux application uses the Redux Toolkit.

## Create React with Redux App

### Step 1: 
This template include React, Redux and plain JavaScript. To use the template, pass the template flag and template name into the create react app command when making the application. For making a React with Redux application using NPX the following command can be used. Open a terminal and use the following command to create the React app:

### React, Redux, and plain JavaScript template
npx create-react-app my-app --template redux

To name the application something other than 'my-app', simply write the different application name where 'my-app' is when the command is executed. Here are the files that get initially installed when using the Redux template:



### Step 2:

Move into the application folder, using the command for 'change directory' or 'cd into the folder':

cd my-app

If the application is named something other than 'my-app', then the command becomes:

cd `<name-of-app>`

### Step 3: 

Yarn or npm can be used to start the local server to run the application in the browser. To use yarn:

yarn start

Or to use npm:

npm run start

A browser window with the application running locally should start up when the above commands are run. 

## React with Redux Toolkit starter application

The starting point for the application is the index.js file. The main component of the application is the App.js file. The redux store is located in the store.js file. The counterSlice.js file contains a 'slice reducer'. 

Reducers are typically split into more than one reducer in applications. The 'root reducer' combines all of the reducers that get imported into the root reducer file. Then that root reducer would get passed off to the store. Redux recommends organizing the smaller 'slice reducers' to represent different sections of the application. Each of these reducers are called a 'slice' and the particular reducer for a feature of the application would be a 'slice reducer'.

In the sample app that gets created with NPX create-react-app command, the application has one reducer and it's a slice reducer for the Counter component. Before Redux Toolkit release, all of the reducers would need to be manually combined into a root reducer as shown above and then imported and passed into the store. 

In Redux Toolkit the boilerplate code of connecting all of the reducers into one has been eliminated. The React create app toolchain used to include Redux but now includes the Redux Toolkit and the technical approach to making an application has changed significantly. 

In Redux Toolkit, connecting the reducers together into a root reducer no longer has to be done manually. Instead a function called 'createSlice' is used to create a slice reducer. Redux then connects all of the slice reducers and completes validations on the reducers. Redux then passes off the reducer to the store. The underlying process remains the same in Redux Toolkit as in the previously used Redux.

# Syntax: 
Create React App redux template now uses the Redux Toolkit. The Create React App code uses the function createSlice() inside the counterSlice.js file to create and connect the reducer to the store. This is the slice reducer in the counterSlice.js file. This slice reducer uses the Redux Toolkit:

  import { createSlice } from '@reduxjs/toolkit';

  export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
      increment: (state) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.value += 1;
      },
      decrement: (state) => {
        state.value -= 1;
      },
      // Use the PayloadAction type to declare the contents of `action.payload`
      incrementByAmount: (state, action) => {
        state.value += action.payload;
      },
    },
    // The `extraReducers` field lets the slice handle actions defined elsewhere,
    // including actions generated by createAsyncThunk or in other slices.
    extraReducers: (builder) => {
      builder
        .addCase(incrementAsync.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(incrementAsync.fulfilled, (state, action) => {
          state.status = 'idle';
          state.value += action.payload;
        });
    },
  });

In the above example the state is directly modified even though the rule is that state may NEVER be directly modified. Why is that? The Redux Toolkit also adds validation checking for the reducers that are created with the createSlice function. Because of the validation checks that Redux Toolkit performs, mutating the state within the createSlice function is allowed and does not cause an error in the application.

Redux Toolkit uses a library called Immer for validating the reducers functions and the state after the createSlice function is called. The Immer library processes all incoming data (the reducer functions and the state) and uses that data to ensure that the original state is not mutated, but an updated state is returned. The new state that Immer gives back is based on the reducers that are passed into it.

Immer acts as a go between for all of the reducers created by the createSlice function. Immer ensures that the reducers don't actually mutate any state, ever. So the reducers created by calling createSlice function can use state changing and it won't result in error. 

When reducers actually get called the Immer library modifies and ensures that the proper state management techniques are used. Even for complex and deeply nested objects.

# Create A New Slice Reducer 

Step 1: Import createSlice from the Redux toolkit in the postsSlice.js file. Next, invoke the createSlice function and pass in an object where the keys are the name of the slice reducer, the initial state, and an object with the reducer functions. 

The reducers functions replace the switch statement that were previously used in Redux reducers that don't use Redux Toolkit. The createSlice function will automatically make the action creators for each function created in the reducers object.

For example, to turn the counter example app into a blog one of the steps might be to add posts. And in turn add a posts reducer. To add a posts slice reducer, create a file call postsSlice.js and add the following reducer:

### Javascript

  import { createSlice } from '@reduxjs/toolkit'

  const initialState = [
    { id: '1', title: 'Post About Counting', content: 'Math is fun to learn.' },
    { id: '2', title: 'A Post About Math', content: 'Things always add up.' }
  ]

  const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
      postAdded(state, action) {
        state.push(action.payload)
      }
    }
  })

  export const { postsAdded } = postsSlice.actions

  export default postsSlice.reducer

## Step 2: 
Then in the store you would import the new postsSlice reducer and add it to the store config. This would allow the store to use the reducer when the application goes to do something with the state of the app. This is the store.js file with the code to add in the new postsSlice reducer:

### Javascript

  import { configureStore } from '@reduxjs/toolkit';
  import counterReducer from '../features/counter/counterSlice';
  import postsReducer from '../features/counter/postsSlice'

  export const store = configureStore({
    reducer: {
      counter: counterReducer,
      posts: postsReducer,
    },
  });

## Step 3: 
The next step is to access the posts in the UI. To get the posts from the application state, utilize the useSelector function that is built into Redux. The new selector can be created in the postsSlice function and exported or, alternatively, state can be accessed directly from the component. This example will show how to add the new selector to the postsSlice file and exported.

In the postsSlice.js file, above the export default add the line:

export const selectPosts = (state) => state.posts

So the new postsSlice.js file looks like: 

### Javascript

  import { createSlice } from '@reduxjs/toolkit'

  const initialState = [
      { id: '1', title: 'Posts About Counting', content: 'Math is fun' },
      { id: '2', title: 'A Post About Math', content: 'Things always add up' }
  ]

  const postsSlice = createSlice({
      name: 'posts',
      initialState,
      reducers: {}
  })

  export const selectPosts = (state) => state.posts

  export default postsSlice.reducer

## Step 4: 
The easiest place to display the new posts is in the Counter component. The first step in changing the Counter.js file is to add an import statement for the new selector just made.

  import {
    selectPosts
  } from './postsSlice';

Next, the useSelector function needs to be imported into the file. In the example app, it's already imported at the top. The useSelector function allows access to all of state. To use just the posts, the data will be narrowed down to just posts when the useSelector is invoked in the next step.

import { useSelector, useDispatch } from 'react-redux';

The next part of modifying the Counter.js file is to create the selector and add the posts data from the application state. That is done by invoking the useSelector function from the Redux library and passing in the selector called 'selectPosts' as a parameter. The post selector is made in a very similar way that the count selector is made. Right below the count selector add the line:

const posts = useSelector(selectPosts);

Before the return statement, map over the results of getting the posts from the state and make a new DOM element:

  const renderedPosts = posts.map(post => {
    return (
      <article key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </article>
    );
  });

Now in the return statement add in a new div to display the results:

      <div className={styles.row}>
        <section>
            <h2>Posts</h2>
            {renderedPosts}
        </section>
      </div>

The Counter.js file will now look like:

### Javascript

  import React, { useState } from 'react';
  import { useSelector, useDispatch } from 'react-redux';
  import {
    decrement,
    increment,
    incrementByAmount,
    incrementAsync,
    incrementIfOdd,
    selectCount,
  } from './counterSlice';

  import {
    selectPosts
  } from './postsSlice';

  import styles from './Counter.module.css';

  export function Counter() {
    const count = useSelector(selectCount);
    const posts = useSelector(selectPosts);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState('2');

    const incrementValue = Number(incrementAmount) || 0;

    const renderedPosts = posts.map(post => {
      return (
        <article key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </article>
      );
    });

  console.log(posts);

  return (
    <div>
      <div className={styles.row}>
        <section>
            <h2>Posts</h2>
            {renderedPosts}
        </section>
      </div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}


The resulting application now contains the new slice reducer that has been added to the state, the store, and the UI. And so the new UI looks like this:



## Conclusion: 
Redux reducers take in information, process it, and return a new object just like the built in reducer function in JavaScript. Knowing more about how state, actions, and stores work together help explain the role that reducers play in Redux data management.