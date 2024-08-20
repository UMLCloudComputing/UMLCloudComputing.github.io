"use strict";(self.webpackChunkumlcloudcomputing=self.webpackChunkumlcloudcomputing||[]).push([[3325],{7506:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var n=t(4848),s=t(8453);const r={sidebar_position:3},o="New Files",l={id:"tutorials/Git Version Control/Basics/New Files",title:"New Files",description:"Adding new Files",source:"@site/docs/tutorials/Git Version Control/Basics/New Files.md",sourceDirName:"tutorials/Git Version Control/Basics",slug:"/tutorials/Git Version Control/Basics/New Files",permalink:"/docs/tutorials/Git Version Control/Basics/New Files",draft:!1,unlisted:!1,editUrl:"https://github.com/UMLCloudComputing/UMLCloudComputing.github.io/edit/main/docs/tutorials/Git Version Control/Basics/New Files.md",tags:[],version:"current",lastUpdatedBy:"Gurpranked",lastUpdatedAt:1724118991e3,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/tutorials/Git Version Control/Basics/Getting Started"},next:{title:"Staging Area",permalink:"/docs/tutorials/Git Version Control/Basics/Staging Area"}},d={},a=[{value:"Adding new Files",id:"adding-new-files",level:3},{value:"Basic Editing on Vim",id:"basic-editing-on-vim",level:4}];function c(e){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"new-files",children:"New Files"})}),"\n",(0,n.jsx)(i.h3,{id:"adding-new-files",children:"Adding new Files"}),"\n",(0,n.jsxs)(i.p,{children:["Let's find out how to add new files to a git ",(0,n.jsx)(i.a,{href:"/docs/tutorials/Git%20Version%20Control/Basics/#repository-repo",children:"repository"}),"! ",(0,n.jsx)("br",{}),"\r\nWithin this tutorial, we'll be using the ",(0,n.jsx)(i.a,{href:"/docs/tutorials/Git%20Version%20Control/Basics/#vim",children:"Vim"})," CLI text-edtior to create a edit files. ",(0,n.jsx)("br",{})," This can just as easily be done with your prefered text-editor. ",(0,n.jsx)("br",{}),"\r\nIE with ",(0,n.jsx)(i.code,{children:"code ."})," to open the current working directory within ",(0,n.jsx)(i.a,{href:"/docs/tutorials/Git%20Version%20Control/Basics/#visual-studio-code",children:"Visual Studio Code"}),"."]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-shell",children:"[user@localhost] $ vim index.html\n"})}),"\n",(0,n.jsxs)(i.p,{children:["Calling the command above should create and open a blank ",(0,n.jsx)(i.code,{children:".html"})," file within your terminal:"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-vim",children:'|\r\n~\r\n~\r\n~\r\n~\r\n~\r\n~\r\n~\r\n~\r\n~\r\n~ \r\n"index.html" [New File]                                         0, 0-1      All\n'})}),"\n",(0,n.jsx)(i.p,{children:"Your newly created file should look something similar to the output shown above."}),"\n",(0,n.jsxs)(i.p,{children:["Let's put some code within ",(0,n.jsx)(i.code,{children:"index.html"}),":"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-html",children:"<!DOCTYPE html>\r\n<html>\r\n    <head>\r\n        <title>Hello World!</title>\r\n    </head>\r\n    <body>\r\n        <h1>Hello world!</h1>\r\n        <p>This is the first file in my new Git Repo.</p>\r\n    </body>\r\n</html>\n"})}),"\n",(0,n.jsx)(i.h4,{id:"basic-editing-on-vim",children:"Basic Editing on Vim"}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsxs)(i.p,{children:["In order to enter content into ",(0,n.jsx)(i.code,{children:"index.html"})," using ",(0,n.jsx)(i.a,{href:"/docs/tutorials/Git%20Version%20Control/Basics/#vim",children:"Vim"}),', enter insert mode by pressing the "I" key on your keyboard. Then either type or paste the code into the editor. ',(0,n.jsx)("br",{}),"\r\nTo save and exit out of ",(0,n.jsx)(i.a,{href:"/docs/tutorials/Git%20Version%20Control/Basics/#vim",children:"Vim"})," simply press the escape key and then type and enter ",(0,n.jsx)(i.code,{children:":wq"})," (write and quit)."]}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["Now let's check the content of our directory using ",(0,n.jsx)(i.a,{href:"/docs/tutorials/Git%20Version%20Control/Basics/#ls",children:(0,n.jsx)(i.code,{children:"ls"})}),":"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-shell",children:"[user@localhost] $ ls\r\n                  index.html\n"})}),"\n",(0,n.jsxs)(i.p,{children:["Since the file is within our working directory now, let's check if it's part of our ",(0,n.jsx)(i.a,{href:"/docs/tutorials/Git%20Version%20Control/Basics/#repository-repo",children:"repository"})," using ",(0,n.jsx)(i.code,{children:"git status"}),":"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-shell",children:'[user@localhost] $ git status\r\n                On branch master\r\n\r\n                No commits yet\r\n\r\n                Untracked files:\r\n                    (use "git add <file>..." to include in what will be committed)\r\n                        index.html\r\n\r\n                nothing added to commit but untracked files present (use "git add" to track)  \n'})}),"\n",(0,n.jsxs)(i.p,{children:["The output above indicates that now git is aware of the ",(0,n.jsx)(i.code,{children:"index.html"})," however it has not be added to our repository."]}),"\n",(0,n.jsx)(i.p,{children:"There are three potential states for files in a repository folder:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Tracked: Git knows about these and they are in your repository. These are files from the last snapshot. These files have three sub-states:","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Modified"}),"\n",(0,n.jsx)(i.li,{children:"Staged"}),"\n",(0,n.jsx)(i.li,{children:"Committed"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["Untracked: These files are in your working directory, however not in the previous snapshot or in the ",(0,n.jsx)(i.a,{href:"/docs/tutorials/Git%20Version%20Control/Basics/#staging-area",children:"staging area"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:["Modified: A file that has changes made to it. However, these changes haven't been ",(0,n.jsx)(i.a,{href:"/docs/tutorials/Git%20Version%20Control/Basics/#commit",children:"committed"})," yet. These changes include adding, modifying, or deleting a file's content. These files will be included in the next commit with their new changes."]}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["Adding the first files to an empty repository are all untracked. In order for them to be tracked, they must be ",(0,n.jsx)(i.a,{href:"/docs/tutorials/Git%20Version%20Control/Basics/#stage",children:"staged"}),"."]})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,i,t)=>{t.d(i,{R:()=>o,x:()=>l});var n=t(6540);const s={},r=n.createContext(s);function o(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);