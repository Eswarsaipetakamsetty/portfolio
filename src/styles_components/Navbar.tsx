import NavbarOptions from "./NavbarOptions"


const Navbar = () => {

    const navItems = [
        {label: "Home", ref: "#home"},
        {label: "Projects", ref: "#projects"},
        {label: "About Me", ref: "#aboutme"}
    ]

    return (
        <NavbarOptions
            options={navItems}
        />
    )
}

export default Navbar