import React from 'react'
import { FaFacebookF, FaGithub, FaLinkedin } from 'react-icons/fa'

const SocialMedia = () => {
    return (
        <div className="app__social">
            <a href="https://www.linkedin.com/in/jbailey94/">
                <div>
                    <FaLinkedin />
                </div>
            </a>
            <a href="https://github.com/JBailey94">
                <div>
                    <FaGithub />
                </div>
            </a>
            <a href="https://www.facebook.com/jesse.bailey.779205/">
                <div>
                    <FaFacebookF />
                </div>
            </a>
        </div>
    );
};

export default SocialMedia