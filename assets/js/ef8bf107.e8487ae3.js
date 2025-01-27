"use strict";(self.webpackChunkumlcloudcomputing=self.webpackChunkumlcloudcomputing||[]).push([[4744],{7575:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"resources/Git Version Control/Basics/Git Basics","title":"Git Basics","description":"What is Git?","source":"@site/docs/resources/Git Version Control/Basics/Git Basics.md","sourceDirName":"resources/Git Version Control/Basics","slug":"/resources/Git Version Control/Basics/Git Basics","permalink":"/docs/resources/Git Version Control/Basics/Git Basics","draft":false,"unlisted":false,"editUrl":"https://github.com/UMLCloudComputing/UMLCloudComputing.github.io/edit/main/docs/resources/Git Version Control/Basics/Git Basics.md","tags":[],"version":"current","lastUpdatedBy":"Christopher Coco","lastUpdatedAt":1737990514000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"resourcesSidebar","previous":{"title":"Basics","permalink":"/docs/category/basics"},"next":{"title":"Getting Started","permalink":"/docs/resources/Git Version Control/Basics/Getting Started"}}');var t=i(4848),o=i(8453);const r={sidebar_position:1},a="Git Basics",l={},c=[{value:"What is Git?",id:"what-is-git",level:2},{value:"What does Git do?",id:"what-does-git-do",level:2},{value:"Git vs Github",id:"git-vs-github",level:2},{value:"Installation",id:"installation",level:2},{value:"Git via CLI",id:"git-via-cli",level:2},{value:"Configuring Git",id:"configuring-git",level:2},{value:"Git Help",id:"git-help",level:2}];function d(e){const s={a:"a",admonition:"admonition",annotation:"annotation",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"git-basics",children:"Git Basics"})}),"\n",(0,t.jsx)(s.h2,{id:"what-is-git",children:"What is Git?"}),"\n",(0,t.jsx)(s.p,{children:"Git is a fast version control system that enables asynchronous code collaboration, code versioning, and independent development of features with branches. It was created by Linus Torvalds in 2005 and is currently maintained by Junio Hamano."}),"\n",(0,t.jsx)(s.h2,{id:"what-does-git-do",children:"What does Git do?"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Let's you manage projects with ",(0,t.jsx)(s.a,{href:"/docs/resources/Git%20Version%20Control/Basics/#repository-repo",children:(0,t.jsx)(s.strong,{children:"repositories"})}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Allows you to control changes with ",(0,t.jsx)(s.a,{href:"/docs/resources/Git%20Version%20Control/Basics/#stage",children:(0,t.jsx)(s.strong,{children:"Staging"})})," and ",(0,t.jsx)(s.a,{href:"/docs/resources/Git%20Version%20Control/Basics/#commit",children:(0,t.jsx)(s.strong,{children:"Committing"})}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Gives you ",(0,t.jsx)(s.a,{href:"/docs/resources/Git%20Version%20Control/Basics/#branch",children:(0,t.jsx)(s.strong,{children:"Branching"})})," and ",(0,t.jsx)(s.a,{href:"/docs/resources/Git%20Version%20Control/Basics/#merge",children:(0,t.jsx)(s.strong,{children:"Merging"})})," capabilities to work on different parts and versions of a project."]}),"\n",(0,t.jsxs)(s.li,{children:["Gives you ",(0,t.jsx)(s.a,{href:"/docs/resources/Git%20Version%20Control/Basics/#push",children:(0,t.jsx)(s.strong,{children:"Push"})})," and ",(0,t.jsx)(s.a,{href:"/docs/resources/Git%20Version%20Control/Basics/#pull",children:(0,t.jsx)(s.strong,{children:"Pull"})})," capabilities syncronize copies of your project."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"git-vs-github",children:"Git vs Github"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Git and Github are ",(0,t.jsx)("mark",{children:"not"})," the same."]}),"\n",(0,t.jsx)(s.li,{children:"Github makes tools that utilize Git."}),"\n",(0,t.jsxs)(s.li,{children:["Github is the world's largest host of source control and is owned by Microsoft. It is a cloud based storage platform to host ",(0,t.jsx)(s.a,{href:"/docs/resources/Git%20Version%20Control/Basics/#repository-repo",children:(0,t.jsx)(s.strong,{children:"repositories"})}),"."]}),"\n",(0,t.jsx)(s.li,{children:"Github allows for work on a single repository by multiple developers with real time editing."}),"\n",(0,t.jsx)(s.li,{children:"Github also has a socialization aspect which makes a useful platform for web professionals."}),"\n",(0,t.jsx)(s.li,{children:"Git is a local version control system (VCS)."}),"\n",(0,t.jsx)(s.li,{children:"Github is a web-based platform that uses git's VCS."}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(s.p,{children:["Git can be ",(0,t.jsx)(s.a,{href:"https://git-scm.com/",children:"downloaded"})," for free!"]}),"\n",(0,t.jsx)(s.h2,{id:"git-via-cli",children:"Git via CLI"}),"\n",(0,t.jsx)(s.p,{children:"To start using Git, open your command shell."}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:["Windows: You can use the Git bash which is included in Git for Windows. Alternatively if you're using WSL, follow the steps similar to Linux and Mac.",(0,t.jsx)("br",{}),"\nLinux & Mac: Use the Built-in terminal."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Let's check for a proper install by running the following command in the command shell:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"git --version\n"})}),"\n",(0,t.jsxs)(s.p,{children:["If installed properly, the output should be in format ",(0,t.jsx)(s.code,{children:"git version X.Y"}),"."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"[user@localhost] $  git --version\n                    git version 2.33.1.windows.1\n"})}),"\n",(0,t.jsx)(s.h2,{id:"configuring-git",children:"Configuring Git"}),"\n",(0,t.jsxs)(s.p,{children:["When performing git ",(0,t.jsx)(s.a,{href:"/docs/resources/Git%20Version%20Control/Basics/#commit",children:(0,t.jsx)(s.strong,{children:"commits"})}),", git needs to know who you are. So let's configure our credentials.",(0,t.jsx)("br",{}),"\nUse the following commands to configure your username and email for git:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:'git config --global user.name "YOUR_USERNAME"\n'})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:'git config --global user.email "USER@example.com" \n'})}),"\n",(0,t.jsx)(s.admonition,{type:"tip",children:(0,t.jsxs)(s.p,{children:["Use ",(0,t.jsx)(s.code,{children:"--global"})," to set the username and email for ",(0,t.jsx)(s.strong,{children:"every repository"})," on your computer. ",(0,t.jsx)("br",{})," Remove ",(0,t.jsx)(s.code,{children:"--global"})," if you only want set the credentials for the current repo."]})}),"\n",(0,t.jsx)(s.h2,{id:"git-help",children:"Git Help"}),"\n",(0,t.jsx)(s.p,{children:"Git comes with integrated documentation for all of it's commands. It's good habit to utilize documentation for a program when learning or when confused on how something works."}),"\n",(0,t.jsx)(s.p,{children:"In order to access git's help documentation use either of the two commands:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"git"}),(0,t.jsx)(s.em,{children:(0,t.jsx)(s.code,{children:"command"})}),(0,t.jsx)(s.code,{children:"-help"})," ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsx)(s.mrow,{children:(0,t.jsx)(s.mo,{children:"\u2192"})}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"\\rightarrow"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.3669em"}}),(0,t.jsx)(s.span,{className:"mrel",children:"\u2192"})]})})]})," All available options for the the specified ",(0,t.jsx)(s.em,{children:(0,t.jsx)(s.code,{children:"command"})})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"git help --all"})," ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsx)(s.mrow,{children:(0,t.jsx)(s.mo,{children:"\u2192"})}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"\\rightarrow"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.3669em"}}),(0,t.jsx)(s.span,{className:"mrel",children:"\u2192"})]})})]})," All possible commands"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,s,i)=>{i.d(s,{R:()=>r,x:()=>a});var n=i(6540);const t={},o=n.createContext(t);function r(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);