import axios from 'axios'
import "./Read.css"
import React, { useCallback, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';


function Read() {
  const [data, setdata] = useState([]);
  const [isloading, set_is_loading] = useState(false)

  const navigate = useNavigate();

  const getdata = useCallback(async () => {
    try {
      set_is_loading(true)
      const response = await axios.get("https://65a811b994c2c5762da8393f.mockapi.io/newCRUD");
      setdata(response.data)  
    } catch (error) {
      console.log(error)
    } finally {
      set_is_loading(false)
    }
  }, [])

  useEffect(() => {
    getdata(); 
  }, [])

  const navigate_page = () => {
    navigate("/create")
  }

  const handle_delete_data = (item_id) => {
    window.alert("Do you want to delete")
    axios.delete('https://65a811b994c2c5762da8393f.mockapi.io/newCRUD/'+ item_id).then((res) => {
      // console.log(res)
      getdata();
    }).catch ((err) => {
      console.log(err)
    })
  }

  const delete_all_data = () => {
     window.alert("do you want to delete all data")
    data.forEach(item => {
      axios.delete(`https://65a811b994c2c5762da8393f.mockapi.io/newCRUD/${item.id}`)
        .then((res) => {
        })
        .catch((err) => {
          console.log(err);
        });
    });
    setdata([]);
  }

  return (    
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='two_btn'>
              <button className="btn btn-primary mt-lg-5" onClick={navigate_page}>Create Data</button>
              <button className="btn btn-danger mt-lg-5" onClick={delete_all_data}>Delete all data</button>
            </div>
            <table class="table table-responsive w-100 fixed">
              <thead>
                <tr className='text-center'>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Age</th>
                  <th>Read</th>
                  <th>EDIT</th>
                  <th>DELETE</th>
                </tr>
              </thead>
              <tbody>
              {isloading ? <p>Loading...</p> : null}
              {data.map((item) => {
                const capitalizedFirstName = item.first_name.charAt(0).toUpperCase() + item.first_name.slice(1)
                return(
                  <tr key={item.id} className='text-center'>
                    <td>{capitalizedFirstName}</td>
                    <td>{item.last_name}</td>
                    <td>{item.email}</td>
                    <td>{item.age}</td>
                    <td><Link to={`/read_data/${item.id}`} className='btn btn-outline-primary'>Read</Link></td>
                    <td><Link to={`/update/${item.id}`} className='btn btn-outline-success'>Edit</Link></td>
                    <td><button className="btn btn-outline-danger" onClick={() => {handle_delete_data(item.id)}}>Delete</button></td>
                  </tr>
                )
              })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
   




    </div>
  )
}

export default Read
