import authService from "./services/authService";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();
    
    return (
        <button className="logout-tab" onClick={() => {
            authService.logout();
            navigate("/");
        }
        }>Logout</button>
    );
};

export default Logout