import React from 'react';
import Link from "@docusaurus/Link";
import { Backdrop, Modal, Fade, Box } from "@mui/material";

function MemberCard ({ ProfileImage, Name, Subtitle, Details, ButtonLink, ButtonTitle }) {
    return (
        <>
            <div className="card__header">
                <div className="avatar avatar--vertical">
                    <img 
                        className='avatar__photo avatar__photo--xl'
                        src={ProfileImage} 
                    />
                    <div className="avatar__intro">
                        <br/>
                        <div className="avatar__name">{Name}</div>
                        <small className="avatar__subtitle">{Subtitle}</small>
                    </div>
                </div>
            </div>
            <div className="card__body member_modal_body">
                <small>
                    {Details}
                </small>
            </div>
            <div className="card__footer">
                <Link className="button button--secondary button--block" to={ButtonLink}>{ButtonTitle}</Link>
            </div>
        </>
    );
}


function AvatarLarge({ member }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    let buttonLink = member.github;
    let buttonTitle = "Github";
    
    return (
    <div>
        <div className="avatar" onClick={handleOpen}>
            <img 
                className="avatar__photo avatar__photo--lg"
                src={member.profile_image} />
            <div className="avatar_intro">
                <div className="avatar__name"> {member.name} </div>
                <small className="avatar__subtitle"> {member.subtitle} </small>
            </div>
        </div>
        <Modal
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            open={open}
            disableScrollLock
            onClose={handleClose}
            closeAfterTransition
            style={{ backdropFilter: 'blur(5px)' }}
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
        >
            <Fade in={open}>
                <Box className="card" sx={{
                    position:'absolute',
                    width: '300px',
                    minHeight: '350px',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    boxShadow: 25,
                 }}>
                    <MemberCard
                        ProfileImage={member.profile_image}
                        Name={member.name}
                        Subtitle={member.subtitle}
                        Details={member.details}
                        ButtonLink={buttonLink}
                        ButtonTitle={buttonTitle}  
                    />
                </Box>
            </Fade>
        </Modal>
    </div>
    );
};

export default AvatarLarge;