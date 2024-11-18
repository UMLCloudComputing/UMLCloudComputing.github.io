"use strict";(self.webpackChunkumlcloudcomputing=self.webpackChunkumlcloudcomputing||[]).push([[551],{3990:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"activities/PhotoSky/Part 2: Frontend Development and Integration/implementing-image-upload-and-camera","title":"Handling Image Upload and Camera Integration","description":"We use useRef to create a reference to the file input element, and useCallback to memoize our upload functions:","source":"@site/docs/activities/PhotoSky/Part 2: Frontend Development and Integration/4-implementing-image-upload-and-camera.md","sourceDirName":"activities/PhotoSky/Part 2: Frontend Development and Integration","slug":"/activities/part-2-frontend-development-and-integration/4-implementing-image-upload-and-camera","permalink":"/docs/activities/part-2-frontend-development-and-integration/4-implementing-image-upload-and-camera","draft":false,"unlisted":false,"editUrl":"https://github.com/UMLCloudComputing/UMLCloudComputing.github.io/edit/main/docs/activities/PhotoSky/Part 2: Frontend Development and Integration/4-implementing-image-upload-and-camera.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4,"slug":"/activities/part-2-frontend-development-and-integration/4-implementing-image-upload-and-camera"},"sidebar":"activitiesSidebar","previous":{"title":"State Management in React","permalink":"/docs/activities/part-2-frontend-development-and-integration/3-state-management-in-react"},"next":{"title":"Integrating the Backend API","permalink":"/docs/activities/part-2-frontend-development-and-integration/4-integrating-backend-api"}}');var r=a(4848),i=a(8453);const o={sidebar_position:4,slug:"/activities/part-2-frontend-development-and-integration/4-implementing-image-upload-and-camera"},s="Handling Image Upload and Camera Integration",l={},c=[];function d(e){const n={a:"a",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"handling-image-upload-and-camera-integration",children:"Handling Image Upload and Camera Integration"})}),"\n",(0,r.jsxs)(n.p,{children:["We use ",(0,r.jsx)(n.a,{href:"https://react.dev/reference/react/useRef",children:"useRef"})," to create a reference to the file input element, and ",(0,r.jsx)(n.a,{href:"https://react.dev/reference/react/useCallback",children:"useCallback"})," to memoize our upload functions:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"const fileInputRef = useRef(null);\n\nconst uploadImage = useCallback(async (file) => {\n  setLoading(true);\n  try {\n    const presignedResponse = await axios.post(`${API_URL}/get-presigned-url`, {\n      filename: file.name,\n      filetype: file.type\n    });\n\n    const { url, fields } = presignedResponse.data;\n    const formData = new FormData();\n    Object.entries(fields).forEach(([key, value]) => formData.append(key, value));\n    formData.append('file', file);\n\n    await axios.post(url, formData, { headers: { 'Content-Type': 'multipart/form-data' } });\n\n    fetchImages();\n    enqueueSnackbar('Image uploaded successfully', { variant: 'success' });\n  } catch (error) {\n    console.error('Error uploading image:', error);\n    enqueueSnackbar('Error uploading image', { variant: 'error' });\n  } finally {\n    setLoading(false);\n  }\n}, [API_URL, enqueueSnackbar, fetchImages]);\n\nconst takePicture = useCallback(async () => {\n  setImageDialogOpen(false);\n  try {\n    const image = await Camera.getPhoto({\n      quality: 90,\n      allowEditing: true,\n      resultType: CameraResultType.Uri\n    });\n\n    const randomFileName = `captured-image-${Date.now()}-${Math.random().toString(36).substring(2, 15)}.jpg`;\n\n    const file = await fetch(image.webPath)\n      .then(res => res.blob())\n      .then(blob => new File([blob], randomFileName, { type: 'image/jpeg' }));\n    \n    await uploadImage(file);\n  } catch (error) {\n    console.error('Error capturing image:', error);\n    enqueueSnackbar('Error capturing image', { variant: 'error' });\n  }\n}, [uploadImage, enqueueSnackbar]);\n"})})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>s});var t=a(6540);const r={},i=t.createContext(r);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);