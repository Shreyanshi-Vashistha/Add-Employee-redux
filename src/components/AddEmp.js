import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addData } from "../redux/actions/addDataAction";


function AddEmp() {

    let dispatch = useDispatch()

    const [initialValues, setvalues] = useState({

        Emp_Name: '',
        Emp_Designation: '',
        Emp_Salary: '',
        Emp_Joining_Date: '',
        Emp_Department: '',
        id: ''

    })

    const { Emp_Name, Emp_Designation, Emp_Salary, Emp_Joining_Date, Emp_Department, id } = initialValues;

    const handleInput = (e) => {
        const target = e.target;
        const name = target.name;

        setvalues({
            ...initialValues,
            [name]: e.target.value

        })
    }


    const mySubmit = (e) => {
        dispatch(addData(initialValues))



    }

    console.log("main")

    return (

        <div class='container'>
            <div className='text-center' style={{ marginTop: 10, marginBottom: 50 }}>
                <Link to="/" className="btn btn-primary btn-lg">Go Back</Link>
            </div><br></br>
            <h2>Add Employee Details</h2>
            <form onSubmit={() => mySubmit()}>
                <div class="form-group">
                    <label >Name </label>
                    <input type="text" value={Emp_Name} name="Emp_Name" class="form-control" id="name" placeholder="Enter name" onChange={handleInput} />
                </div>
                <div class="form-group">
                    <label >Designation </label>
                    <input type="text" value={Emp_Designation} name="Emp_Designation" class="form-control" id="Designation" placeholder="Enter Designation" onChange={handleInput} />
                </div>
                <div class="form-group">
                    <label >Salary </label>
                    <input type="text" value={Emp_Salary} name="Emp_Salary" class="form-control" id="Salary" placeholder="Enter Salary" onChange={handleInput} />
                </div>
                <div class="form-group">
                    <label >Joining Date </label>
                    <input type="text" value={Emp_Joining_Date} name="Emp_Joining_Date" class="form-control" id="date" placeholder="Enter Joining date" onChange={handleInput} />
                </div>
                <div class="form-group">
                    <label >Department </label>
                    <input type="text" value={Emp_Department} name="Emp_Department" class="form-control" id="dept" placeholder="Enter Department" onChange={handleInput} />
                </div>
                <div class="form-group">
                    <label >ID </label>
                    <input type="text" value={id} class="form-control" name="id" id="empid" placeholder="Enter Employee ID" onChange={handleInput} />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>

    );
}

export default AddEmp;
