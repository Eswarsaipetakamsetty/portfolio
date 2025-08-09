import Education from "../../styles_components/Education"
import Experience from "../../styles_components/Experience"
import FrameworksAndLanguages from "../../styles_components/Frameworks"
import ReachMeOut from "../../styles_components/ReachMeOut"
import ScaleUpText from "../../styles_components/ScaleUpText"
import ToolsAndTechnologies from "../../styles_components/Tools"
import VisitingCard from "../../styles_components/VisitingCard"
import "./AboutMe.css"

const AboutMe = () => {
    return (
        <div id="aboutme">
            <ScaleUpText
                label="About Me"
                textClassName="aboutme-container-title"
            />
            <div className="aboutme-sections-wrapper">
                <div className="section-1">
                    < VisitingCard />
                    < ReachMeOut />
                </div>
                <div className="section-2">
                    < Experience />
                    < FrameworksAndLanguages />
                </div>
                <div className="section-3">
                    < Education />
                    < ToolsAndTechnologies />
                </div>
            </div>
        </div>
    )
}

export default AboutMe