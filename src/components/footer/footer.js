import React, { Fragment } from "react";
// import "./footer.css"


class Footer extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section className="footer">
                    <footer className="footer-top">
                        <hr className={"footer-hr"} />
                        <div>
                            <a href="https://www.facebook.com" className="fb-ic icons">
                                <i className="fab fa-facebook-f fa-lg white-text footer-icon" />
                            </a>
                            <a href="https://www.twitter.com" className="tw-ic icons">
                                <i className="fab fa-twitter fa-lg white-text footer-icon" />
                            </a>
                            <a href="https://github.com/Jmmilton" className="gplus-ic icons">
                                <i className="fab fa-google-plus-g fa-lg white-text footer-icon" />
                            </a>
                            <a href="https://www.linkedin.com/in/jasonmmilton/" className="li-ic icons">
                                <i className="fab fa-linkedin-in fa-lg white-text footer-icon" />
                            </a>
                            <a href="https://github.com/Jmmilton" className="gh-ic icons">
                                <i className="fab fa-github fa-lg white-text footer-icon" />
                            </a>
                        </div>
                        <h6 className="footer-bottom">Jason Milton ™</h6>
                    </footer>
                </section>
            </React.Fragment>
        )
    }
}

export default Footer;