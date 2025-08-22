import "./Home.css"
import TextType from "../../styles_components/TypeText"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import TextCarousel from "../../styles_components/TextCarousel"
import ScaleUpText from "../../styles_components/ScaleUpText"
import EswarsaiImage from "../../assets/Eswar_Sai.jpg"

const Home = () => {
    return (
        <div className="container" id="home">
            <div className="greet">
                <TextType 
                    text={["Hi There!!!"]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="|"
                />
                <img className="hero" src={EswarsaiImage}></img>
            </div>
            <div className="info-wrapper">
                <h1 className="name">Eswar Sai</h1>
                <div className="icons-wrapper">
                    <a href="https://www.linkedin.com/in/eswar-sai-petakamsetty-25a1b8280/"
                        target="_blank"
                    >
                        <FaLinkedin style={{color: "white"}}/>
                    </a>
                    <a href="https://github.com/Eswarsaipetakamsetty"
                        target="_blank"
                    >
                        <FaGithub style={{color: "white"}}/>
                    </a>
                    <a href="https://www.instagram.com/_eshwar.xx_/"
                        target="_blank"
                    >
                        <FaInstagram style={{color: "white"}}/>
                    </a>
                </div>
            </div>
            <div className="carousel">
                <TextCarousel
                    texts={[
                        "Backend Development",
                        "Frontend Development"
                    ]}
                    interval={2500}
                    className="carousel-text"
                >

                </TextCarousel>
            </div>
            < ScaleUpText
                textClassName="intro-text"
                label= "Building the Backbone of Tomorrow’s Applications"
            >
            </ScaleUpText>
        </div>
    )
}

export default Home