import type React from "react"
import "../styles/NavbarOptions.css"

interface NavbarOption {
    label: string
    ref: string
}

interface NavbarOptionProps {
    options: NavbarOption[]
}
const NavbarOptions: React.FC<NavbarOptionProps> = ({options}) => {
    return (
        <nav className="navbar">
        {options.map((option) => (
            <a
            key={option.label}
            href={option.ref}
            className={`nav-button`}
            >
            {option.label}
            </a>
        ))}
        </nav>
    )
}

export default NavbarOptions