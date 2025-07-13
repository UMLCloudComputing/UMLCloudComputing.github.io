import Layout from '@theme/Layout';
import { useAuth } from 'react-oidc-context';
import ProfileHero from '../components/profileHero';
import Link from '@docusaurus/Link';

function EditProfile() {
    return (
        <div>
            <h1>Edit your Profile</h1>
            <div class="pagination-nav">
                <div class="pagination-nav__item">
                    <Link class="pagination-nav__link" to="/account_configuration/newProfilePicture">
                        <div class="pagination-nav__sublabel">Edit</div>
                        <div class="pagination-nav__label">Profile Picture 📸</div>
                    </Link>
                </div>
                <div class="pagination-nav__item">
                    <Link class="pagination-nav__link" to="/newUsername">
                        <div class="pagination-nav__sublabel">Edit</div>
                        <div class="pagination-nav__label">User Name 起</div>
                    </Link>
                </div>
                <div class="pagination-nav__item">
                    <Link class="pagination-nav__link" to="/newPassword">
                        <div class="pagination-nav__sublabel">Change</div>
                        <div class="pagination-nav__label">Password 🔒</div>
                    </Link>
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
                    <Link class="pagination-nav__link" to="https://coder.umlcloudcomputing.org">
                        <div class="pagination-nav__sublabel">Access</div>
                        <div class="pagination-nav__label">Coder Cloud Development Environment</div>
                    </Link>
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