import React, { useCallback, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Create.css"

function Create() {
  const [first_name, set_first_name] = useState("");
  const [last_name, set_last_name] = useState("");
  const [email, set_email] = useState("");
  const [age, set_age] = useState("");

  const navigate = useNavigate();

  const handleformsubmit = (e) => {
    e.preventDefault();
    getdata();
  }

  const getdata = useCallback(async () => { 
    try {
      const formData = {
        first_name : first_name,
        last_name : last_name,
        email : email,
        age : age
      }
      const posts = await axios.post("https://65a811b994c2c5762da8393f.mockapi.io/newCRUD", formData);
      console.log(posts)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }, [handleformsubmit])

  const navigate_page = () => {
    navigate("/")
  }

  return (
    <div className="container-fluid  form-box">
      <div className="row d-flex flex-column w-100 min-vh-100 align-items-center justify-content-center ">
        <div className="col-md-4">
          <button className="btn btn-primary" onClick={navigate_page}>Read Data</button>
          <form onSubmit={handleformsubmit}>
            <div className="form-group col-md-12">
              <label>First Name</label>
              <input type="text" required value={first_name} onChange={(e) => {set_first_name(e.target.value)}}  className="form-control"/>
            </div>

            <div className="form-group col-md-12">
              <label>Last Name</label>
              <input type="text" required value={last_name} onChange={(e) => {set_last_name(e.target.value);}} className="form-control" />
            </div>

            <div className="form-group col-md-12">
              <label>Email</label>
              <input type="text" required value={email} onChange={(e) => {set_email(e.target.value);}} className="form-control" />
            </div>

            <div className="form-group col-md-12">
              <label>Age</label>
              <input type="text" required value={age} onChange={(e) => {set_age(e.target.value);}} className="form-control" />
            </div><br/>
            
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>       
    </div>
  );
}

export default Create;
