
import { useState } from "react";

function SignUp(props) {
    console.log(props)
    const [userData, setUserData] = useState({
        Name: "",
        Email: "",
        UserName: "",
        Password: "",
        ConfirmPassword: ""
    })
    const [errors, setErrors] = useState({
        NameErr: "",
        UserNameErr: "",
        EmailErr: "",
        PasswordErr: "",
        ConfirmPasswordErr: ""
    })
    const changeData = (e) => {
        if (e.target.name == "userEmail") {
            setUserData({
                ...userData,
                Email: e.target.value
            })
            setErrors({
                ...errors,
                EmailErr: e.target.value.length == 0 ? "This field is required": 
                e.target.value = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.target.value) && 
                "Email is invalid"
            })
        } else if (e.target.name == "userpassword") {
            setUserData({
                ...userData,
                Password: e.target.value
            })
            setErrors({
                ...errors,
                PasswordErr: e.target.value.length == 0 ? "This field is required": 
                e.target.value.length < 8 ? "Password is less than 8":
                e.target.value = !/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/.test(e.target.value) && 
                "Password must contain at least one lowercase, one uppercase, one digit, one special character, and be at least 8 characters long"
            })
        } else if (e.target.name == "userConfirmPassword") {
            setUserData({
                ...userData,
                ConfirmPassword: e.target.value
            })
            setErrors({
                ...errors,
                ConfirmPasswordErr: e.target.value.length == 0 ? "This Field is required": 
                e.target.value != userData.Password && "Password does not match"
            })
        } else if (e.target.name == "Name") {
            setUserData({
                ...userData,
                Name: e.target.value
            })
            setErrors({
                ...errors,
                NameErr: e.target.value.length == 0 && "This field is required"
            })
        }
        else if (e.target.name == "UserName") {
            setUserData({
                ...userData,
                UserName: e.target.value
            })
            setErrors({
                ...errors,
                UserNameErr: e.target.value.length == 0 ? "required User Name Field": 
                e.target.value = /\s/g.test(e.target.value) && "Username should not contain any spaces"
            })
        }
    }
    const submitUserData = (e) => {
        console.log("submit")
        e.preventDefault()
    }
    return (
        <>
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="m-4 p-4 bg-white rounded shadow col-6">
                <form onSubmit={submitUserData}>
                <h3 className="text-center"
                style={{ color: 'transparent', backgroundImage: 'linear-gradient(45deg, #3498db, #2ecc71)', WebkitBackgroundClip: 'text' }}
                >Signup Form</h3>
                    <div className="mb-3">
                        <label className="form-label col-12 text-start">Name</label>
                        <input
                        name="Name"
                        className="form-control col-12"
                        type="text"
                        value={userData.Name}
                        onChange={(e) => changeData(e)}/>
                        <p className="text-danger text-start"> {errors.NameErr}</p>
                    </div>
                    <div className="mb-3">
                        <label className="form-label col-12 text-start">Email Address</label>
                        <input
                        name="userEmail"
                        className="form-control col-12"
                        type="text"
                        value={userData.Email}
                        onChange={(e) => changeData(e)}/>
                        <p className="text-danger text-start"> {errors.EmailErr}</p>
                    </div>
                    <div className="mb-3">
                        <label className="form-label col-12 text-start">Username</label>
                        <input
                        name="UserName"
                        className="form-control col-12"
                        type="text"
                        value={userData.UserName}
                        onChange={(e) => changeData(e)}/>
                        <p className="text-danger text-start"> {errors.UserNameErr}</p>
                    </div>
                    <div className="mb-3">
                        <label className="form-label col-12 text-start">Password</label>
                        <input
                        name="userpassword"
                        className="form-control col-12"
                        type="password"
                        value={userData.Password}
                        onChange={(e) => changeData(e)}/>
                        <p className="text-danger text-start"> {errors.PasswordErr}</p>
                    </div>
                    <div className="mb-3">
                        <label className="form-label col-12 text-start">Confirm Password</label>
                        <input
                        name="userConfirmPassword"
                        className="form-control col-12"
                        type="password"
                        value={userData.ConfirmPassword}
                        onChange={(e) => changeData(e)}/>
                        <p className="text-danger text-start"> {errors.ConfirmPasswordErr}</p>
                    </div>
                    <button
                    disabled={
                        errors.PasswordErr || errors.EmailErr || 
                        errors.UserNameErr || errors.NameErr || errors.ConfirmPasswordErr}
                    className="btn btn-primary col-12" style={{
                        backgroundImage: 'linear-gradient(45deg, #3498db, #2ecc71)',
                        color: '#fff',
                        border: 'none',}}>
                        SignUp
                    </button>
                </form>
            </div>
        </div>
        </>
    )
}
export default SignUp;