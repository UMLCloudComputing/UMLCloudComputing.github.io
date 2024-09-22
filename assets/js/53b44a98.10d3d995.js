"use strict";(self.webpackChunkumlcloudcomputing=self.webpackChunkumlcloudcomputing||[]).push([[9403],{9182:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var t=i(4848),a=i(8453);const o={sidebar_position:5,slug:"/activities/part-2-frontend-development-and-integration/5-capacitor-android-integration"},r="Capacitor Android Integration",d={id:"activities/PhotoSky/Part 2: Frontend Development and Integration/capacitor-android-integration",title:"Capacitor Android Integration",description:"In this section, we'll dive deep into the process of using Capacitor to create an Android app from our PhotoSky web application. We'll cover setting up Capacitor, adding the Android platform, implementing native features like camera access, building the Android app, and running it in Android Studio.",source:"@site/docs/activities/PhotoSky/Part 2: Frontend Development and Integration/5-capacitor-android-integration.md",sourceDirName:"activities/PhotoSky/Part 2: Frontend Development and Integration",slug:"/activities/part-2-frontend-development-and-integration/5-capacitor-android-integration",permalink:"/docs/activities/part-2-frontend-development-and-integration/5-capacitor-android-integration",draft:!1,unlisted:!1,editUrl:"https://github.com/UMLCloudComputing/UMLCloudComputing.github.io/edit/main/docs/activities/PhotoSky/Part 2: Frontend Development and Integration/5-capacitor-android-integration.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,slug:"/activities/part-2-frontend-development-and-integration/5-capacitor-android-integration"},sidebar:"activitiesSidebar",previous:{title:"Integrating the Backend API",permalink:"/docs/activities/part-2-frontend-development-and-integration/4-integrating-backend-api"},next:{title:"Testing and Deployment",permalink:"/docs/activities/part-2-frontend-development-and-integration/6-testing-and-deployment"}},s={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1: Install Capacitor",id:"step-1-install-capacitor",level:2},{value:"Step 2: Initialize Capacitor",id:"step-2-initialize-capacitor",level:2},{value:"Step 3: Add Android Platform",id:"step-3-add-android-platform",level:2},{value:"Step 4: Configure Capacitor",id:"step-4-configure-capacitor",level:2},{value:"Step 5: Install Capacitor Camera Plugin",id:"step-5-install-capacitor-camera-plugin",level:2},{value:"Step 6: Implement Camera Functionality",id:"step-6-implement-camera-functionality",level:2},{value:"Step 7: Build Your Web App",id:"step-7-build-your-web-app",level:2},{value:"Step 8: Copy Web Assets",id:"step-8-copy-web-assets",level:2},{value:"Step 9: Open in Android Studio",id:"step-9-open-in-android-studio",level:2},{value:"Step 10: Android-Specific Configurations",id:"step-10-android-specific-configurations",level:2},{value:"Step 11: Run the App",id:"step-11-run-the-app",level:2},{value:"Step 12: Testing Native Features",id:"step-12-testing-native-features",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Conclusion",id:"conclusion",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"capacitor-android-integration",children:"Capacitor Android Integration"})}),"\n",(0,t.jsx)(n.p,{children:"In this section, we'll dive deep into the process of using Capacitor to create an Android app from our PhotoSky web application. We'll cover setting up Capacitor, adding the Android platform, implementing native features like camera access, building the Android app, and running it in Android Studio."}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.p,{children:"Before we begin, ensure you have the following installed:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Node.js and npm (v14 or later)"}),"\n",(0,t.jsx)(n.li,{children:"Android Studio (latest version)"}),"\n",(0,t.jsx)(n.li,{children:"Java Development Kit (JDK) 11 or later"}),"\n",(0,t.jsxs)(n.li,{children:["Android SDK with the following components:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Android SDK Platform 29 (or the latest stable version)"}),"\n",(0,t.jsx)(n.li,{children:"Android SDK Build-Tools"}),"\n",(0,t.jsx)(n.li,{children:"Android SDK Platform-Tools"}),"\n",(0,t.jsx)(n.li,{children:"Android Emulator"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Make sure you have Android Studio properly set up with the Android SDK and at least one Android Virtual Device (AVD) for testing."}),"\n",(0,t.jsx)(n.h2,{id:"step-1-install-capacitor",children:"Step 1: Install Capacitor"}),"\n",(0,t.jsx)(n.p,{children:"First, let's install Capacitor in our project. In your project root directory, run:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install @capacitor/core @capacitor/cli\n"})}),"\n",(0,t.jsx)(n.h2,{id:"step-2-initialize-capacitor",children:"Step 2: Initialize Capacitor"}),"\n",(0,t.jsx)(n.p,{children:"Initialize Capacitor in your project:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npx cap init\n"})}),"\n",(0,t.jsx)(n.p,{children:"You'll be prompted to enter your app's name and package ID. Use:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"App name: PhotoSky"}),"\n",(0,t.jsx)(n.li,{children:"Package ID: org.umlcloudcomputing.photosky"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"step-3-add-android-platform",children:"Step 3: Add Android Platform"}),"\n",(0,t.jsx)(n.p,{children:"Now, let's add the Android platform to our project:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install @capacitor/android\nnpx cap add android\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This command creates an Android project in the ",(0,t.jsx)(n.code,{children:"android"})," directory."]}),"\n",(0,t.jsx)(n.h2,{id:"step-4-configure-capacitor",children:"Step 4: Configure Capacitor"}),"\n",(0,t.jsxs)(n.p,{children:["Update the ",(0,t.jsx)(n.code,{children:"capacitor.config.ts"})," file in your project root to ensure it's correctly configured:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { CapacitorConfig } from '@capacitor/cli';\n\nconst config: CapacitorConfig = {\n  appId: 'org.umlcloudcomputing.photosky',\n  appName: 'PhotoSky',\n  webDir: 'build',\n  bundledWebRuntime: false\n};\n\nexport default config;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Make sure the ",(0,t.jsx)(n.code,{children:"webDir"})," points to your build output directory ('build' for Create React App projects)."]}),"\n",(0,t.jsx)(n.h2,{id:"step-5-install-capacitor-camera-plugin",children:"Step 5: Install Capacitor Camera Plugin"}),"\n",(0,t.jsx)(n.p,{children:"For camera functionality, we need to install the Capacitor Camera plugin:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install @capacitor/camera\nnpx cap sync\n"})}),"\n",(0,t.jsx)(n.h2,{id:"step-6-implement-camera-functionality",children:"Step 6: Implement Camera Functionality"}),"\n",(0,t.jsxs)(n.p,{children:["Update your ",(0,t.jsx)(n.code,{children:"App.js"})," to include the camera functionality. Here's an example of how to implement it:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"import { Camera, CameraResultType } from '@capacitor/camera';\n\n// ... other imports\n\nconst takePicture = async () => {\n  try {\n    const image = await Camera.getPhoto({\n      quality: 90,\n      allowEditing: true,\n      resultType: CameraResultType.Uri\n    });\n\n    // Generate a random unique ID for the file name\n    const randomFileName = `captured-image-${Date.now()}-${Math.random().toString(36).substring(2, 15)}.jpg`;\n\n    const file = await fetch(image.webPath)\n      .then(res => res.blob())\n      .then(blob => new File([blob], randomFileName, { type: 'image/jpeg' }));\n    \n    await uploadImage(file);\n  } catch (error) {\n    console.error('Error capturing image:', error);\n    enqueueSnackbar('Error capturing image', { variant: 'error' });\n  }\n};\n\n// Use this function in your UI, for example:\n// <Button onClick={takePicture}>Take Picture</Button>\n"})}),"\n",(0,t.jsx)(n.h2,{id:"step-7-build-your-web-app",children:"Step 7: Build Your Web App"}),"\n",(0,t.jsx)(n.p,{children:"Before we can create the Android app, we need to build our React application:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm run build\n"})}),"\n",(0,t.jsx)(n.h2,{id:"step-8-copy-web-assets",children:"Step 8: Copy Web Assets"}),"\n",(0,t.jsx)(n.p,{children:"After building your web app, copy the web assets to the Android project:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npx cap sync\n"})}),"\n",(0,t.jsx)(n.p,{children:"This command copies your built web assets to the Android project and updates the native configuration."}),"\n",(0,t.jsx)(n.h2,{id:"step-9-open-in-android-studio",children:"Step 9: Open in Android Studio"}),"\n",(0,t.jsx)(n.p,{children:"Now, let's open the project in Android Studio:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npx cap open android\n"})}),"\n",(0,t.jsx)(n.p,{children:"This command will open Android Studio with your Capacitor Android project."}),"\n",(0,t.jsx)(n.h2,{id:"step-10-android-specific-configurations",children:"Step 10: Android-Specific Configurations"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Update ",(0,t.jsx)(n.code,{children:"android/app/src/main/AndroidManifest.xml"})," to include necessary permissions:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:'<manifest xmlns:android="http://schemas.android.com/apk/res/android"\n    package="org.umlcloudcomputing.photosky">\n\n    \x3c!-- Internet Permission --\x3e\n    <uses-permission android:name="android.permission.INTERNET" />\n    \n    \x3c!-- Camera Permission --\x3e\n    <uses-permission android:name="android.permission.CAMERA" />\n    \n    \x3c!-- ... rest of the manifest --\x3e\n</manifest>\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["If you encounter any issues with the camera on Android 10+, you may need to add this to your ",(0,t.jsx)(n.code,{children:"android/app/src/main/AndroidManifest.xml"})," file inside the ",(0,t.jsx)(n.code,{children:"<application>"})," tag:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:'<application\n    ...>\n    android:requestLegacyExternalStorage="true"\n    ...\n</application>\n'})}),"\n",(0,t.jsx)(n.h2,{id:"step-11-run-the-app",children:"Step 11: Run the App"}),"\n",(0,t.jsx)(n.p,{children:"In Android Studio:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Wait for the project to index and sync."}),"\n",(0,t.jsx)(n.li,{children:"Select an emulator or a connected device from the target device drop-down menu."}),"\n",(0,t.jsx)(n.li,{children:'Click the "Run" button (green triangle) or press Shift + F10 to build and run the app.'}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"You should now see your PhotoSky app running on the Android emulator or device!"}),"\n",(0,t.jsx)(n.h2,{id:"step-12-testing-native-features",children:"Step 12: Testing Native Features"}),"\n",(0,t.jsx)(n.p,{children:"Test the camera functionality on your Android device or emulator. Make sure you can take pictures and that they're successfully uploaded to your backend."}),"\n",(0,t.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,t.jsx)(n.p,{children:"If you encounter any issues:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Ensure all dependencies are correctly installed."}),"\n",(0,t.jsxs)(n.li,{children:["Check that your ",(0,t.jsx)(n.code,{children:"capacitor.config.ts"})," file is correctly configured."]}),"\n",(0,t.jsx)(n.li,{children:"Make sure your Android SDK is up to date in Android Studio."}),"\n",(0,t.jsx)(n.li,{children:"If you're having camera issues, check the permissions in the AndroidManifest.xml file."}),"\n",(0,t.jsx)(n.li,{children:"For any Capacitor-related issues, the official Capacitor documentation is a great resource."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(n.p,{children:"You've successfully created an Android app version of your PhotoSky application using Capacitor! This allows your web app to run as a native Android application, taking advantage of native features like the camera."}),"\n",(0,t.jsx)(n.p,{children:"Remember, Capacitor provides a bridge between web technologies and native platforms. While your core application logic remains in JavaScript/React, you now have the ability to access native Android APIs when needed."}),"\n",(0,t.jsx)(n.p,{children:"In the next section, we'll look at how to test and deploy your Android application."})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>d});var t=i(6540);const a={},o=t.createContext(a);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);