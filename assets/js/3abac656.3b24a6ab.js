"use strict";(self.webpackChunkumlcloudcomputing=self.webpackChunkumlcloudcomputing||[]).push([[3918],{1500:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=i(4848),t=i(8453);const o={sidebar_position:3},r="New Files",l={id:"resources/Git Version Control/Basics/New Files",title:"New Files",description:"Adding new Files",source:"@site/docs/resources/Git Version Control/Basics/New Files.md",sourceDirName:"resources/Git Version Control/Basics",slug:"/resources/Git Version Control/Basics/New Files",permalink:"/docs/resources/Git Version Control/Basics/New Files",draft:!1,unlisted:!1,editUrl:"https://github.com/UMLCloudComputing/UMLCloudComputing.github.io/edit/main/docs/resources/Git Version Control/Basics/New Files.md",tags:[],version:"current",lastUpdatedBy:"ReesCodes",lastUpdatedAt:1728607985e3,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"resourcesSidebar",previous:{title:"Getting Started",permalink:"/docs/resources/Git Version Control/Basics/Getting Started"},next:{title:"Staging Area",permalink:"/docs/resources/Git Version Control/Basics/Staging Area"}},d={},c=[{value:"Adding new Files",id:"adding-new-files",level:3},{value:"Basic Editing on Vim",id:"basic-editing-on-vim",level:4}];function a(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"new-files",children:"New Files"})}),"\n",(0,n.jsx)(s.h3,{id:"adding-new-files",children:"Adding new Files"}),"\n",(0,n.jsxs)(s.p,{children:["Let's find out how to add new files to a git ",(0,n.jsx)(s.a,{href:"/docs/resources/Git%20Version%20Control/Basics/#repository-repo",children:"repository"}),"! ",(0,n.jsx)("br",{}),"\nWithin this tutorial, we'll be using the ",(0,n.jsx)(s.a,{href:"/docs/resources/Git%20Version%20Control/Basics/#vim",children:"Vim"})," CLI text-edtior to create a edit files. ",(0,n.jsx)("br",{})," This can just as easily be done with your prefered text-editor. ",(0,n.jsx)("br",{}),"\nIE with ",(0,n.jsx)(s.code,{children:"code ."})," to open the current working directory within ",(0,n.jsx)(s.a,{href:"/docs/resources/Git%20Version%20Control/Basics/#visual-studio-code",children:"Visual Studio Code"}),"."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"[user@localhost] $ vim index.html\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Calling the command above should create and open a blank ",(0,n.jsx)(s.code,{children:".html"})," file within your terminal:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-vim",children:'|\n~\n~\n~\n~\n~\n~\n~\n~\n~\n~ \n"index.html" [New File]                                         0, 0-1      All\n'})}),"\n",(0,n.jsx)(s.p,{children:"Your newly created file should look something similar to the output shown above."}),"\n",(0,n.jsxs)(s.p,{children:["Let's put some code within ",(0,n.jsx)(s.code,{children:"index.html"}),":"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-html",children:"<!DOCTYPE html>\n<html>\n    <head>\n        <title>Hello World!</title>\n    </head>\n    <body>\n        <h1>Hello world!</h1>\n        <p>This is the first file in my new Git Repo.</p>\n    </body>\n</html>\n"})}),"\n",(0,n.jsx)(s.h4,{id:"basic-editing-on-vim",children:"Basic Editing on Vim"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:["In order to enter content into ",(0,n.jsx)(s.code,{children:"index.html"})," using ",(0,n.jsx)(s.a,{href:"/docs/resources/Git%20Version%20Control/Basics/#vim",children:"Vim"}),', enter insert mode by pressing the "I" key on your keyboard. Then either type or paste the code into the editor. ',(0,n.jsx)("br",{}),"\nTo save and exit out of ",(0,n.jsx)(s.a,{href:"/docs/resources/Git%20Version%20Control/Basics/#vim",children:"Vim"})," simply press the escape key and then type and enter ",(0,n.jsx)(s.code,{children:":wq"})," (write and quit)."]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Now let's check the content of our directory using ",(0,n.jsx)(s.a,{href:"/docs/resources/Git%20Version%20Control/Basics/#ls",children:(0,n.jsx)(s.code,{children:"ls"})}),":"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"[user@localhost] $ ls\n                  index.html\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Since the file is within our working directory now, let's check if it's part of our ",(0,n.jsx)(s.a,{href:"/docs/resources/Git%20Version%20Control/Basics/#repository-repo",children:"repository"})," using ",(0,n.jsx)(s.code,{children:"git status"}),":"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:'[user@localhost] $ git status\n                On branch master\n\n                No commits yet\n\n                Untracked files:\n                    (use "git add <file>..." to include in what will be committed)\n                        index.html\n\n                nothing added to commit but untracked files present (use "git add" to track)  \n'})}),"\n",(0,n.jsxs)(s.p,{children:["The output above indicates that now git is aware of the ",(0,n.jsx)(s.code,{children:"index.html"})," however it has not be added to our repository."]}),"\n",(0,n.jsx)(s.p,{children:"There are three potential states for files in a repository folder:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Tracked: Git knows about these and they are in your repository. These are files from the last snapshot. These files have three sub-states:","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Modified"}),"\n",(0,n.jsx)(s.li,{children:"Staged"}),"\n",(0,n.jsx)(s.li,{children:"Committed"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["Untracked: These files are in your working directory, however not in the previous snapshot or in the ",(0,n.jsx)(s.a,{href:"/docs/resources/Git%20Version%20Control/Basics/#staging-area",children:"staging area"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["Modified: A file that has changes made to it. However, these changes haven't been ",(0,n.jsx)(s.a,{href:"/docs/resources/Git%20Version%20Control/Basics/#commit",children:"committed"})," yet. These changes include adding, modifying, or deleting a file's content. These files will be included in the next commit with their new changes."]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Adding the first files to an empty repository are all untracked. In order for them to be tracked, they must be ",(0,n.jsx)(s.a,{href:"/docs/resources/Git%20Version%20Control/Basics/#stage",children:"staged"}),"."]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},8453:(e,s,i)=>{i.d(s,{R:()=>r,x:()=>l});var n=i(6540);const t={},o=n.createContext(t);function r(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);