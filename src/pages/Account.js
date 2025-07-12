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

function EditProfile() {
    return (
        <div>
            <h1>Edit your Profile</h1>
            <div class="pagination-nav">
                <div class="pagination-nav__item">
                    <a class="pagination-nav__link" href="">
                        <div class="pagination-nav__sublabel">Edit</div>
                        <div class="pagination-nav__label">Profile Picture 📸</div>
                    </a>
                </div>
                <div class="pagination-nav__item">
                    <a class="pagination-nav__link" href="">
                        <div class="pagination-nav__sublabel">Edit</div>
                        <div class="pagination-nav__label">User Name 起</div>
                    </a>
                </div>
                <div class="pagination-nav__item">
                    <a class="pagination-nav__link" href="">
                        <div class="pagination-nav__sublabel">Change</div>
                        <div class="pagination-nav__label">Password 🔒</div>
                    </a>
                </div>
            </div>
            <br/>
            <br/>
        </div>
    );
}

function AccessCoder() {
    return (
        <div>
            <h1>Resources</h1>
            <nav class="pagination-nav">
                <div class="pagination-nav__item">
                    <a class="pagination-nav__link" href="https://coder.umlcloudcomputing.org">
                        <div class="pagination-nav__sublabel">Access</div>
                        <div class="pagination-nav__label">Coder Cloud Development Environment</div>
                    </a>
                </div>
            </nav>
            <br/>
            <br/>
        </div>
    );
}

function UnconfirmedEmailWarning() {
    const auth = useAuth();
    let emailConfirmed = auth.user?.profile.email_verified;
    if (!emailConfirmed) {
        return (
            <div>
                <br/>
                <div class="alert alert--warning" role="alert">
                    Your email is <strong>unconfirmed</strong>. Please check your email to validate your credentials!
                </div>
            </div>
        );
    }
}

export default function AccountPage() {
    return (
        <Layout
            title={`Account Settings`}
            description="Configure your Account settings"
        >
            <ProfileHero/>
            <div class="container">
                <UnconfirmedEmailWarning/>
                <br/>
                <EditProfile/>
                <AccessCoder/>
            </div>
        </Layout>
    );
}