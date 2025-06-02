
// React
import React, { useEffect, useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import { useColorMode } from '@docusaurus/theme-common';
import 'animate.css';
// MUI
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { createTheme,responsiveFontSizes } from '@mui/material';

// Local
import Layout from '@theme/Layout';
import { ThemeProvider } from '@emotion/react';

import members from "@site/static/meta_data/members_meta/members.json";
import cards_data from "@site/static/meta_data/cards_meta/cards_data.json";

import AvatarLarge from "../components/AvatarLarge";
import PaperCard from '../components/PaperCard';

// OIDC authentication context
import { useAuth } from "react-oidc-context";

let theme = createTheme();
theme = responsiveFontSizes(theme);


// Max index value exclusive [min, max)
function getRandInRange(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// Message pool for custom message on authenticated session
const choices = ["Howdy", "Hello", "Hola", "Bonjour", "नमस्ते", "こんにちは", "Hei", "Hallo", "Salut", "Hej", "Hai", "Bok", "Ndewo", "నమస్తే", "سلام"];
const index = getRandInRange(0, choices.length);

function HomepageHeader() {
    const auth = useAuth();

    const { siteConfig } = useDocusaurusContext();
    const { colorMode } = useColorMode();
    const isDarkMode = colorMode === 'dark';

    const [gradientAngle, setGradientAngle] = useState(0); // Initial gradient angle
    let authenticated_message;
    if (auth.isAuthenticated) 
        authenticated_message = choices[index] + " " + auth.user?.profile.name;
    else 
        authenticated_message = siteConfig.tagline;

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
                <img src='/img/club-logo.png' alt='Club Logo' className="landing-logo"/>
                <ThemeProvider theme = {theme}>
                    <h1 style={{fontSize: '7.4vh'}} className="animate__animated animate__fadeInDown hero__title">
                        {siteConfig.title}
                    </h1>
                    <h5 style={{fontSize: '3.0vh'}} sx={{ mt: 2 }} className="animate__animated animate__fadeInUp hero__subtitle">
                        {authenticated_message}
                    </h5>
                    <h6></h6>
                </ThemeProvider>
                <Stack
                    sx={{ mt: 4 }}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}>
                    <Link to="https://discord.gg/WC2NdqYtDt" class="button button--primary button--lg">Discord</Link>
                    <Link to="https://github.com/UMLCloudComputing" class="button button--primary button--outline button--lg">Github</Link>
                </Stack>
            </Container>
        </Box>
    );
}

function InfoCards() {
    return (
        <Box wrap="nowrap" sx={{ display: 'block', overflowX: 'auto', py:6, pl: 4, 
            '&::-webkit-scrollbar': {
                display: 'none',
            },
            '-ms-overflow-style': 'none',  // IE and Edge
            'scrollbar-width': 'none',  // Firefox
        }}>
            <Grid container spacing={4} wrap="nowrap">
                {cards_data.map((card, idx) => {
                    return (
                        <Grid item key={idx} sx={{ minWidth: '320px' }}>
                            <PaperCard 
                                Header={card.header} 
                                Content={card.content}
                                footerButtonLink={card.footerButton_link}
                                footerButtonTitle={card.footerButton_title}
                            /> 
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
    );
}

function Members() {
    return (
        <Box wrap="nowrap" sx={{ display: 'block', overflowX: 'auto', py:6, pl: 4, 
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

const LandingPageUniBotiFrame = () => (
    <div class="hero shadow--lw">
        <div class="container">
            <h1 class="hero__title unibot_theme_hero_text">UniBot</h1>
            <p class="hero__subtitle">For all your UML Questions</p>
            <div style={{paddingBottom: '25px'}}>
                <Link to="https://github.com/UMLCloudComputing/UniBot" class="button button--secondary button--outline button--lg" >GitHub</Link>
            </div>
            <div>
                <iframe
                    src="https://unibotio.streamlit.app?embed=true"
                    class="iframe_container"
                >UniBot iFrame</iframe>
            </div>
        </div>
    </div>
);

const LandingPageImmersion = () => (
    <div class="hero shadow--lw">
        <div class="container">
            <h1 class="hero__title immersion_theme_hero_text">Immersion</h1>
            <p class="hero__subtitle">College Campus Club data synchronization to Discord</p>
            <div style={{paddingBottom: '10px'}}>
                <Link to="https://github.com/UMLCloudComputing/immersion" class="button button--secondary button--outline button--lg" >GitHub</Link>
            </div>
            <div style={{paddingBottom: '25px'}}>
                <Link to="https://github.com/UMLCloudComputing/immersion-dashboard" class="button button--secondary button--outline button--lg" >Dashboard GitHub</Link>
            </div>
            {/* <div>
                <iframe
                    src="https://immersion.umlcloudcomputing.org/"
                    class="iframe_container"
                >Immersion iFrame</iframe>
            </div> */}
        </div>
    </div>
);

const LandingPageUMLClassResources = () => (
    <div class="hero shadow--lw">
        <div class="container">
            <h1 class="hero__title classResources_theme_hero_text">UML Class Resources</h1>
            <p class="hero__subtitle">Academic Resources<br/>For Students, by Students</p>
            <div style={{paddingBottom: '25px'}}>
                <Link to="https://github.com/UMLCloudComputing/UML-Class-Resources" class="button button--secondary button--outline button--lg" >GitHub</Link>
            </div>
        </div>
    </div>
);

const LandingPageAttendanceBot = () => (
    <div class="hero shadow--lw">
        <div class="container">
            <h1 class="hero__title ">Attendance Bot</h1>
            <p class="hero__subtitle">Discord Attendance Bot for event tracking<br/>Powered by the Cloud.</p>
            <div style={{paddingBottom: '25px'}}>
                <Link to="https://github.com/UMLCloudComputing/attendance" class="button button--secondary button--outline button--lg" >GitHub</Link>
            </div>
        </div>
    </div>
);

export default function Home() {
    return (
        <Layout
            title={`Welcome`}
            description="Join the UMass Lowell Cloud Computing Club to explore the world of cloud computing."
        >
            <HomepageHeader />
            <main>
                <Members />
                <LandingPageImmersion />
                <InfoCards/>
                <LandingPageUniBotiFrame />
                <br/>
                <LandingPageAttendanceBot />
                <br/>
                <LandingPageUMLClassResources />
            </main>
        </Layout>
    );
}
