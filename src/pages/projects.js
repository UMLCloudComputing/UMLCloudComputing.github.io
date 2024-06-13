import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Courses() {
    return (
        <Layout title="Courses" description="Courses offered by the UML Cloud Computing Club">
            <div className="container margin-vert--lg">
                <div className="row">
                    <div className="col col--12">
                        <h1>Courses</h1>
                        <p>Welcome to the UML Cloud Computing Club Courses page. Below are the courses available:</p>
                        <ul>
                            <li>
                                <Link to="/docs/course1">Introduction to Cloud Computing</Link>
                            </li>
                            <li>
                                <Link to="/docs/course2">Advanced Cloud Computing</Link>
                            </li>
                            <li>
                                <Link to="/docs/course3">AWS Essentials</Link>
                            </li>
                            <li>
                                <Link to="/docs/course4">Docker and Containerization</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
