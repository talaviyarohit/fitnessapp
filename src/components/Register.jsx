// src/components/Register.js
import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate("/");
        } catch (err) {
            setError("Failed to register. Please try again.");
        }
    };

    return (
        <Container className="mt-5">


            <h1 className="text-center mb-5 mt-5 fs-1 login">Register</h1>
            {error && <Alert variant="danger">{error}</Alert>}
            <Container className="cmc">
                <form className="form" onSubmit={handleSubmit}>
                    <div className="flex-column">
                        <label>Email </label>
                    </div>
                    <div className="inputForm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" id="gmail">
                            <path fill="#ea4435" d="M16.58,19.1068l-12.69-8.0757A3,3,0,0,1,7.1109,5.97l9.31,5.9243L24.78,6.0428A3,3,0,0,1,28.22,10.9579Z"></path>
                            <path fill="#00ac47" d="M25.5,5.5h4a0,0,0,0,1,0,0v18a3,3,0,0,1-3,3h0a3,3,0,0,1-3-3V7.5a2,2,0,0,1,2-2Z" transform="rotate(180 26.5 16)"></path>
                            <path fill="#ffba00" d="M29.4562,8.0656c-.0088-.06-.0081-.1213-.0206-.1812-.0192-.0918-.0549-.1766-.0823-.2652a2.9312,2.9312,0,0,0-.0958-.2993c-.02-.0475-.0508-.0892-.0735-.1354A2.9838,2.9838,0,0,0,28.9686,6.8c-.04-.0581-.09-.1076-.1342-.1626a3.0282,3.0282,0,0,0-.2455-.2849c-.0665-.0647-.1423-.1188-.2146-.1771a3.02,3.02,0,0,0-.24-.1857c-.0793-.0518-.1661-.0917-.25-.1359-.0884-.0461-.175-.0963-.267-.1331-.0889-.0358-.1837-.0586-.2766-.0859s-.1853-.06-.2807-.0777a3.0543,3.0543,0,0,0-.357-.036c-.0759-.0053-.1511-.0186-.2273-.018a2.9778,2.9778,0,0,0-.4219.0425c-.0563.0084-.113.0077-.1689.0193a33.211,33.211,0,0,0-.5645.178c-.0515.022-.0966.0547-.1465.0795A2.901,2.901,0,0,0,23.5,8.5v5.762l4.72-3.3043a2.8878,2.8878,0,0,0,1.2359-2.8923Z"></path>
                            <path fill="#4285f4" d="M5.5,5.5h0a3,3,0,0,1,3,3v18a0,0,0,0,1,0,0h-4a2,2,0,0,1-2-2V8.5a3,3,0,0,1,3-3Z"></path>
                            <path fill="#c52528" d="M2.5439,8.0656c.0088-.06.0081-.1213.0206-.1812.0192-.0918.0549-.1766.0823-.2652A2.9312,2.9312,0,0,1,2.7426,7.32c.02-.0475.0508-.0892.0736-.1354A2.9719,2.9719,0,0,1,3.0316,6.8c.04-.0581.09-.1076.1342-.1626a3.0272,3.0272,0,0,1,.2454-.2849c.0665-.0647.1423-.1188.2147-.1771a3.0005,3.0005,0,0,1,.24-.1857c.0793-.0518.1661-.0917.25-.1359A2.9747,2.9747,0,0,1,4.3829,5.72c.089-.0358.1838-.0586.2766-.0859s.1853-.06.2807-.0777a3.0565,3.0565,0,0,1,.357-.036c.076-.0053.1511-.0186.2273-.018a2.9763,2.9763,0,0,1,.4219.0425c.0563.0084.113.0077.169.0193a2.9056,2.9056,0,0,1,.286.0888,2.9157,2.9157,0,0,1,.2785.0892c.0514.022.0965.0547.1465.0795a2.9745,2.9745,0,0,1,.3742.21A2.9943,2.9943,0,0,1,8.5,8.5v5.762L3.78,10.9579A2.8891,2.8891,0,0,1,2.5439,8.0656Z"></path>
                        </svg>
                        <input className="input" type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="flex-column">
                        <label>Password </label>
                    </div>
                    <div className="inputForm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="35" viewBox="0 0 40 50"id="password">
                            <path d="M27.1719 41.8281a.9995.9995 0 0 0 1.414 0L29 41.4141V42a1 1 0 0 0 2 0v-.5859l.4141.414a1 1 0 0 0 1.414-1.414L31.4141 39l1.414-1.4141a1 1 0 0 0-1.414-1.414L31 36.5859V36a1 1 0 0 0-2 0v.5859l-.4141-.414a1 1 0 0 0-1.414 1.414L28.5859 39l-1.414 1.4141A1 1 0 0 0 27.1719 41.8281zM36.1719 41.8281a.9995.9995 0 0 0 1.414 0L38 41.4141V42a1 1 0 0 0 2 0v-.5859l.4141.414a1 1 0 0 0 1.414-1.414L40.4141 39l1.414-1.4141a1 1 0 0 0-1.414-1.414L40 36.5859V36a1 1 0 0 0-2 0v.5859l-.4141-.414a1 1 0 0 0-1.414 1.414L37.5859 39l-1.414 1.4141A1 1 0 0 0 36.1719 41.8281zM18.1719 41.8281a.9995.9995 0 0 0 1.414 0L20 41.4141V42a1 1 0 0 0 2 0v-.5859l.4141.414a1 1 0 0 0 1.414-1.414L22.4141 39l1.414-1.4141a1 1 0 0 0-1.414-1.414L22 36.5859V36a1 1 0 0 0-2 0v.5859l-.4141-.414a1 1 0 0 0-1.414 1.414L19.5859 39l-1.414 1.4141A1 1 0 0 0 18.1719 41.8281z"></path>
                            <path d="M44,32H34V18a4.0042,4.0042,0,0,0-4-4H28V9a7.0081,7.0081,0,0,0-7-7H15A7.0081,7.0081,0,0,0,8,9v5H6a4.0042,4.0042,0,0,0-4,4V38a4.0039,4.0039,0,0,0,4,4h8v2a2.0027,2.0027,0,0,0,2,2H44a2.0027,2.0027,0,0,0,2-2V34A2.0027,2.0027,0,0,0,44,32ZM10,9a5.0059,5.0059,0,0,1,5-5h6a5.0059,5.0059,0,0,1,5,5v5H10ZM6,40a2.0027,2.0027,0,0,1-2-2V18a2.0023,2.0023,0,0,1,2-2H30a2.0023,2.0023,0,0,1,2,2V32H16a2.0027,2.0027,0,0,0-2,2v6Zm38,4H16V34l28,.0029Z"></path>
                        </svg>
                        <input type="password" className="input" placeholder="Enter your Password" value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <div className="flex-row">
                        <div>
                            <input type="radio" />
                            <label>Remember me </label>
                        </div>

                    </div>
                    <button className="button-submit" type="submit">Sign In</button>




                </form>
            </Container>
        </Container>
    );
};

export default Register;
