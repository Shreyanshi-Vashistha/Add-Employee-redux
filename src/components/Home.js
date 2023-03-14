import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { latestdata } from '../redux/actions/getDataAction'
import { Link } from "react-router-dom";





const Home = () => {

    let dispatch = useDispatch()
    const { users } = useSelector(state => state.data)

    console.log(users)
    //get data

    useEffect(() => {
        console.log("useEffect")
        dispatch(latestdata())
    }, [])



    
    return (
        <div>
            <div className='text-center' style={{ marginTop: 10, marginBottom: 50 }}>
                <Link to="add" className="btn btn-primary btn-lg">Add Employee Details</Link>
            </div><br></br>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Designation</th>
                        <th scope="col">Salary</th>
                        <th scope="col">Joining Date</th>
                        <th scope="col">Department</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map((mykey) => (
                        <tr key={mykey.id}>
                            <th scope="row">{mykey.id}</th>
                            <th >{mykey.Emp_Name}</th>
                            <td>{mykey.Emp_Designation}</td>
                            <td>{mykey.Emp_Salary}</td>
                            <td>{mykey.Emp_Joining_Date}</td>
                            <td>{mykey.Emp_Department}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Home