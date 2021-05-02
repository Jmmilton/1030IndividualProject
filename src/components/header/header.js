import React from "react";
// import "./header.css"

class Header extends React.Component {
    constructor () {
        super();
        this.state = {
            showArrow: true,
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.hideArrow);
    };
  
    componentWillUnmount() {
      window.removeEventListener('scroll', this.hideArrow);
    };

    hideArrow = () => {
        const pagePosition = window.pageYOffset;
        if (pagePosition > 400) {
            this.setState({
                showArrow: false
            })
        } else {
            this.setState({
                showArrow: true
            })
        }
    }

    render() {
        return (
            <>
                <main>
                    <header className="header">
                        <div className="header-main">
                            <h1 className="first animate__animated animate__fadeInLeft animate__delay-0.5s">Jason</h1>
                        </div>
                        <div className="header-main-2">
                            <h1 className="last animate__animated animate__fadeInRight animate__delay-0.5s">Milton</h1>
                        </div>
                        <div>
                            <h2>- Front-End Developer -</h2>
                        </div>
                        <div className="header-sub">
                          <p>Learn more about what I do</p>
                        </div>
                    </header>
                    <div className={this.state.showArrow ? 'arrow' : 'arrow hide-arrow'}>
                        <span className="arrow-span" />
                        <span className="arrow-span" />
                        <span className="arrow-span" />
                    </div>
                </main>
            </>
        );
    }
};

export default Header;