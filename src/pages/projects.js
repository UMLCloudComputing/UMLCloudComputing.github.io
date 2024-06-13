import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Projects() {
    return (
        <Layout title="Projects" description="Projects created by the UML Cloud Computing Club">
            <div className="container margin-vert--lg">
                <div className="row">
                    <div className="col col--12">
                        <h1>Courses</h1>
                        <p>Welcome to the UML Cloud Computing Club Courses page. Below are the courses available:</p>
                        <ul>
                            <li>
                                <Link to="/docs/intro">Introduction to Cloud Computing</Link>
                            </li>
                            <li>
                                <Link to="/docs/intro">Advanced Cloud Computing</Link>
                            </li>
                            <li>
                                <Link to="/docs/intro">AWS Essentials</Link>
                            </li>
                            <li>
                                <Link to="/docs/intro">Docker and Containerization</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
