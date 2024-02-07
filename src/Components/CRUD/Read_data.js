import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'



function Read_data() {
  const [formdata, set_formdata] = useState([]);

  const {id} = useParams();
  useEffect(() => {
    axios.get('https://65a811b994c2c5762da8393f.mockapi.io/newCRUD/'+ id).then((res) => {
      // console.log(res.data)
      set_formdata(res.data)
    }).catch ((err) => {
      console.log(err)
    })
  }, [])


  return (
    <div>
      <h3>Name : {formdata.first_name}</h3>
      <h3>Last Name : {formdata.last_name}</h3>
      <h3>Email : {formdata.email}</h3>
      <h3>Age : {formdata.age}</h3>

      <Link to="/" className='btn btn-info'>Back</Link>
    </div>
  )
}

export default Read_data
