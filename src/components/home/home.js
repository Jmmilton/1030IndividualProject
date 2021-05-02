import React from "react";
import Header from "../header/header";
import Nav from "../nav/nav"
import About from "../about/about";
import '../../style.css';




class Home extends React.Component {
    constructor () {
        super();
        this.state = {
            showNav: false,
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.showNav);
    };
  
    componentWillUnmount() {
      window.removeEventListener('scroll', this.showNav);
    };

    showNav = () => {
        const pagePosition = window.pageYOffset;
        if (pagePosition > 440) {
            this.setState({
                showNav: true
            })
        } else {
            this.setState({
                showNav: false
            })
        }
    }

    render() {
        return (
            <div>
            <Header />
            <Nav extraClass={this.state.showNav ? '' : 'hidden'} />
            <About />
        </div>
        );
    }
};

export default Home;