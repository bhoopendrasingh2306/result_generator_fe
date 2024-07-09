import { LockKeyhole } from "lucide-react";
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import axios from "axios";

const CollegeRegistration = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState(false);

    const collectiondata = (e) => {
        e.preventDefault();
        console.log({ name, email, address, password });
        if (!name || !email || !address || !password) {
            setError(true);
            return false;
        }
        // axios is used to send data from UI to database or from react to database  .then is used to resolve promis/e
        axios
            .post("https://result-generator-be.onrender.com/university/signup", { institute_name:name, institute_email:email, institute_address:address, password:password })
            .then((result) => {
                console.log(" college front end result is:", result); // result contain the response comming from axios
                if (result.data.auth) {
                    localStorage.setItem("institute", JSON.stringify(result.data.data));
                    localStorage.setItem("token", JSON.stringify(result.data.auth));
                    navigate("/collegeprofile");
                }
                else {
                    setMessage(result.data.message);
                }
            })
            .catch((err) => console.log("lat err", err));
    }

    const loginbtn = () => {
        navigate("/collegelogin")
    }

    return (
        <div className="flex flex-col  mt-1 lg:mt-5 px-2 py-3 justify-center" >
            {/* <h2 className="text-3xl bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text" >Register The Institute</h2> */}
            <div className="flex flex-row justify-between mx-24">
                <h2 className="text-3xl bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">Register The Institute</h2>
                <span className="justify-center text-rose-600">{message}
                </span>
            </div>
            <form className="  justify-center lg:mt-5 mt-2">
                <div className="flex  py-3 px-2 my-2 justify-center">
                    <label >Institute Name :
                        <br></br>
                        <input className=" md:w-96 w-52 border rounded-md text-white px-4" type="text" onChange={(e) => setName(e.target.value)} value={name} />
                        <br />
                            {error && !name && (
                                <span className="text-rose-600">Please Enter Institute Name</span>
                            )}
                    </label>
                </div>
                <div className="flex  py-3 px-2 my-2 justify-center">
                    <label >Institute Email :
                        <br></br>
                        <input className="md:w-96 w-52 border rounded-md text-white px-4" type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
                        <br />
                            {error && !email && (
                                <span className="text-rose-600">Please Enter Institute Email</span>
                            )}
                    </label>
                </div>
                <div className="flex  py-3 px-2 my-2 justify-center">
                    <label >Institute Address :
                        <br></br>
                        <input className="md:w-96 w-52 border rounded-md text-white px-4" type="text" onChange={(e) => setAddress(e.target.value)} value={address} />
                        <br />
                            {error && !address && (
                                <span className="text-rose-600">Please Enter Institute Address</span>
                            )}
                    </label>
                </div>
                <div className="flex  py-3 px-2 my-2 justify-center">
                    <label >Password :
                        <br></br>
                        <div className="flex-col">
                                <div className=" md:w-96 w-52 flex flex-row border rounded-md text-white">
                                    <LockKeyhole />
                                    <input className="md:w-96 w-52 border rounded-md border-slate-950 px-4" type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                                </div>
                                {error && !password && (
                                    <span className="text-rose-600">Please Enter Password</span>
                                )}
                            </div>
                    </label>
                </div>

                <div className="flex py-1 px-2 my-2 justify-center">
                    <button type="submit " className=" bg-gradient-to-r from-orange-500 to-red-800 py-1 px-3 rounded-md justify-center" onClick={collectiondata}>Register</button>
                </div>
                <div className="flex py-1 px-2 my-2 justify-center align-middle">
                    <span className="mx-5">Already have an Account ?
                    </span>
                    <button type="submit " className=" bg-gradient-to-r from-orange-500 to-red-800 py-1 px-3 rounded-md justify-center" onClick={loginbtn}>Login</button>

                </div>
            </form>
        </div>
    )
}

export default CollegeRegistration;


