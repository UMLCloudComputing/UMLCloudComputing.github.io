import ProfileHero from "../../components/profileHero";
import Layout from '@theme/Layout';

export default function newProfilePicturePage() {
    return (
        <Layout
            title={`Edit Profile Picture`}
            description="Edit your profile picture"
        >
            
            <ProfileHero/>
            <div class="container">
            </div>
        </Layout>
    );
}