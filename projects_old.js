import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link'

import { ThemeProvider } from '@emotion/react';
import { Container, CssBaseline, Grid } from '@mui/material';

// var project1 = "Here lies the details of project 1...";
// var project2 = "Here lies the details of project 2...";
// var project3 = "Here lies the details of project 3...";

// const BigProject = {
//     title: 'Title of the Large project',
//     description: 
//         "Our current large project. Read the details.",
//     image: '',
//     linkText: "Continue exploring...",
// };

// const MediumProject = [
//     {
//         title: 'Title of Medium Project',
//         description:
//             "Our current medium project. Read the details.",
//         image: '',
//         linkText: "Continue exploring...",
//     },
//     {
//         title: 'Title of another Medium Project',
//         description: 
//             "Our other medium project. Read the details.",
//         image: '',
//         linkText: "Continue exploring...",
//     },
// ];

// const posts = [project1, project2, project3]


export default function Projects() {
    return (
        <Layout title="Projects" description="Projects created by the UML Cloud Computing Club">
            <div className="container margin-vert--lg">
                <div className="row">
                    <div className="col col--12">
                        <h1>Courses</h1>
                        <p>Welcome to the UML Cloud Computing Club Courses page. This page will be updated with our projects and their documentation.</p>
                        <a href=''></a>
                    </div>
                </div>
            </div>
        </Layout>
    );
}


// export default function Projects() {
//     return (
//         <ThemeProvider theme={defaultTheme}>
//             <CssBaseline />
//             <Container maxWidth='lg'>
//                 <Header title="Projects" sections={sections} />
//                 <main>
//                     <MainFeaturedProject post={BigProject} />
//                     <Grid container spacing={4}>
//                         {FeaturedProject.map((post) => (
//                             <FeaturedProject key={post.title} post={post} />
//                         ))}
//                     </Grid>
//                 </main>
//             </Container>
//         </ThemeProvider>
//     );
// }