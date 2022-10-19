import { Component } from "react";
import { Link } from 'react-router-dom'

class CollapsibleNavbarMenu extends Component{

    constructor(props){
        super(props);
        this.handleCollapseToggle = this.handleCollapseToggle.bind(this);
    }

    handleCollapseToggle(){
        this.props.toggleCollapseMenu();
    }

    render(){
        if (this.props.isMobileScreen){
            return(
                <div>
                    <span 
                        className={`${this.props.isCollapseMenuOpen ? "fa fa-close" : "fa fa-bars"} p-2 hamburger`}
                        onClick={this.handleCollapseToggle}>
                     </span>
                    
                    <div className={`collapse ${this.props.displayCollapseMenuClass}`} onClick={this.handleCollapseToggle}>
                        <div className={`collapse-menu`}>
                            <div>
                                <Link to={''}>View Todos</Link>
                            </div>
                            <div>
                            <Link to={'add/'}>Add Todo</Link>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return(
            <div className="row">
                <div className="col">
                    <Link to={''}>View Todos</Link>
                </div>
                <div className="col">
                    <Link to={'add/'}>Add Todo</Link>
                </div>
            </div>
        )}
    }
}

export default CollapsibleNavbarMenu