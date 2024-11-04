
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

import members from "@site/static/meta_data/members_meta/members.json";
import cards_data from "@site/static/meta_data/cards_meta/cards_data.json";

import AvatarLarge from "../components/AvatarLarge";
import PaperCard from '../components/PaperCard';

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
                    <h1 style={{fontSize: '7.4vh'}} className="animate__animated animate__fadeInDown hero__title">
                        {siteConfig.title}
                    </h1>
                    <h5 style={{fontSize: '3.0vh'}} sx={{ mt: 2 }} className="animate__animated animate__fadeInUp hero__subtitle">
                        {siteConfig.tagline}
                    </h5>
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
                <Link to="https://github.com/UMLCloudComputing/UniBot" class="button button--secondary button--outline button--lg" >Github</Link>
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

export default function Home() {
    return (
        <Layout
            title={`Welcome`}
            description="Join the UMass Lowell Cloud Computing Club to explore the world of cloud computing."
        >
            <HomepageHeader />
            <main>
                <Members />
                <LandingPageUniBotiFrame />
                <InfoCards/>
            </main>
        </Layout>
    );
}
