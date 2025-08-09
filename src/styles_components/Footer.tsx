import { BsHeartFill } from "react-icons/bs"
import "../styles/Footer.css"

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="foot-wrap">
                <span className="name">ESWAR SAI</span>
                <span className="des">Made with <BsHeartFill color="red" size={15}/> in Visakhapatnam</span>
            </div>
            <h1 className="footer-heading">THANK YOU</h1>
        </div>
    )
}

export default Footer