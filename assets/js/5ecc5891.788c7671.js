"use strict";(self.webpackChunkumlcloudcomputing=self.webpackChunkumlcloudcomputing||[]).push([[1810],{5583:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var t=r(4848),i=r(8453);const s={},a="The C Language",o={id:"resources/UML Class Resources/COMP.1010 - Computing I/Concepts Explained/The C Language",title:"The C Language",description:"The legend and horror that is the C language",source:"@site/docs/resources/UML Class Resources/COMP.1010 - Computing I/Concepts Explained/The C Language.mdx",sourceDirName:"resources/UML Class Resources/COMP.1010 - Computing I/Concepts Explained",slug:"/resources/UML Class Resources/COMP.1010 - Computing I/Concepts Explained/The C Language",permalink:"/docs/resources/UML Class Resources/COMP.1010 - Computing I/Concepts Explained/The C Language",draft:!1,unlisted:!1,editUrl:"https://github.com/UMLCloudComputing/UMLCloudComputing.github.io/edit/main/docs/resources/UML Class Resources/COMP.1010 - Computing I/Concepts Explained/The C Language.mdx",tags:[],version:"current",frontMatter:{},sidebar:"resourcesSidebar",previous:{title:"About Course",permalink:"/docs/resources/comp.1010/about"},next:{title:"Example",permalink:"/docs/resources/UML Class Resources/COMP.1010 - Computing I/Practice Exercises/Example"}},c={},d=[{value:"The legend and horror that is the C language",id:"the-legend-and-horror-that-is-the-c-language",level:3},{value:"Basic Syntax and Structure",id:"basic-syntax-and-structure",level:2},{value:"Headers",id:"headers",level:3},{value:"Function Naming Scheme",id:"function-naming-scheme",level:3},{value:"Return Types",id:"return-types",level:3},{value:"Syntax",id:"syntax",level:3},{value:"Control Structures",id:"control-structures",level:2},{value:"Functions",id:"functions",level:2},{value:"Pointers",id:"pointers",level:2},{value:"Arrays and Strings",id:"arrays-and-strings",level:2},{value:"Structures and Unions",id:"structures-and-unions",level:2},{value:"File Handling",id:"file-handling",level:2},{value:"Memory Management",id:"memory-management",level:2}];function l(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"the-c-language",children:"The C Language"})}),"\n",(0,t.jsx)(n.h3,{id:"the-legend-and-horror-that-is-the-c-language",children:"The legend and horror that is the C language"}),"\n",(0,t.jsxs)(n.p,{children:["The C programming language is a general-purpose programming language created by Dennis Ritchie in the 1970s at Bell Labs.\nIt became highly influential, particularly in the development of operating systems (notably UNIX), device drivers, kernels,\nand more. C has also inspired the creation of many modern programming languages, such as Python, C++ (",(0,t.jsx)(n.em,{children:"C with classes"}),"), and Java."]}),"\n",(0,t.jsx)(n.p,{children:"C is widely used in various computing environments, ranging from supercomputers to microcontrollers and embedded systems.\nIts ability to directly manipulate hardware and memory makes it an essential language in low-level programming, where control over system resources is critical."}),"\n",(0,t.jsx)(n.p,{children:"C is a compiled language, meaning you need to compile the code (using GCC, for example) into machine-readable code. This process creates an executable file, which you can then run to execute the provided code."}),"\n",(0,t.jsxs)(n.p,{children:["Sources:",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"https://www.learn-c.org/en/Hello%2C_World%21",children:"Learn-c"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"https://www.geeksforgeeks.org/c-language-introduction/?ref=shm",children:"geeksforgeeks"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"https://www.w3schools.com/c/index.php",children:"w3schools"})]}),"\n",(0,t.jsx)(n.p,{children:"Below are some key topics you need to understand to grasp the power of C and how it can be used to create complex, efficient, and high-performance software."}),"\n",(0,t.jsx)(n.h2,{id:"basic-syntax-and-structure",children:"Basic Syntax and Structure"}),"\n",(0,t.jsx)(n.h3,{id:"headers",children:"Headers"}),"\n",(0,t.jsx)(n.p,{children:"Programs written in C rely on headers to access essential functions, such as scanf and printf. Without this, you wouldn\u2019t be able to use these built-in functions and would need to write your own versions to replicate their functionality and performance."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"// #include is a preprocessor directive\n// <stdio.h> is the header itself\n#include <stdio.h>\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"Writing these functions yourself is not recommended, as they have already been thoroughly developed and tested for efficiency and reliability."})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["To name a few ",(0,t.jsx)(n.code,{children:"<stdio.h>"}),",",(0,t.jsx)(n.code,{children:"<stlib.h>"}),", ",(0,t.jsx)(n.em,{children:"and"})," ",(0,t.jsx)(n.code,{children:"<math.h>"})," *are part of the C Standard Library, so you don't need to write your own implementation for them."]})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"function-naming-scheme",children:"Function Naming Scheme"}),"\n",(0,t.jsx)(n.p,{children:"Every C program must have a main function, which serves as the entry point for the program. This is where the execution begins, and the code you write is placed inside this function."}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"int"})," keyword specifies the return type of the main function, indicating that it returns an integer value once the program finishes running. A return value of ",(0,t.jsx)(n.code,{children:"0"})," typically means the program ran successfully, while any non-zero value indicates an error or unsuccessful execution."]}),"\n",(0,t.jsxs)(n.p,{children:["Every function in C needs a name, and in this case, ",(0,t.jsx)(n.code,{children:"main"})," is the function's name (think of it as an ",(0,t.jsx)(n.code,{children:"identifier"}),"). The main function is special because it's where execution starts, but it can also be called by other functions in the program, like this: ",(0,t.jsx)(n.code,{children:"main()"})," (",(0,t.jsx)(n.em,{children:"don\u2019t worry, we\u2019ll discuss this in more detail when we cover functions"}),")."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"//** simple main function**\n// int - return type\n// main - function name\nint main () {\n\n}\n\n//**A more advanced adaptation of main to read command line arguments.**//\n// int - return type\n// main - function name\n// int argc - number of command line arguments passed\n/* char* argv[] - stores the command line arguments as strings \nin the argv array with each command stored in its own array index*/\nint main (int argc, char* argv[]) {\n\n}\n"})}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"int argc"})," and ",(0,t.jsx)(n.strong,{children:"char* argv[]"})," parameters allow for direct storage and retrival of command line arguments instead of storing and accessing them indirectly."]})]}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["You can name other functions anything you like, but main is ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"required"})})," so the compiler knows where to begin execution."]})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"return-types",children:"Return Types"}),"\n",(0,t.jsxs)(n.p,{children:["The main function contains a return type ",(0,t.jsx)(n.code,{children:"int"})," and we now need to include another keyword ",(0,t.jsx)(n.code,{children:"return"}),". return is how you would exit the function and return something to the caller (",(0,t.jsx)(n.em,{children:"which is our operating system in this case"}),") with its associated type (",(0,t.jsx)(n.em,{children:"which in our case is an"})," ",(0,t.jsx)(n.code,{children:"int"})," ",(0,t.jsx)(n.em,{children:"so we return a integer value"}),")."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"\n/*assuming the header and main function have been well defined and each return type has an \nassociated function with said return type*/\n\nreturn 0; -> returns an integer value to the caller\n\nreturn 3.41; -> returns a float/double value to the caller\n\nreturn arr; -> returns a string to the caller // assuming arr has been well defined \n\nreturn 'a'; -> returns a character value to the caller\n\n"})}),"\n",(0,t.jsxs)(n.admonition,{type:"danger",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{}),(0,t.jsxs)(n.p,{children:["It is important to note that if the return type is not ",(0,t.jsx)(n.code,{children:"void"})," you cannot return nothing (",(0,t.jsx)(n.em,{children:"denotate as"})," ",(0,t.jsx)(n.code,{children:"return"}),")"]})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.h2,{id:"control-structures",children:"Control Structures"}),"\n",(0,t.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,t.jsx)(n.h2,{id:"pointers",children:"Pointers"}),"\n",(0,t.jsx)(n.h2,{id:"arrays-and-strings",children:"Arrays and Strings"}),"\n",(0,t.jsx)(n.h2,{id:"structures-and-unions",children:"Structures and Unions"}),"\n",(0,t.jsx)(n.h2,{id:"file-handling",children:"File Handling"}),"\n",(0,t.jsx)(n.h2,{id:"memory-management",children:"Memory Management"})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>o});var t=r(6540);const i={},s=t.createContext(i);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);