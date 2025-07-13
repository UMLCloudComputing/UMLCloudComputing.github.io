import { useAuth } from 'react-oidc-context';

export default function ProfileHero () {
    const auth = useAuth();
    let username = auth.user?.profile.name;
    let picture = auth.user?.profile.picture;
    return (
        <div className="hero shadow--lw">
            <div className="container">
                <h1 className="hero__title">Your Account</h1>
                <br/>
                <div className="avatar">
                <a
                    className="avatar__photo-link avatar__photo avatar__photo--lg"
                    href={picture}>
                    <img 
                    alt={username}
                    src={picture} />
                </a>
                <div className="avatar__intro">
                    <div className="hero__subtitle">{username}</div>
                </div>
                </div>
            </div>
        </div>
    );
}