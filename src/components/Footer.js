import React from 'react' 

import gitHubLogo from '../../githubwhite.png'
import linkedInLogo from '../../LinkedIn_logo_initials.png'
import footerStyles from './footer.module.css'

function Footer(props) {
    return (
        <div className={footerStyles.logoContainer}>
            <img className={footerStyles.logos} src={gitHubLogo}/>
            <img className={footerStyles.logos} src={linkedInLogo}/>

        </div>
    )
}

export default Footer