(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{62:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return l}));var n=a(2),r=a(6),o=(a(0),a(81)),i={id:"getting-started",title:"Getting Started with Redux",description:"Introduction > Getting Started: Resources to get started learning and using Redux",hide_title:!0},s={unversionedId:"introduction/getting-started",id:"introduction/getting-started",isDocsHomePage:!1,title:"Getting Started with Redux",description:"Introduction > Getting Started: Resources to get started learning and using Redux",source:"@site/../docs/introduction/GettingStarted.md",slug:"/introduction/getting-started",permalink:"/introduction/getting-started",version:"current",sidebar:"docs",next:{title:"Installation",permalink:"/introduction/installation"}},c=[{value:"Installation",id:"installation",children:[{value:"Redux Toolkit",id:"redux-toolkit",children:[]},{value:"Create a React Redux App",id:"create-a-react-redux-app",children:[]},{value:"Redux Core",id:"redux-core",children:[]}]},{value:"Basic Example",id:"basic-example",children:[{value:"Redux Toolkit Example",id:"redux-toolkit-example",children:[]}]},{value:"Learn Redux",id:"learn-redux",children:[{value:"Redux Essentials Tutorial",id:"redux-essentials-tutorial",children:[]},{value:"Additional Tutorials",id:"additional-tutorials",children:[]}]},{value:"Help and Discussion",id:"help-and-discussion",children:[]},{value:"Should You Use Redux?",id:"should-you-use-redux",children:[]}],u={rightToc:c};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"getting-started-with-redux"},"Getting Started with Redux"),Object(o.b)("p",null,"Redux is a predictable state container for JavaScript apps."),Object(o.b)("p",null,"It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/reduxjs/redux-devtools"}),"live code editing combined with a time traveling debugger"),"."),Object(o.b)("p",null,"You can use Redux together with ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactjs.org"}),"React"),", or with any other view library. It is tiny (2kB, including dependencies), but has a large ecosystem of addons available."),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("h3",{id:"redux-toolkit"},"Redux Toolkit"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://redux-toolkit.js.org"}),Object(o.b)("strong",{parentName:"a"},"Redux Toolkit"))," is our official recommended approach for writing Redux logic. It wraps around the Redux core, and contains packages and functions that we think are essential for building a Redux app. Redux Toolkit builds in our suggested best practices, simplifies most Redux tasks, prevents common mistakes, and makes it easier to write Redux applications."),Object(o.b)("p",null,"RTK includes utilities that help simplify many common use cases, including ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://redux-toolkit.js.org/api/configureStore"}),"store setup"),",\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://redux-toolkit.js.org/api/createreducer"}),"creating reducers and writing immutable update logic"),",\nand even ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://redux-toolkit.js.org/api/createslice"}),'creating entire "slices" of state at once'),"."),Object(o.b)("p",null,"Whether you're a brand new Redux user setting up your first project, or an experienced user who wants to\nsimplify an existing application, ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"https://redux-toolkit.js.org/"}),"Redux Toolkit"))," can help you\nmake your Redux code better."),Object(o.b)("p",null,"Redux Toolkit is available as a package on NPM for use with a module bundler or in a Node application:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# NPM\nnpm install @reduxjs/toolkit\n\n# Yarn\nyarn add @reduxjs/toolkit\n")),Object(o.b)("h3",{id:"create-a-react-redux-app"},"Create a React Redux App"),Object(o.b)("p",null,"The recommended way to start new apps with React and Redux is by using the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/reduxjs/cra-template-redux"}),"official Redux+JS template")," for ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebook/create-react-app"}),"Create React App"),", which takes advantage of ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"https://redux-toolkit.js.org/"}),"Redux Toolkit"))," and React Redux's integration with React components."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"npx create-react-app my-app --template redux\n")),Object(o.b)("h3",{id:"redux-core"},"Redux Core"),Object(o.b)("p",null,"The Redux core library is available as a package on NPM for use with a module bundler or in a Node application:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# NPM\nnpm install redux\n\n# Yarn\nyarn add redux\n")),Object(o.b)("p",null,"It is also available as a precompiled UMD package that defines a ",Object(o.b)("inlineCode",{parentName:"p"},"window.Redux")," global variable. The UMD package can be used as a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://unpkg.com/redux/dist/redux.js"}),Object(o.b)("inlineCode",{parentName:"a"},"<script>")," tag")," directly."),Object(o.b)("p",null,"For more details, see the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/introduction/installation"}),"Installation")," page."),Object(o.b)("h2",{id:"basic-example"},"Basic Example"),Object(o.b)("p",null,"The whole global state of your app is stored in an object tree inside a single ",Object(o.b)("em",{parentName:"p"},"store"),".\nThe only way to change the state tree is to create an ",Object(o.b)("em",{parentName:"p"},"action"),", an object describing what happened, and ",Object(o.b)("em",{parentName:"p"},"dispatch")," it to the store.\nTo specify how state gets updated in response to an action, you write pure ",Object(o.b)("em",{parentName:"p"},"reducer")," functions that calculate a new state based on the old state and the action."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { createStore } from 'redux'\n\n/**\n * This is a reducer - a function that takes a current state value and an\n * action object describing \"what happened\", and returns a new state value.\n * A reducer's function signature is: (state, action) => newState\n *\n * The Redux state should contain only plain JS objects, arrays, and primitives.\n * The root state value is usually an object.  It's important that you should\n * not mutate the state object, but return a new object if the state changes.\n *\n * You can use any conditional logic you want in a reducer. In this example,\n * we use a switch statement, but it's not required.\n */\nfunction counterReducer(state = { value: 0 }, action) {\n  switch (action.type) {\n    case 'counter/incremented':\n      return { value: state.value + 1 }\n    case 'counter/decremented':\n      return { value: state.value - 1 }\n    default:\n      return state\n  }\n}\n\n// Create a Redux store holding the state of your app.\n// Its API is { subscribe, dispatch, getState }.\nlet store = createStore(counterReducer)\n\n// You can use subscribe() to update the UI in response to state changes.\n// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.\n// There may be additional use cases where it's helpful to subscribe as well.\n\nstore.subscribe(() => console.log(store.getState()))\n\n// The only way to mutate the internal state is to dispatch an action.\n// The actions can be serialized, logged or stored and later replayed.\nstore.dispatch({ type: 'counter/incremented' })\n// {value: 1}\nstore.dispatch({ type: 'counter/incremented' })\n// {value: 2}\nstore.dispatch({ type: 'counter/decremented' })\n// {value: 1}\n")),Object(o.b)("p",null,"Instead of mutating the state directly, you specify the mutations you want to happen with plain objects called ",Object(o.b)("em",{parentName:"p"},"actions"),". Then you write a special function called a ",Object(o.b)("em",{parentName:"p"},"reducer")," to decide how every action transforms the entire application's state."),Object(o.b)("p",null,"In a typical Redux app, there is just a single store with a single root reducing function. As your app grows, you split the root reducer into smaller reducers independently operating on the different parts of the state tree. This is exactly like how there is just one root component in a React app, but it is composed out of many small components."),Object(o.b)("p",null,"This architecture might seem like a lot for a counter app, but the beauty of this pattern is how well it scales to large and complex apps. It also enables very powerful developer tools, because it is possible to trace every mutation to the action that caused it. You can record user sessions and reproduce them just by replaying every action."),Object(o.b)("h3",{id:"redux-toolkit-example"},"Redux Toolkit Example"),Object(o.b)("p",null,"Redux Toolkit simplifies the process of writing Redux logic and setting up the store. With Redux Toolkit, that same logic looks like:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { createSlice, configureStore } from '@reduxjs/toolkit'\n\nconst counterSlice = createSlice({\n  name: 'counter',\n  initialState: {\n    value: 0\n  },\n  reducers: {\n    incremented: state => {\n      // Redux Toolkit allows us to write \"mutating\" logic in reducers. It\n      // doesn't actually mutate the state because it uses the Immer library,\n      // which detects changes to a \"draft state\" and produces a brand new\n      // immutable state based off those changes\n      state.value += 1\n    },\n    decremented: state => {\n      state.value -= 1\n    }\n  }\n})\n\nexport const { incremented, decremented } = counterSlice.actions\n\nconst store = configureStore({\n  reducer: counterSlice.reducer\n})\n\n// Can still subscribe to the store\nstore.subscribe(() => console.log(store.getState()))\n\n// Still pass action objects to `dispatch`, but they're created for us\nstore.dispatch(incremented())\n// {value: 1}\nstore.dispatch(incremented())\n// {value: 2}\nstore.dispatch(decremented())\n// {value: 1}\n")),Object(o.b)("p",null,"Redux Toolkit allows us to write shorter logic that's easier to read, while still following the same Redux behavior and data flow."),Object(o.b)("h2",{id:"learn-redux"},"Learn Redux"),Object(o.b)("p",null,"We have a variety of resources available to help you learn Redux."),Object(o.b)("h3",{id:"redux-essentials-tutorial"},"Redux Essentials Tutorial"),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/tutorials/flutter/essentials/part-1-overview-concepts"}),Object(o.b)("strong",{parentName:"a"},"Redux Essentials tutorial")),' is a "top-down" tutorial that teaches "how to use Redux the right way", using our latest recommended APIs and best practices. We recommend starting there.'),Object(o.b)("h3",{id:"additional-tutorials"},"Additional Tutorials"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The Redux repository contains several example projects demonstrating various aspects of how to use Redux. Almost all examples have a corresponding CodeSandbox sandbox. This is an interactive version of the code that you can play with online. See the complete list of examples in the."),Object(o.b)("li",{parentName:"ul"},"Redux creator Dan Abramov's ",Object(o.b)("strong",{parentName:"li"},"free ",Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"https://egghead.io/series/getting-started-with-redux"}),'"Getting Started with Redux" video series'))," and ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"https://egghead.io/courses/building-react-applications-with-idiomatic-redux"}),"Building React Applications with Idiomatic Redux"))," video courses on Egghead.io"),Object(o.b)("li",{parentName:"ul"},"Redux maintainer Mark Erikson's ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"https://blog.isquaredsoftware.com/2018/03/presentation-reactathon-redux-fundamentals/"}),'"Redux Fundamentals" conference talk'))," and ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://blog.isquaredsoftware.com/2018/06/redux-fundamentals-workshop-slides/"}),Object(o.b)("strong",{parentName:"a"},'"Redux Fundamentals" workshop slides'))),Object(o.b)("li",{parentName:"ul"},"Dave Ceddia's post ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://daveceddia.com/redux-tutorial/"}),Object(o.b)("strong",{parentName:"a"},"A Complete React Redux Tutorial for Beginners")))),Object(o.b)("h2",{id:"help-and-discussion"},"Help and Discussion"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"https://discord.gg/0ZcbPKXt5bZ6au5t"}),"#redux channel"))," of the ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"https://www.reactiflux.com"}),"Reactiflux Discord community"))," is our official resource for all questions related to learning and using Redux. Reactiflux is a great place to hang out, ask questions, and learn - come join us!"),Object(o.b)("p",null,"You can also ask questions on ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://stackoverflow.com"}),"Stack Overflow")," using the ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"https://stackoverflow.com/questions/tagged/redux"}),"#redux tag")),"."),Object(o.b)("p",null,"If you have a bug report or need to leave other feedback, ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/reduxjs/redux"}),"please file an issue on the Github repo")),Object(o.b)("h2",{id:"should-you-use-redux"},"Should You Use Redux?"),Object(o.b)("p",null,"Redux is a valuable tool for organizing your state, but you should also consider whether it's appropriate for your situation. ",Object(o.b)("strong",{parentName:"p"},"Don't use Redux just because someone said you should - take some time to understand the potential benefits and tradeoffs of using it"),"."),Object(o.b)("p",null,"Here are some suggestions on when it makes sense to use Redux:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You have reasonable amounts of data changing over time"),Object(o.b)("li",{parentName:"ul"},"You need a single source of truth for your state"),Object(o.b)("li",{parentName:"ul"},"You find that keeping all your state in a top-level component is no longer sufficient")))}l.isMDXComponent=!0}}]);