import React from 'react';
import { Box, Container, Typography, Button, Grid, Paper } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import 'animate.css';

import { useColorMode } from '@docusaurus/theme-common';

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    const { colorMode } = useColorMode();
    const isDarkMode = colorMode === 'dark';
    console.log("colorMode: ", colorMode);
    return (
        <Box
            component="header"
            sx={{
                backgroundImage: `url('/img/logo_icon.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'white',
                textAlign: 'center',
                py: 10,
            }}
        >
            <Container maxWidth="md">
                <Typography variant="h1" component="h1" className="animate__animated animate__fadeInDown">
                    {siteConfig.title}
                </Typography>
                <Typography variant="h5" component="p" sx={{ mt: 2 }} className="animate__animated animate__fadeInUp">
                    {siteConfig.tagline}
                </Typography>
                <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    sx={{ mt: 4 }}
                    component={RouterLink}
                    to="/docs/intro"
                >
                    Explore Docs
                </Button>
            </Container>
        </Box>
    );
}

function ClubDetails() {
    return (
        <Container sx={{ py: 8 }} maxWidth="lg">
            <Grid container spacing={4}>
                <Grid item xs={12} sm={4}>
                    <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
                        <Typography variant="h6">About Us</Typography>
                        <Typography>
                            We are a student-led organization dedicated to exploring cloud computing and its applications through
                            hands-on learning, projects, and industry connections.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
                        <Typography variant="h6">Join Us</Typography>
                        <Typography>
                            Open to all UMass Lowell students, faculty, and staff. Join us at our weekly meetings to learn, build, and
                            connect.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
                        <Typography variant="h6">Our Projects</Typography>
                        <Typography>
                            We work on various projects including UniPath.io, AWS Essentials, and Docker containerization. Contribute
                            and gain practical experience.
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}

function HomepageFeatures() {
    return (
        <Container sx={{ py: 8 }} maxWidth="lg">
            <Grid container spacing={4}>
                <Grid item xs={12} sm={4}>
                    <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
                        <Typography variant="h6">Hands-On Learning</Typography>
                        <Typography>
                            Engage in hands-on learning experiences with cloud computing technologies like AWS, Docker, and more.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
                        <Typography variant="h6">Industry Connections</Typography>
                        <Typography>
                            Connect with industry professionals through guest lectures, workshops, and networking events.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
                        <Typography variant="h6">Collaborative Projects</Typography>
                        <Typography>
                            Work on real-world projects and collaborate with peers to develop practical cloud computing skills.
                        </Typography>
                    </Paper>
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
                <ClubDetails />
                <HomepageFeatures />
            </main>
        </Layout>
    );
}
