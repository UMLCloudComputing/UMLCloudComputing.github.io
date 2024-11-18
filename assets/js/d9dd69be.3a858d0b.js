"use strict";(self.webpackChunkumlcloudcomputing=self.webpackChunkumlcloudcomputing||[]).push([[6838],{6831:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"activities/PhotoSky/Part 2: Frontend Development and Integration/introduction-to-react-and-material-ui","title":"introduction-to-react-and-material-ui","description":"\x3c!--","source":"@site/docs/activities/PhotoSky/Part 2: Frontend Development and Integration/1-introduction-to-react-and-material-ui.md","sourceDirName":"activities/PhotoSky/Part 2: Frontend Development and Integration","slug":"/activities/part-2-frontend-development-and-integration/1-introduction-to-react-and-material-ui","permalink":"/docs/activities/part-2-frontend-development-and-integration/1-introduction-to-react-and-material-ui","draft":false,"unlisted":false,"editUrl":"https://github.com/UMLCloudComputing/UMLCloudComputing.github.io/edit/main/docs/activities/PhotoSky/Part 2: Frontend Development and Integration/1-introduction-to-react-and-material-ui.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"slug":"/activities/part-2-frontend-development-and-integration/1-introduction-to-react-and-material-ui"},"sidebar":"activitiesSidebar","previous":{"title":"Part 2: Frontend Development and Integration","permalink":"/docs/part-2-frontend-development-and-integration"},"next":{"title":"Designing the User Interface","permalink":"/docs/activities/part-2-frontend-development-and-integration/2-designing-user-interface"}}');var a=n(4848),o=n(8453);const r={sidebar_position:1,slug:"/activities/part-2-frontend-development-and-integration/1-introduction-to-react-and-material-ui"},s="Introduction to React, Material-UI, and Additional Libraries",l={},c=[{value:"What is React?",id:"what-is-react",level:2},{value:"What is Material-UI?",id:"what-is-material-ui",level:2},{value:"Additional Libraries",id:"additional-libraries",level:2},{value:"Axios",id:"axios",level:3},{value:"Notistack",id:"notistack",level:3},{value:"@capacitor/camera",id:"capacitorcamera",level:3},{value:"@emotion/react and @emotion/styled",id:"emotionreact-and-emotionstyled",level:3},{value:"Why These Technologies for PhotoSky?",id:"why-these-technologies-for-photosky",level:2},{value:"Setting Up Our React Project",id:"setting-up-our-react-project",level:2},{value:"Project Dependencies",id:"project-dependencies",level:2},{value:"A Simple React and Material-UI Example",id:"a-simple-react-and-material-ui-example",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.header,{children:(0,a.jsx)(i.h1,{id:"introduction-to-react-material-ui-and-additional-libraries",children:"Introduction to React, Material-UI, and Additional Libraries"})}),"\n",(0,a.jsxs)(i.p,{children:["Welcome to Part 2 of the PhotoSky tutorial! In this section, we'll dive into the frontend development of our application using ",(0,a.jsx)(i.a,{href:"https://react.dev",children:"React"}),", ",(0,a.jsx)(i.a,{href:"https://mui.com/material-ui",children:"Material-UI"}),", and several other powerful libraries. These tools will help us create a responsive, user-friendly interface for our cloud-based image management system."]}),"\n",(0,a.jsx)(i.h2,{id:"what-is-react",children:"What is React?"}),"\n",(0,a.jsx)(i.p,{children:"React is a popular JavaScript library for building user interfaces. Developed and maintained by Facebook, React allows developers to create reusable UI components that efficiently update and render as data changes."}),"\n",(0,a.jsx)(i.p,{children:"Key features of React include:"}),"\n",(0,a.jsxs)(i.ol,{children:["\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Component-Based Architecture"}),": Build encapsulated components that manage their own state."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Virtual DOM"}),": Optimizes rendering performance by minimizing direct manipulation of the DOM."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"JSX"}),": A syntax extension that allows you to write HTML-like code in your JavaScript."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Unidirectional Data Flow"}),": Makes code more predictable and easier to debug."]}),"\n"]}),"\n",(0,a.jsx)(i.h2,{id:"what-is-material-ui",children:"What is Material-UI?"}),"\n",(0,a.jsx)(i.p,{children:"Material-UI is a popular React UI framework that implements Google's Material Design. It provides a set of pre-built React components that you can use to build a consistent, attractive, and responsive user interface quickly."}),"\n",(0,a.jsx)(i.p,{children:"Key features of Material-UI include:"}),"\n",(0,a.jsxs)(i.ol,{children:["\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Ready-to-use Components"}),": A wide range of pre-styled components like buttons, cards, and navigation bars."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Customization"}),": Easily override default styles to match your brand."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Responsive Design"}),": Built-in responsiveness for various screen sizes."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Theming"}),": Comprehensive theming support for creating coherent designs."]}),"\n"]}),"\n",(0,a.jsx)(i.h2,{id:"additional-libraries",children:"Additional Libraries"}),"\n",(0,a.jsx)(i.p,{children:"In addition to React and Material-UI, our PhotoSky application uses several other libraries to enhance its functionality:"}),"\n",(0,a.jsx)(i.h3,{id:"axios",children:(0,a.jsx)(i.a,{href:"https://axios-http.com/",children:"Axios"})}),"\n",(0,a.jsx)(i.p,{children:"Axios is a popular, promise-based HTTP client for the browser and Node.js. We use it to make API calls to our backend services."}),"\n",(0,a.jsx)(i.h3,{id:"notistack",children:(0,a.jsx)(i.a,{href:"https://notistack.com/",children:"Notistack"})}),"\n",(0,a.jsx)(i.p,{children:"Notistack is a notification library for React applications. It provides an easy way to display snackbars (brief messages) in our app, which we use for user feedback on actions like image uploads or deletions."}),"\n",(0,a.jsx)(i.h3,{id:"capacitorcamera",children:(0,a.jsx)(i.a,{href:"https://capacitorjs.com/docs/apis/camera",children:"@capacitor/camera"})}),"\n",(0,a.jsx)(i.p,{children:"This library, part of the Capacitor framework, allows us to access the device's camera functionality. We use it to enable users to take photos directly within our app."}),"\n",(0,a.jsx)(i.h3,{id:"emotionreact-and-emotionstyled",children:"@emotion/react and @emotion/styled"}),"\n",(0,a.jsx)(i.p,{children:"These libraries provide efficient CSS-in-JS solutions, allowing us to write CSS directly in our JavaScript files. They work seamlessly with Material-UI for advanced styling capabilities."}),"\n",(0,a.jsx)(i.h2,{id:"why-these-technologies-for-photosky",children:"Why These Technologies for PhotoSky?"}),"\n",(0,a.jsx)(i.p,{children:"For our PhotoSky application, this combination of technologies offers several advantages:"}),"\n",(0,a.jsxs)(i.ol,{children:["\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Efficient Updates"}),": React's efficient rendering system is perfect for our image gallery, which will need to update as images are added or removed."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Component Reusability"}),": We can create reusable components for image cards, upload buttons, etc."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Responsive Design"}),": Material-UI's responsive components ensure our app looks great on both desktop and mobile devices."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Consistent Styling"}),": Material-UI provides a cohesive look and feel across our application with minimal custom CSS."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Enhanced User Experience"}),": Libraries like Notistack allow us to provide immediate feedback to users, improving the overall user experience."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Cross-Platform Compatibility"}),": Capacitor enables us to use native device features like the camera while maintaining a single codebase."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Efficient API Communication"}),": Axios simplifies our API calls and error handling."]}),"\n"]}),"\n",(0,a.jsx)(i.h2,{id:"setting-up-our-react-project",children:"Setting Up Our React Project"}),"\n",(0,a.jsx)(i.p,{children:"Our PhotoSky project is already set up with Create React App, which provides a solid foundation for React development. Let's take a look at the key files in our project:"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{children:"photosky/\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 public/\n\u2502   \u2514\u2500\u2500 index.html\n\u2514\u2500\u2500 src/\n    \u251c\u2500\u2500 App.js\n    \u2514\u2500\u2500 index.js\n"})}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.code,{children:"package.json"}),": Lists our project dependencies and scripts."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.code,{children:"public/index.html"}),": The HTML template for our app."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.code,{children:"src/App.js"}),": The main React component of our application."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.code,{children:"src/index.js"}),": The entry point of our React app."]}),"\n"]}),"\n",(0,a.jsx)(i.h2,{id:"project-dependencies",children:"Project Dependencies"}),"\n",(0,a.jsxs)(i.p,{children:["You can see the main dependencies in the ",(0,a.jsx)(i.code,{children:"package.json"})," file:"]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-json",children:'"dependencies": {\n  "@capacitor/android": "^6.1.2",\n  "@capacitor/camera": "^6.0.2",\n  "@capacitor/core": "^6.1.2",\n  "@emotion/react": "^11.13.3",\n  "@emotion/styled": "^11.13.0",\n  "@mui/icons-material": "^6.0.1",\n  "@mui/material": "^6.0.1",\n  "axios": "^1.7.7",\n  "notistack": "^3.0.1",\n  "react": "^18.3.1",\n  "react-dom": "^18.3.1",\n  // ... other dependencies\n}\n'})}),"\n",(0,a.jsx)(i.p,{children:"These packages provide the core functionality, UI components, and additional features we'll be using in our application."}),"\n",(0,a.jsx)(i.h2,{id:"a-simple-react-and-material-ui-example",children:"A Simple React and Material-UI Example"}),"\n",(0,a.jsx)(i.p,{children:"Let's look at a basic example of how we'll use React and Material-UI in our PhotoSky app. This is a simplified version of what we'll be building:"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-jsx",children:"import React from 'react';\nimport { AppBar, Toolbar, Typography, Button, ThemeProvider, createTheme, CssBaseline } from '@mui/material';\nimport CloudUploadIcon from '@mui/icons-material/CloudUpload';\nimport { SnackbarProvider, useSnackbar } from 'notistack';\n\nconst theme = createTheme({\n  // Theme configuration\n});\n\nfunction App() {\n  const { enqueueSnackbar } = useSnackbar();\n\n  const handleUpload = () => {\n    // Upload logic here\n    enqueueSnackbar('Image uploaded successfully!', { variant: 'success' });\n  };\n\n  return (\n    <ThemeProvider theme={theme}>\n      <CssBaseline />\n      <AppBar position=\"static\">\n        <Toolbar>\n          <Typography variant=\"h6\" component=\"div\" sx={{ flexGrow: 1 }}>\n            PhotoSky\n          </Typography>\n          <Button color=\"inherit\" startIcon={<CloudUploadIcon />} onClick={handleUpload}>\n            Upload\n          </Button>\n        </Toolbar>\n      </AppBar>\n      {/* More components will go here */}\n    </ThemeProvider>\n  );\n}\n\nexport default function AppWrapper() {\n  return (\n    <SnackbarProvider maxSnack={3}>\n      <App />\n    </SnackbarProvider>\n  );\n}\n"})}),"\n",(0,a.jsxs)(i.p,{children:["In this example, we're using Material-UI's ",(0,a.jsx)(i.a,{href:"https://mui.com/material-ui/react-app-bar/",children:"AppBar"}),", ",(0,a.jsx)(i.a,{href:"https://mui.com/material-ui/api/toolbar/",children:"Toolbar"}),", ",(0,a.jsx)(i.a,{href:"https://mui.com/material-ui/react-typography/",children:"Typography"}),", and ",(0,a.jsx)(i.a,{href:"https://mui.com/material-ui/react-button",children:"Button"})," components to create a simple header for our application. We're also using the ",(0,a.jsx)(i.a,{href:"https://mui.com/material-ui/customization/theming/#theme-provider",children:"ThemeProvider"})," for consistent theming, ",(0,a.jsx)(i.a,{href:"https://mui.com/material-ui/react-css-baseline/",children:"CssBaseline"})," for baseline styles, and ",(0,a.jsx)(i.a,{href:"https://notistack.com/api-reference",children:"SnackbarProvider"})," from notistack for notifications."]}),"\n",(0,a.jsx)(i.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,a.jsx)(i.p,{children:"React, Material-UI, and our additional libraries provide a powerful combination for building the frontend of our PhotoSky application. React's component-based architecture will help us create a dynamic and efficient user interface, while Material-UI will ensure our app looks great and follows modern design principles. Libraries like Axios, Notistack, and Capacitor's camera module will enable us to create a fully-featured, responsive, and user-friendly image management system."}),"\n",(0,a.jsx)(i.p,{children:"In the next sections, we'll dive deeper into building specific components of our PhotoSky application, including the image gallery, upload functionality, and more. We'll see how all these technologies come together to create a robust cloud-based image management system."})]})}function p(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>s});var t=n(6540);const a={},o=t.createContext(a);function r(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);