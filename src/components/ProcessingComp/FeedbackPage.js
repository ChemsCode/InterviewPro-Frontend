import BriefDashboard from "./GraphicalDashboard/BriefDashboard";
import DisplaySWI from "./DashBoard/DisplaySWI";
import DisplayTopSkills from "./DashBoard/DisplayTopSkills";
import DisplaySTAR from "./DashBoard/DisplaySTAR";
import Navbar from "../Navbar"
import { useLocation } from "react-router-dom";

function FeedbackPage() {
    const feedback = useLocation();
    console.log(feedback.state.answer);
    console.log(feedback.state.question);
    console.log(feedback.state.interviewAnswer);
    return (
        <>
            <Navbar/>
            <div className="px-10 my-4 bg-slate-100">
                <BriefDashboard fb={feedback.state.answer} qst={feedback.state.question} ans={feedback.state.interviewAnswer}/>
                <DisplaySWI fb={feedback.state.answer}/>
                <h1 className="flex justify-center" style={{ fontSize: "2rem" }}>
                    SKILLS
                </h1>
                <DisplayTopSkills fb={feedback.state.answer}/>
                <h1 className="flex justify-center" style={{ fontSize: "2rem" }}>
                    STAR
                </h1>
                <DisplaySTAR />
            </div>
        </>

    );
}

export default FeedbackPage;
