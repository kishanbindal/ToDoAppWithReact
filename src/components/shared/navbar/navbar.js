import { Component } from "react";
// import { Outlet } from "react-router-dom";
import CollapsibleNavbarMenu from "./collapsibleMenu";

class  AppNavbar extends Component{

    constructor(props){
        super(props);
        this.state = {
            isMobileScreen : window.screen.availWidth < 768 ? true : false,
            collapseMenuOpen: false,
            toggleMenuClass: "hide ",
        }
        this.handleScreenSizeChange = this.handleScreenSizeChange.bind(this);
        this.handleCollapseMenuToggle = this.handleCollapseMenuToggle.bind(this);
        window.addEventListener('resize', this.handleScreenSizeChange);
    }

    handleScreenSizeChange(){
        this.setState({isMobileScreen: window.screen.availWidth < 768 ? true : false});
    }

    async handleCollapseMenuToggle(){
        if(this.state.isMobileScreen){
            await this.setState({
                collapseMenuOpen: this.state.collapseMenuOpen === false ? true : false,
            });
            await this.setState({
                toggleMenuClass: this.state.collapseMenuOpen ? "" : "hide"
            })
        }else{
            console.log("No need for collapseible menu configuration");
        }
    }

    render() {
        return(
            <>
            <nav className="row appNavbar py-3">
                <div className="col-4">
                    Some Logo goes here
                </div>
                <div className="col-8 d-flex justify-content-end align-items-center">
                    <CollapsibleNavbarMenu 
                        isMobileScreen={this.state.isMobileScreen}
                        isCollapseMenuOpen={this.state.collapseMenuOpen}
                        toggleCollapseMenu={this.handleCollapseMenuToggle}
                        displayCollapseMenuClass={this.state.toggleMenuClass}
                    />
                </div>
            </nav>
            </>

    )}
}

export default AppNavbar;