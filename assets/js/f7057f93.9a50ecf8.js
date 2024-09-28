"use strict";(self.webpackChunkumlcloudcomputing=self.webpackChunkumlcloudcomputing||[]).push([[4572],{5485:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var r=s(4848),t=s(8453);const o={sidebar_position:6},i="Branch",c={id:"resources/Git Version Control/Basics/Branch",title:"Branch",description:"Using Git branches",source:"@site/docs/resources/Git Version Control/Basics/Branch.md",sourceDirName:"resources/Git Version Control/Basics",slug:"/resources/Git Version Control/Basics/Branch",permalink:"/docs/resources/Git Version Control/Basics/Branch",draft:!1,unlisted:!1,editUrl:"https://github.com/UMLCloudComputing/UMLCloudComputing.github.io/edit/main/docs/resources/Git Version Control/Basics/Branch.md",tags:[],version:"current",lastUpdatedBy:"Gurpranked",lastUpdatedAt:1727410677e3,sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"resourcesSidebar",previous:{title:"Commits",permalink:"/docs/resources/Git Version Control/Basics/Commit"},next:{title:"Merging",permalink:"/docs/resources/Git Version Control/Basics/Merging"}},a={},h=[{value:"Using Git branches",id:"using-git-branches",level:3},{value:"Creating a new Branch",id:"creating-a-new-branch",level:3},{value:"Switching between Branches",id:"switching-between-branches",level:3}];function l(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h3:"h3",header:"header",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"branch",children:"Branch"})}),"\n",(0,r.jsx)(n.h3,{id:"using-git-branches",children:"Using Git branches"}),"\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.a,{href:"/docs/resources/Git%20Version%20Control/Basics/#branch",children:"branch"})," is a seperate version of the main repository.",(0,r.jsx)("br",{}),"\nBranches are particuarly useful when a developer wants to update parts of a large project."]}),"\n",(0,r.jsxs)(n.p,{children:["Git branches allow development on a new features and designs independent from other work on the main branch.",(0,r.jsx)("br",{}),"\nWhen the work is complete on a branch, it can be ",(0,r.jsx)(n.a,{href:"/docs/resources/Git%20Version%20Control/Basics/#merge",children:"merged"})," back into the main branch/project.",(0,r.jsx)("br",{}),"\nWith branches, it's also possible to work on different parts of a project simultaneously without any part impacting another."]}),"\n",(0,r.jsxs)(n.p,{children:["Whenever starting a new repository, there is always the ",(0,r.jsx)(n.code,{children:"master"})," branch. It's the default name for a branch in git. Within large projects, it representative as the ground-truth branch with the most stable and working version of a project. It's typical for it to contain the project's ",(0,r.jsx)(n.strong,{children:"working"})," code."]}),"\n",(0,r.jsxs)(n.p,{children:["Within Git, ",(0,r.jsx)(n.code,{children:"HEAD"})," is a special pointer to a local branch you're currently on. When you change branches or make commits, ",(0,r.jsx)(n.code,{children:"HEAD"})," moves accordingly."]}),"\n",(0,r.jsx)(n.h3,{id:"creating-a-new-branch",children:"Creating a new Branch"}),"\n",(0,r.jsxs)(n.p,{children:["Let's create a new ",(0,r.jsx)(n.a,{href:"/docs/resources/Git%20Version%20Control/Basics/#branch",children:"branch"})," to work on a feature without modifying the main project's working code:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"[user@localhost] $ git branch hello-world-pictures\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The command ",(0,r.jsx)(n.code,{children:"git branch hello-world-pictures"})," will create a new ",(0,r.jsx)(n.a,{href:"/docs/resources/Git%20Version%20Control/Basics/#branch",children:"branch"}),' called "hello-world-pictures".',(0,r.jsx)("br",{}),"\nLet's confirm that the branch was created:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"[user@localhost] $ git branch\nhello-world-pictures\n* master\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Whenever creating new branches, the branch from which the ",(0,r.jsx)(n.em,{children:"new"})," branch is sourced from is the branch which was mounted when the git branch command was called. In scenario above, the command was called from within the ",(0,r.jsx)(n.code,{children:"master"})," branch. Hence, all the initial files and changes are sourced from the ",(0,r.jsx)(n.code,{children:"master"})," branch for the ",(0,r.jsx)(n.code,{children:"hello-world-pictures"})," branch."]})}),"\n",(0,r.jsxs)(n.p,{children:['A new branch called "hello-world-pictures" has been created, however the ',(0,r.jsx)(n.code,{children:"*"})," symbol indicates that we are currently still on the ",(0,r.jsx)(n.code,{children:"master"})," ",(0,r.jsx)(n.a,{href:"/docs/resources/Git%20Version%20Control/Basics/#branch",children:"branch"}),"."]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["When viewing the output of ",(0,r.jsx)(n.code,{children:"git branch"}),", the ",(0,r.jsx)(n.code,{children:"*"})," symbol indicates the current branch."]})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Git-Staging-Diagram-3",src:s(789).A+"",width:"4096",height:"2856"})}),"\n",(0,r.jsxs)(n.p,{children:["In order to leave the ",(0,r.jsx)(n.code,{children:"master"})," ",(0,r.jsx)(n.a,{href:"/docs/resources/Git%20Version%20Control/Basics/",children:"branch"}),' and change to the "hello-world-pictures" ',(0,r.jsx)(n.a,{href:"/docs/resources/Git%20Version%20Control/Basics/",children:"branch"})," we have to use the ",(0,r.jsx)(n.a,{href:"/docs/resources/Git%20Version%20Control/Basics/#checkout",children:(0,r.jsx)(n.code,{children:"checkout"})})," command."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"[user@localhost] $ git checkout hello-world-pictures\n                   Switched to branch 'hello-world-pictures'\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Adding the ",(0,r.jsx)(n.code,{children:"-b"})," option on ",(0,r.jsx)(n.code,{children:"git checkout"})," will create a new branch and move to it, if it does not exist."]})}),"\n",(0,r.jsxs)(n.p,{children:["Now let's make some edits now that we're in the correct branch.\nLet's add an ",(0,r.jsx)(n.a,{href:"https://software.3metas.com/wp-content/uploads/2017/06/git.png",children:"image"})," to our html page:"]}),"\n",(0,r.jsx)(n.p,{children:"First let's obtain the image:"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["In order to download the image via the CLI use one of the following commands from the same working directory as ",(0,r.jsx)(n.code,{children:"index.html"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Windows:","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-powershell",children:"wget https://software.3metas.com/wp-content/uploads/2017/06/git.png > git.png\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Linux & Mac:","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl https://software.3metas.com/wp-content/uploads/2017/06/git.png > git.png\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Then let's update our html code:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<!DOCTYPE html>\n<html>\n    <head>\n        <title>Hello World!</title>\n        <link rel="stylesheet" href="styles.css">\n    </head>\n\n    <body>\n        <h1>Hello world!</h1>\n        <div>\n            <img src="git.png" alt="Git Logo" style="width:100%;max-width:960px">\n        </div>\n        <p>This is the first file in my new Git Repo.</p>\n        <p>A new line in our file!</p>\n    </body>\n</html>\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Let's ",(0,r.jsx)(n.a,{href:"/docs/resources/Git%20Version%20Control/Basics/New%20Files#basic-editing-on-vim",children:"save and exit"})," and check the status of the current ",(0,r.jsx)(n.a,{href:"/docs/resources/Git%20Version%20Control/Basics/#branch",children:"branch"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'[user@localhost] $ git status\nOn branch hello-world-pictures\nChanges not staged for commit:\n    (use "git add <file>..." to update what will be committed)\n    (use "git restore <file>..." to discard changes in working directory)\n        modified:   index.html\n\nUntracked files:\n    (use "git add <file>..." to include in what will be committed)\n    git.png\n\nno changes added to commit (use "git add" and/or "git commit -a")\n'})}),"\n",(0,r.jsxs)(n.p,{children:["The output indicates that there are tracked changes to ",(0,r.jsx)(n.code,{children:"index.html"}),", however the file is not ",(0,r.jsx)(n.a,{href:"/docs/resources/Git%20Version%20Control/Basics/#stage",children:"staged"})," for a ",(0,r.jsx)(n.a,{href:"/docs/resources/Git%20Version%20Control/Basics/#commit",children:"commit"}),". Moreover, there is also the image ",(0,r.jsx)(n.code,{children:"git.png"})," that is currently untracked."]}),"\n",(0,r.jsxs)(n.p,{children:["So let's add all the changes to the ",(0,r.jsx)(n.a,{href:"/docs/resources/Git%20Version%20Control/Basics/#staging-area",children:"staging area"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"[user@localhost] $ git add --all\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Now let's check the status of the ",(0,r.jsx)(n.a,{href:"/docs/resources/Git%20Version%20Control/Basics/#branch",children:"branch"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'[user@localhost] $ git status\nOn branch hello-world-pictures\nChanges to be committed:\n(use "git restore --staged <file>..." to unstage)\n        new file:   git.png\n        modified:   index.html\n'})}),"\n",(0,r.jsx)(n.p,{children:"Now all the changes are staged and can be committed."}),"\n",(0,r.jsxs)(n.p,{children:["Since we're satifisied with our changes, let's ",(0,r.jsx)(n.a,{href:"/docs/resources/Git%20Version%20Control/Basics/#commit",children:"commit"})," them to our ",(0,r.jsx)(n.a,{href:"/docs/resources/Git%20Version%20Control/Basics/#branch",children:"branch"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'[user@localhost] $ git commit -m "feat: Added image to hello world"\n[hello-world-pictures 83d7fb0] feat: Added image to hello world\n 2 files changed, 3 insertions(+)\n create mode 100644 git.png\n'})}),"\n",(0,r.jsx)(n.h3,{id:"switching-between-branches",children:"Switching between Branches"}),"\n",(0,r.jsxs)(n.p,{children:["Now let's see the power of branches! ",(0,r.jsx)("br",{}),"\nLet's check content within our branch:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"[user@localhost] $ ls\ngit.png  index.html  README.md  styles.css\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Notice how the ",(0,r.jsx)(n.code,{children:"hello-world-pictures"})," ",(0,r.jsx)(n.a,{href:"/docs/resources/Git%20Version%20Control/Basics/#branch",children:"branch"})," has the image ",(0,r.jsx)(n.code,{children:"git.png"}),". As per the edits we've made, ",(0,r.jsx)(n.code,{children:"index.html"})," should also have modified code to include the image."]}),"\n",(0,r.jsxs)(n.p,{children:["Now's let's change to the ",(0,r.jsx)(n.code,{children:"master"})," branch using the ",(0,r.jsx)(n.code,{children:"checkout"})," command:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"[user@localhost] $ git checkout master\n                   Switched to branch 'master'\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Finally let's check the content of this ",(0,r.jsx)(n.a,{href:"/docs/resources/Git%20Version%20Control/Basics/#branch",children:"branch"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"[user@localhost] $ ls\nindex.html  README.md  styles.css\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"git.png"})," is gone! Moreover, if we open and check ",(0,r.jsx)(n.code,{children:"index.html"})," we can see that it no longer has the edits we made recently!"]}),"\n",(0,r.jsxs)(n.p,{children:["Within the process of changing branches the ",(0,r.jsx)(n.code,{children:"HEAD"})," pointer changed from ",(0,r.jsx)(n.code,{children:"hello-world-pictures"})," to ",(0,r.jsx)(n.code,{children:"master"}),". Since both branches maintain different commits as their most recent, the ",(0,r.jsx)(n.code,{children:"checkout"})," also changes the current working directory with the content of the ",(0,r.jsx)(n.code,{children:"master"})," branch's latest commit."]}),"\n",(0,r.jsx)(n.p,{children:"Branches enable you to work on parts of a project independently."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.p,{children:["All rights belong to the author and/or owner of the ",(0,r.jsx)(n.a,{href:"https://software.3metas.com/wp-content/uploads/2017/06/git.png",children:"image"}),"."]})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},789:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/git-workflow-3-d0c01af48bd9bfb2e1049aaf1a2565fb.png"},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>c});var r=s(6540);const t={},o=r.createContext(t);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);