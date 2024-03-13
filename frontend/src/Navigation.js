import React from "react";
import "./Navigation.css";
import { useNavigate } from "react-router-dom";
import Logout from "./Logout";


const Navigation = ({resetEmployees}) => {
    const navigate = useNavigate();
    const handleViewAllEmployees = () => {
        resetEmployees(); // Call the function passed as a prop to reset employees
        navigate("/main/employees");
    };

    return(
        <div className="nav">
            <div className = "screen">
                <div className="navigation-tab">
                    <div>
                        <button className="dashboard-tab" onClick={() =>
                        navigate("/dashboard")}>Dashboard</button>
                    </div>
                    <div>
                        <button className="case-tab" onClick={() =>
                        navigate("/team")}>Team</button>
                    </div>
                </div>
                <div className="extra-tab">
                    <div className="logout">
                        <Logout></Logout>
                    </div>
                </div>
            </div>

        </div>
        
        
    )
}

export default Navigation