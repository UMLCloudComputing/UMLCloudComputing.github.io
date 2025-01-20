import Layout from '@theme/Layout';
import { useAuth } from 'react-oidc-context';


function ProfileHero () {
    const auth = useAuth();
    let username = auth.user?.profile.name;
    let picture = auth.user?.profile.picture;
    return (
        <div class="hero shadow--lw">
            <div class="container">
                <h1 class="hero__title">Your Account</h1>
                <br/>
                <div class="avatar">
                <a
                    class="avatar__photo-link avatar__photo avatar__photo--lg"
                    href={picture}>
                    <img 
                    alt={username}
                    src={picture} />
                </a>
                <div class="avatar__intro">
                    <div class="hero__subtitle">{username}</div>
                </div>
                </div>
            </div>
        </div>
    );
}

function AccessCoder() {
    let message = "Coder Cloud Development Environment";
    return (
        <a class="button button--primary button--lg" href='https://coder.umlcloudcomputing.org'><i href="https://avatars.githubusercontent.com/u/95932066?s=48&v=4"/>{message}</a>
    );
}

export default function AccountPage() {
    return (
        <Layout
            title={`Account Settings`}
            description="Configure your Account settings"
        >
            <ProfileHero/>
            <div class="alert alert--info" role="alert">This page is currently being developed, please pardon the mess!</div>
            <AccessCoder/>
        </Layout>
    );
}