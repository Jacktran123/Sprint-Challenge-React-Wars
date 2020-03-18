# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.
    React allows us to create large scale application. It helps the handle the amount of work that the DOM has to handle on its own. For example, useState helps user declare initial data and change it at ease. 
       

2. What does it mean to think in react?
  To think in React, you will have to think in components. React required us to look at the UI design and be able to break it into components hierarchy. After all, coding in React all come down to being able to break a complex UI into smaller pieces and later assemble them all together.

   Using the single responsibility principle, each component should only handle one job, if it is doing too many jobs at the same time, it should be decompose into smaller components. 

1. Describe state.
   In React language, state are components which subjected to change.

1. Describe props.
“Props” is a special keyword in React, which stands for properties and is being used for passing data from one component to another.
But the important part here is that data with props are being passed in a uni-directional flow. (one way from parent to child)

1. What are side effects, and how do you sync effects in a React component to state or prop changes?
   A side effect is a function that try to manipulate data outside of its scope. To sync up side effect with state or props, you can pass state or props as a second parameter to the useEffect method. 