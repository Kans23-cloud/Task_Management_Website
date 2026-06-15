import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Login() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const res = await API.post(
                "/auth/login",
                formData
            );

            localStorage.setItem(
                "token",
                res.data.token
            );

            alert("Login Successful");

            navigate("/dashboard");

        } catch (error) {

            alert(
                error.response?.data?.message ||
                "Login Failed"
            );

        }
    };

    return (
        <div className="auth-container">
            <h1>Login</h1> <form onSubmit={handleSubmit}> 
                <input type="email" name="email" placeholder="Enter Email" onChange={handleChange} /> 
                <input type="password" name="password" placeholder="Enter Password" onChange={handleChange} /> 
                <button type="submit">
                     Login 
                </button> 
                </form> 
                    <p style={{ textAlign: "center", marginTop: "15px" }} > Don't have an account? </p>
                    <button onClick={() => navigate("/register")} style={{ width: "100%", marginTop: "10px", background: "#22c55e", color: "white", border: "none", padding: "12px", borderRadius: "8px", cursor: "pointer" }} >
                         Register 
                    </button>
        </div>
    );
}

export default Login;