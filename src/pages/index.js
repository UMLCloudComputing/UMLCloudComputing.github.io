
// React
import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useColorMode } from '@docusaurus/theme-common';
import 'animate.css';

// MUI
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import SchoolIcon from '@mui/icons-material/School';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

// Local
import Layout from '@theme/Layout';

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    const { colorMode } = useColorMode();
    const isDarkMode = colorMode === 'dark';
    
    const [gradientAngle, setGradientAngle] = useState(0); // Initial gradient angle

    useEffect(() => {
        const intervalId = setInterval(() => {
          setGradientAngle((prevAngle) => (prevAngle + 0.2));
        }, 30); // Change image every 15 seconds
    
        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);

    return (
        <Box
            component="header"
            sx={{
                // backgroundImage: `url(${images[currentImageIndex]})`,
                backgroundImage: isDarkMode ? `linear-gradient(${gradientAngle}deg, #534666, #CD7672)` : `linear-gradient(${gradientAngle}deg, #9dcbfc, white)`,
                borderRadius: '16px',
                filter: isDarkMode ? 'drop-shadow(0 0.4rem 0.3rem rgba(123, 123, 123, 0.5))' : 'drop-shadow(0 0.4rem 0.3rem rgba(0,0,0,0.5))',
                transition: 'background-image 0.5s ease', // smooth transition 
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'white',
                textAlign: 'center',
                py: 10,
                // bgcolor: isDarkMode ? 'grey.900' : 'primary.main',
            }}
        >
            <Container maxWidth="md">
                <Typography variant="h1" component="h1" className="animate__animated animate__fadeInDown" color={isDarkMode ? 'white' : '#707070'}>
                    {siteConfig.title}
                </Typography>
                <Typography variant="h5" component="p" sx={{ mt: 2 }} className="animate__animated animate__fadeInUp" color={isDarkMode ? 'white' : '#707070'}>
                    {siteConfig.tagline}
                </Typography>
                <Stack
                    sx={{ mt: 4 }}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                >
                    <Button
                        variant="contained"
                        size="large"z
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
                        size="large"
                        sx={{ mt: 2, ml: 2, }}
                        color='primary'
                        component={RouterLink}
                        to="docs/projects/welcome"
                        endIcon={<AutoStoriesIcon/>}
                    >
                        View Projects
                    </Button>
                </Stack>
            </Container>
        </Box>
    );
}

const PaperCard = ({ children, isDarkMode }) => (
    <Paper
        elevation={3}
        sx={{
            p: 3,
            textAlign: 'center',
            bgcolor: isDarkMode ? 'grey.800' : 'background.paper',
            color: isDarkMode ? 'white' : 'text.primary',
            height: '100%',
            borderRadius: '16px',
        }}
    >
        {children}
    </Paper>
);

function ClubDetails() {
    const { colorMode } = useColorMode();
    const isDarkMode = colorMode === 'dark';

    return (
        <Container sx={{ py: 8 }} maxWidth="lg">
            <Grid container spacing={4} >
                <Grid item xs={12} sm={4} >
                    <PaperCard isDarkMode={isDarkMode}>
                        <Typography variant="h6">About Us</Typography>
                        <Typography>
                            We are a student-led organization dedicated to exploring cloud computing and its applications through hands-on learning, projects, and industry connections.
                        </Typography>
                    </PaperCard>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <PaperCard isDarkMode={isDarkMode}>
                        <Typography variant="h6">Join Us</Typography>
                        <Typography>
                            Open to all UMass Lowell students, faculty, and staff. Join us at our weekly meetings to learn, build, and connect.
                        </Typography>
                    </PaperCard>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <PaperCard isDarkMode={isDarkMode}>
                        <Typography variant="h6">Our Projects</Typography>
                        <Typography>
                            We work on various projects including UniPath.io, AWS Essentials, and Docker containerization. Contribute and gain practical experience.
                        </Typography>
                    </PaperCard>
                </Grid>
            </Grid>
        </Container>
    );
}

function HomepageFeatures() {
    const { colorMode } = useColorMode();
    const isDarkMode = colorMode === 'dark';

    return (
        <Container sx={{ py: 8 }} maxWidth="lg">
            <Grid container spacing={4}>
                <Grid item xs={12} sm={4}>
                    <PaperCard isDarkMode={isDarkMode}>
                        <Typography variant="h6">Hands-On Learning</Typography>
                        <Typography>
                            Engage in hands-on learning experiences with cloud computing technologies like AWS, Docker, and more.
                        </Typography>
                    </PaperCard>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <PaperCard isDarkMode={isDarkMode}>
                        <Typography variant="h6">Industry Connections</Typography>
                        <Typography>
                            Connect with industry professionals through guest lectures, workshops, and networking events.
                        </Typography>
                    </PaperCard>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <PaperCard isDarkMode={isDarkMode}>
                        <Typography variant="h6">Collaborative Projects</Typography>
                        <Typography>
                            Work on real-world projects and collaborate with peers to develop practical cloud computing skills.
                        </Typography>
                    </PaperCard>
                </Grid>
            </Grid>
        </Container>
    );
}

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`Welcome`}
            description="Join the UMass Lowell Cloud Computing Club to explore the world of cloud computing."
        >
            <HomepageHeader />
            <main>
                <Typography variant="h4" align="center" sx={{ mt: 8 }}>
                    Welcome to the UML Cloud Computing Club 🚀
                </Typography>
                <ClubDetails />
                <HomepageFeatures />
            </main>
        </Layout>
    );
}
