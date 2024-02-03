import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setemailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (e.target.value === "") {
      setemailErr("This field is required");
    } else if (!validateEmail(e.target.value)) {
      setemailErr("Please enter a valid email format");
    } else {
      setemailErr("");
    }
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value === "") {
      setPasswordErr("This field is required");
    } else if (e.target.value.length < 8) {
      setPasswordErr("Password must contain at least 8 characters");
    } else {
      setPasswordErr("");
    }
  };
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div className="container d-flex justify-content-center mt-5">
        <div className="col-md-6 shadow p-3 mb-5 bg-white rounded">
        <h3 className="text-center"
        style={{ color: 'transparent', backgroundImage: 'linear-gradient(45deg, #3498db, #2ecc71)', WebkitBackgroundClip: 'text' }}
        >Login Form</h3>
            <form>
                <div className="mb-3">
                    <label className="form-label col-12 text-start">Email Address</label>
                    <input
                    type="text"
                    className="form-control col-12"
                    value={email}
                    onChange={handleEmailChange}/>
                    {emailErr && <p className="text-danger text-start">{emailErr}</p>}
                </div>
                <div className="mb-3">
                    <label className="form-label col-12 text-start">Password</label>
                    <div className="d-flex col-12">
                        <input
                        type={showPassword ? "text" : "password"}
                        className="form-control"
                        value={password}
                        onChange={handlePasswordChange}/>
                        <button
                        type="button"
                        className="btn btn-outline-secondary border-0"
                        onClick={toggleShowPassword}>
                            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                        </button>
                    </div>
                    {passwordErr && <p className="text-danger text-start">{passwordErr}</p>}
                </div>
                <button className="btn btn-primary col-12" type="submit" style={{
                  backgroundImage: 'linear-gradient(45deg, #3498db, #2ecc71)',
                  color: '#fff',
                  border: 'none',}}>
                    Login
                </button>
            </form>
        </div>
       </div>
    </>
  );
}

export default LogIn;