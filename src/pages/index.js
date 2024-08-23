
// React
import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import { useColorMode } from '@docusaurus/theme-common';
import 'animate.css';

// MUI
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import SchoolIcon from '@mui/icons-material/School';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import Groups2RoundedIcon from '@mui/icons-material/Groups2Rounded';
import { createTheme,responsiveFontSizes } from '@mui/material';

// Local
import Layout from '@theme/Layout';
import { ThemeProvider } from '@emotion/react';
import members from "../members_meta/members.json";
import AvatarLarge from "../components/AvatarLarge";

let theme = createTheme();
theme = responsiveFontSizes(theme);

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    const { colorMode } = useColorMode();
    const isDarkMode = colorMode === 'dark';

    const [gradientAngle, setGradientAngle] = useState(0); // Initial gradient angle

    useEffect(() => {
        const intervalId = setInterval(() => {
          setGradientAngle((prevAngle) => (prevAngle + 0.6));
        }, 30); // Change angle every 30 milliseconds
    
        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);
    return (
        <Box
            component="header"
            sx={{
                backgroundImage: isDarkMode ? `linear-gradient(${gradientAngle}deg, #7b5caa, #CD7672)` : `linear-gradient(${gradientAngle}deg, #9dcbfc, white)`,
                borderRadius: '16px',
                filter: isDarkMode ? 'drop-shadow(0 0.4rem 0.3rem rgba(123, 123, 123, 0.5))' : 'drop-shadow(0 0.4rem 0.3rem rgba(0,0,0,0.5))',
                transition: 'background-image 0.5s ease', // smooth transition 
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                textAlign: 'center',
                py: 10,
                color: isDarkMode ? 'white' : '#707070'
            }}
        >
            <Container maxWidth="md">
                <ThemeProvider theme = {theme}>
                    <Typography variant="h1" component="h1" className="animate__animated animate__fadeInDown">
                        {siteConfig.title}
                    </Typography>
                    <Typography variant="h5" component="p" sx={{ mt: 2 }} className="animate__animated animate__fadeInUp">
                        {siteConfig.tagline}
                    </Typography>
                </ThemeProvider>
                <Stack
                    sx={{ mt: 4 }}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                >
                    <Button
                        variant="contained"
                        sx={{ mt: 4 }}
                        color='primary'
                        component={RouterLink}
                        to="docs/tutorials/welcome"
                        startIcon={<SchoolIcon/>}
                    >
                    Explore Tutorials
                    </Button>
                    <Button
                        variant="contained"
                        sx={{ mt: 2, ml: 2, }}
                        color='primary'
                        component={RouterLink}
                        to="docs/projects/welcome"
                        endIcon={<AutoStoriesIcon/>}
                    >
                    View Projects
                    </Button>
                </Stack>
                <Button
                    variant="contained"
                    sx={{ mt: 2, ml: 2, }}
                    color='primary'
                    component={RouterLink}
                    to="docs/About Us"
                    endIcon={<Groups2RoundedIcon/>}
                    >
                About Us
                </Button>
            </Container>
        </Box>
    );
}

const PaperCard = ({ Header, Content, footerButton }) => (
    <div class="card">
        <div class="card__header text--center">
            <h3>{Header}</h3>
        </div>
        <div class="card__body text--center">
            <p>
                {Content}
            </p>
        </div>
        <div class="card__footer">
            {footerButton}
        </div>
    </div>
);

function ClubDetails() {

    const Buttons = {
        'about us': <Link class="button button--secondary button--block" to="/docs/About Us">See More</Link>,
        'join us': <Link class="button button--secondary button--block" to="https://discord.gg/WC2NdqYtDt">Discord</Link>,
        'our projects': <Link class="button button--secondary button--block" to="/docs/projects/welcome">Project Docs</Link>,
    };

    return (
        <Container sx={{ pb: 4 }}>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={4} >
                    <PaperCard Header={"About Us"} 
                    Content={"We are a student-led organization dedicated to exploring cloud computing and its applications through hands-on learning, projects, and industry connections."}
                    footerButton={Buttons['about us']} />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <PaperCard Header={"Join Us"} 
                    Content={"Open to all UMass Lowell students, faculty, and staff. Join us at our weekly meetings to learn, build, and connect."}
                    footerButton={Buttons['join us']}/>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <PaperCard Header={"Our Projects"} 
                    Content={"We work on our various projects including UniPath.io, UniBot, the UML-Now-CLI, react mui resume, and more. Contribute and gain practical experience."}
                    footerButton={Buttons['our projects']}/>
                </Grid>
            </Grid>
        </Container>
    );
}

function HomepageFeatures() {
    const Buttons = {
        'resources': <Link class="button button--secondary button--block" to="/docs/resources/welcome">Resources</Link>,
        'meetings': <Link class="button button--secondary button--block" to="/docs/current-schedule" >Meetings</Link>,
        'collaborative projects': <Link class="button button--secondary button--block" to="https://github.com/UMLCloudComputing">Github</Link>,
    };

    return (
        <Container sx={{ pb: 4 }}>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={4}>
                    <PaperCard Header={"Hands-On Learning"} 
                    Content={"Engage in hands-on learning experiences with cloud computing technologies like AWS, Docker, Kubernetes, and more."}
                    footerButton={Buttons['resources']}/>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <PaperCard Header={"Industry Connections"} 
                    Content={"Connect with industry professionals through guest lectures, workshops, and networking events."}
                    footerButton={Buttons['meetings']}/>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <PaperCard Header={"Collaborative Work"} 
                    Content={"Work on real-world projects and collaborate with peers to develop practical cloud computing skills."}
                    footerButton={Buttons['collaborative projects']}/>
                </Grid>
            </Grid>
        </Container>
    );
}

// const AvatarLarge = ({ Image, Name, Subtitle }) =>(
//     <div class="avatar">
//         <img 
//             class="avatar__photo avatar__photo--lg"
//             src={Image} />
//         <div class="avatar_intro">
//             <div class="avatar__name"> {Name} </div>
//             <small class="avatar__subtitle"> {Subtitle} </small>
//         </div>
//     </div>
// );

function Members() {
    return (
        <Box wrap="nowrap" sx={{ display: 'block', overflowX: 'auto', py:4, pl: 4, 
            '&::-webkit-scrollbar': {
                display: 'none',
            },
            '-ms-overflow-style': 'none',  // IE and Edge
            'scrollbar-width': 'none',  // Firefox
        }}>
            <Grid container wrap="nowrap">
                {members.map((member, idx) => {
                    return (
                        <Grid item key={idx} sx={{ minWidth: '430px' }}>
                            <AvatarLarge 
                                member={member}
                            />
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
}

export default function Home() {
    return (
        <Layout
            title={`Welcome`}
            description="Join the UMass Lowell Cloud Computing Club to explore the world of cloud computing."
        >
            <HomepageHeader />
            <main>
                <Members />
                <ClubDetails />
                <HomepageFeatures />
            </main>
        </Layout>
    );
}
