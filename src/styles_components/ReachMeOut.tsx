import { BsArrowUpRight } from "react-icons/bs"
import "../styles/ReachMeOut.css"

const ReachMeOut = () => {
    return (
        <div className="reachme-out-container">
            <h1 className="container-heading">REACH ME OUT</h1>
            <div className="form-container">
                <form>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" required name="name"/>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" required name="email"/>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message"></textarea>
                    <button> <BsArrowUpRight /> </button>
                </form>
            </div>
        </div>
    )
}

export default ReachMeOut