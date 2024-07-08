import { useNavigate } from "react-router-dom";
import { User, LogOut } from "lucide-react";
import axios from "axios";
import { useEffect, useState } from "react";

const CollegeProfile = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [instname, setInstname] = useState("");
    const [instcode, setInstcode] = useState("");
    const [list, setList] = useState([]);


    const institute_name = JSON.parse(localStorage.getItem('institute')).institute_name;
    console.log(institute_name);

    useEffect(() => {
        collectiondata();
        studentList();
    }, [])

    const studentList = () => {

        axios
            .get(`http://localhost:5000/university/studentlist/${institute_name}`)
            .then((result) => {
                console.log("student list", result.data.result);
                setList(result.data.result);
            });
    };

    const collectiondata = () => {

        axios
            .get(`http://localhost:5000/university/profile/${institute_name}`)
            .then((result) => {
                console.log("progile end result is:", result.data.result); // result contain the response comming from axios
                setAddress(result.data.result.institute_address);
                setEmail(result.data.result.institute_email);
                setInstcode(result.data.result.institute_code);
                setInstname(result.data.result.institute_name);
            })
            .catch((err) => console.log("lasst err", err));
    }


    const logout = () => {
        localStorage.clear();
        navigate("/")

    }
    const updateresult = (id) => {
        navigate(`/resultupdate/${id}`)
    }
    return (
        <div>
            <div className="flex flex-col  mt-1 lg:mt-5 px-2 py-3 justify-center" id="contect">
                <div className="flex flex-row justify-between mx-24">
                    <div className="flex align-baseline">
                        <User className="w-12 my-1 text-red-500"></User>
                        <h2 className="text-3xl bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text" id="about">Institute Profile</h2>
                    </div>
                    <LogOut className="text-red-500 cursor-pointer" onClick={logout}></LogOut>
                </div>
                <form className="  justify-center lg:mt-5 mt-2">
                    <div className="flex  py-3 px-2 my-2 justify-center">
                        <label >Institute's Name :
                            <br></br>
                            <input className=" md:w-96 w-52 px-4 border rounded-md text-white" type="text" value={instname} readOnly />
                        </label>
                    </div>
                    <div className="flex  py-3 px-2 my-2 justify-center">
                        <label >Institute's Email :
                            <br></br>
                            <input className="md:w-96 w-52 px-4 border rounded-md text-white" type="text" value={email} readOnly />
                        </label>
                    </div>
                    <div className="flex  py-3 px-2 my-2 justify-center">
                        <label >Institute's Address :
                            <br></br>
                            <input className="md:w-96 w-52 px-4 border rounded-md text-white" type="text" value={address} readOnly />
                        </label>
                    </div>
                    <div className="flex  py-3 px-2 my-2 justify-center">
                        <label >Institute Code :
                            <br></br>
                            <input className="md:w-96 w-52 px-4 border rounded-md text-white" type="text" value={instcode} readOnly />
                        </label>
                    </div>
                </form>
                <span className="my-4 mx-auto text-2xl bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text ">Registered Students List</span>
                <div className="w-3/4 justify-center border mx-auto">
                        <ul className="flex flex-col sm:flex-row justify-evenly mt-2 mx-auto border">
                            <li>Sr.No</li>
                            <li className="border inline-block">Roll No</li>
                            <li>Student Name</li>
                            <li>Generate Result</li>
                        </ul>
                        {list.length > 0 ? (
                            list.map((item, index) => (
                                <ul className="flex flex-col sm:flex-row justify-evenly my-2 mx-auto border" key={item._id}>
                                    <li>{index + 1}</li>
                                    <li className="border inline-block">{item.roll_no}</li>
                                    <li >{item.name}</li>
                                    <li>
                                        <button type="submit " className=" bg-gradient-to-r from-violet-500 to-red-800 py-1 px-3 rounded-md justify-center inline-block"
                                            onClick={() => {
                                                updateresult(item._id);  
                                                localStorage.setItem("userzzz", JSON.stringify(item));
                                            }}
                                            
                                        >
                                            Generate Result
                                        </button>
                                    </li>
                                </ul>
                            ))
                        ) : (
                            <span>No student is registered yet</span>
                        )}
                    </div>
            </div>
        </div>
    )
}

export default CollegeProfile;