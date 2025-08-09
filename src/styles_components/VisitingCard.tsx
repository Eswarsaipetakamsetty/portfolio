import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import "../styles/VisitingCard.css"
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si"

const VisitingCard = () => {
    return (
        <div className="visiting-card-container">
            <p className="bio">Experienced Backend Developer with Hands on knowledge in building
                 Scalable systems</p>
            <div className="icons-buttons-wrapper">
                <div className="icons-wrapper">
                    <a href="https://www.linkedin.com/in/eswar-sai-petakamsetty-25a1b8280/" 
                        target="_blank"
                        className="social-icon"
                    >
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/Eswarsaipetakamsetty"
                        target="_blank" 
                        className="social-icon"
                    >
                        <FaGithub />
                    </a>
                    <a href="https://leetcode.com/u/Eswar_Sai2005/" 
                        className="social-icon"
                        target="_blank"
                    >
                        <SiLeetcode />
                    </a>
                    <a href="https://www.geeksforgeeks.org/user/eswarsai879v/" 
                        className="social-icon"
                        target="_blank"
                    >
                        <SiGeeksforgeeks />
                    </a>
                    <a href="https://www.instagram.com/_eshwar.xx_/" 
                        className="social-icon"
                        target="_blank"
                    >
                        <FaInstagram />
                    </a>
                </div>
                <div className="button-wrapper">
                    <a href="https://drive.google.com/file/d/15SXb8T_1v_Yr-Rt2N-M9-ALxf_B2wV3X/view?usp=sharing" 
                        className="resume-button"
                        target="_blank"
                    >
                        Resume
                    </a>
                </div>
            </div>
        </div>
    )
}

export default VisitingCard