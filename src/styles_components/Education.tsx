import "../styles/Education.css"

const Education = () => {
    return (
        <div className="education-container">
            <h1 className="container-heading">EDUCATION</h1>
            <table className="wrap">
                <tr>
                    <td className="col1"><span>2022--2024</span></td>
                    <td className="col2"><span>Bachelors in Computer Science</span></td>
                </tr>
                <tr>
                    <td className="col1"></td>
                    <td className="col3"><span>Raghu Engineering College</span></td>
                </tr>
                <tr>
                    <td className="col1"><span>2020--2022</span></td>
                    <td className="col2"><span>Maths,Physics,Chemistry</span></td>
                </tr>
                <tr>
                    <td className="col1"></td>
                    <td className="col3"><span>Narayana Junior College</span></td>
                </tr>
                <tr>
                    <td className="col1"><span>2019--2020</span></td>
                    <td className="col2"><span>SSC(10)</span></td>
                </tr>
                <tr>
                    <td className="col1"></td>
                    <td className="col3"><span>Quincy School</span></td>
                </tr>
            </table>
        </div>
    )
}

export default Education