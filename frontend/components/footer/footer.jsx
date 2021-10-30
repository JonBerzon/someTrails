import React from "react";
import logo from '../../../images/logo_only.png';
import git from '../../../images/icons/git.png';
import linked from '../../../images/icons/linked.png';
import angel from '../../../images/icons/angel.png';

class Footer extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <footer className="footer">
                <div className="footer-flex">
                    <div className="left-footer">
                        <img className="footer-logo" src={logo} alt="" />
                        <p className="footer-title">SomeTrails</p>
                    </div>
                    <div className="right-footer">
                        <a href="https://github.com/JonBerzon/someTrails" target="_blank"><img className="git-logo" src={git} /></a>
                        <a href="https://www.linkedin.com/feed/" target="_blank"><img className="linked-logo" src={linked} /></a>
                        <a href="#" target="_blank"><img className="angel-logo" src={angel} /></a>
                    </div>
                </div>
            </footer>
            
        )
    }

}

export default Footer;