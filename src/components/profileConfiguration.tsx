import Auth from 'aws-amplify';

async function updateProfilePicture(pictureLink) {
    const user = await Auth.currentAuthenticatedUser();
    await Auth.updateUserAttributes(user, {
        'picture': pictureLink
    });
}

async function updateUsername(newUsername) {
    const user = await Auth.currentAuthenticatedUser();
    await Auth.updateUserAttributes(user, {
        'preferred_username': newUsername
    });
}

