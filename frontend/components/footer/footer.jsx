import React from "react";

class Footer extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <footer className="footer">
                <div className="footer-flex">
                    <div className="left-footer">
                        <img className="footer-logo" src={window.logo} alt="" />
                        <p className="footer-title">SomeTrails</p>
                    </div>
                    <div className="right-footer">
                        <a href="https://github.com/JonBerzon/someTrails" target="_blank"><img className="git-logo" src={window.git} /></a>
                        <a href="https://www.linkedin.com/feed/" target="_blank"><img className="linked-logo" src={window.linked} /></a>
                        <a href="#" target="_blank"><img className="angel-logo" src={window.angel} /></a>
                    </div>
                </div>
            </footer>
            
        )
    }

}

export default Footer;