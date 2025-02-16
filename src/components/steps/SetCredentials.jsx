import React,{useContext} from 'react';
import { StepperContext } from '../../context/stepperContext';

const SetCredentials = ({formErrors, setFormErrors}) => {
  const {userData, setUserData} = useContext(StepperContext);

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setUserData({ ...userData, [name] : value });
  };

  return (
    <div className='flex flex-col'>
      <div className='w-full mx-2 flex-1 '>
        <div className='font-bold h-6 mt-3 text-gray-300 text-xs leading-8 uppercase'>
          Username*
        </div>
        <div className='my-2 p-1 flex border  border-gray-300 rounded'>
          <input 
          onChange={handleChange}
          value={userData["username"] || ""}
          name="username"
          className={`inputField ${formErrors.username ? 'border-red-500' : ''}`}
          />
        </div>
        {formErrors.username && (<p className="text-red-500 text-xs mt-1">{formErrors.username}</p>)}        
      </div>

      <div className='w-full mx-2 flex-1 '>
        <div className='font-bold h-6 mt-3 text-gray-300 text-xs leading-8 uppercase'>
          Password*
        </div>
        <div className='my-2 p-1 flex border  border-gray-300 rounded'>
          <input 
          onChange={handleChange}
          value={userData["password"] || ""}
          name="password"
          type="password"
          className={`inputField ${formErrors.password ? 'border-red-500' : ''}`}
          />
        </div>
        {formErrors.password && (<p className="text-red-500 text-xs mt-1">{formErrors.password}</p>)}        
      </div>

    </div>
  )
}

export default SetCredentials
