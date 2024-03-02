import { useState } from 'react'

const FormInput = () => {


  const [fullname,setFullname] = useState('')
  const [img,setImg] = useState('')
  const [gender,setGender] = useState('')
  const [interest,setInterest] = useState([])
  const [job,setJob] = useState('')

  const handleGender = (event) => {
    setGender(event.target.value)
    console.log(event.target.value)
  }

  const handleInterest = (event) => {
    let interest = []
    setInterest()
  }

  const submitForm = (event) => {
    event.preventDefault();

    const user = {
      fullname: fullname,
      img: img,
      gender: gender,
      interest: interest,
      job: job,
    }

    console.log(user)
  }

  return (
    <>
      <form onSubmit = {(e)=>submitForm(e)}>


        <h2>hello</h2>
        <div>
          <label htmlFor="fullname">
            Full Name
          </label>
            <input onChange={(e)=>setFullname(e.target.value)} type="text" placeholder='fullname'/>
        </div>
        <div>
          <label htmlFor="imageUrl">
            Image Url
          </label>
            <input onChange={(e)=>setImg(e.target.value)}  type="text" placeholder='image'/>
        </div>

        <div>
          <label htmlFor="gender">Gender</label>
          <input 
            type="radio" 
            name="gender"
            value="Male" 
            onClick={(e)=>handleGender(e)}
          />
          <label>Male</label>
          <input 
            type="radio" 
            name="gender"
            value="Female" 
            onClick={(e)=>handleGender(e)}
          />
          <label>Female</label>
        </div>

        <div>
          <label htmlFor="gender">Interest</label>
          <input 
            type="checkbox"
            value="Coding" 
            onClick={(e)=>setInterest(e)}
          />
          <label>Coding</label>
          <input 
            type="checkbox"
            value="Music" 
            onClick={(e)=>setInterest(e)}
          />
          <label>Music</label>
        </div>

        <div>
          <label>Job</label>
          <select>
            <option value="">Select Job</option>
            <option value="developer">Developer</option>
            <option value="accountant">Accountant</option>
            <option value="other">Other</option>
          </select>
        </div>

        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default FormInput;