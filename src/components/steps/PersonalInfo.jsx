import React,{useContext,useState} from 'react';
import { StepperContext } from '../../context/stepperContext';

const PersonalInfo = ({ formErrors, setFormErrors}) => {

  const {userData, setUserData} = useContext(StepperContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };


  return (
    <>
    <form>
    <div className='flex flex-row'>
      <div className='w-full mx-2 flex-1 '>
        <label className='labelText'>
          First Name*
        </label>
        <div className='inputBox'>
          <input  onChange={handleChange} value={userData["firstname"] || ""}  name="firstname" type="text" className={`inputField ${formErrors.firstname ? 'border-red-500' : ''}`} required />
          </div>
          {formErrors.firstname && (<p className="text-red-500 text-xs mt-1">{formErrors.firstname}</p>)}        
      </div>

      <div className='w-full mx-2 flex-1 '>
        <label className='labelText'>
          Last Name*
        </label>
        <div className='inputBox'>
          <input   onChange={handleChange}  value={userData["lastname"] || ""}  name="lastname" type="text" className={`inputField ${formErrors.lastname ? 'border-red-500' : ''}`} required/>
        </div>
        {formErrors.lastname && <p className="text-red-500 text-xs mt-1">{formErrors.lastname}</p>}
      </div>

      <div className='w-full mx-2 flex-1 '>
        <label className='labelText'>
          Date Of Birth
        </label>
        <div className='inputBox'>
          <input  onChange={handleChange} value={userData["birthdate"] || ""} name="birthdate" type="date" className='inputField'
          />
        </div>
      </div>
    </div>


    <div className='flex flex-row mt-7'>
      <div className='w-full mx-2 flex-1 '>
        <label className='labelText'>
          Phone Number
        </label>
        <div className='inputBox'>
          <input onChange={handleChange} value={userData["phonenumber"] || ""}  name="phonenumber" type="tel" className={`inputField ${formErrors.phonenumber ? 'border-red-500' : ''}`} />
        </div>
        {formErrors.phonenumber && (<p className="text-red-500 text-xs mt-1">{formErrors.phonenumber}</p>)}
      </div>

      <div className='w-full mx-2 flex-1 '>
        <label className='labelText'>
          E-Mail*
        </label>
        <div className='inputBox'>
          <input onChange={handleChange} value={userData["email"] || ""}  name="email" type="email" className={`inputField ${formErrors.email ? 'border-red-500' : ''}`} required />
        </div>
        {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
        </div>

      <div className='w-full mx-2 flex-1 '>
        
      </div>

   
    </div>
    </form>
    </>
  )
}

export default PersonalInfo
