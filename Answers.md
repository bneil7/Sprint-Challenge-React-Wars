# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.
//
    React JS is a JavaScript library created by the Facebook Dev Team, and it is used to create user interface applications. It allows developers to build reusable components that can accept variable data and perform functions that render to the DOM. 
//
2. Describe component state.
//
    Component state is how the component is described by the data it contains. Component state can be changed (set) by passing variable data into it via the `useState()` function. 
//
3. Describe props.
//
    Props (short for 'properties') are objects that can be created with other objects and arrays and used as variables for arguments inside of functions. 
//
4. What are side effects, and how do you sync effects in a React component to changes of certain state or props?
//
    Side effects are when the State of the component is changed.
    Passing a callback function into `useEffect()` (the Effect Hook) to apply the changes made to the DOM each time the DOM is re-rendered. The side effects are seen after the app function runs each time with different component states. 
//