import React from "react";


function Nav() {
    return (
        <div>
            <Navbar color="dark" light expand="md">
                <NavbarBrand href="/">Google Books</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">Search</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/">Saved</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}
export default Nav;