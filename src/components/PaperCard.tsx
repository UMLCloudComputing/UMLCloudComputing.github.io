import React from 'react';
import Link from "@docusaurus/Link";

const PaperCard = ({ Header, Content, footerButtonLink, footerButtonTitle }) => (
    <div className="card papercard">
        <div className="card__header text--center">
            <h3>{Header}</h3>
        </div>
        <div className="card__body text--center">
            <p>
                {Content}
            </p>
        </div>
        <div className="card__footer">
             <Link className="button button--secondary button--block" to={footerButtonLink}>{footerButtonTitle}</Link>
        </div>
    </div>
);

export default PaperCard;