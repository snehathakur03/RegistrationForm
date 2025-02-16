import { useState } from 'react';
import Stepper from './components/Stepper'; 
import StepperControl from './components/StepperControl';
import './App.css';
import PersonalInfo from './components/steps/PersonalInfo';
import Final from './components/steps/Final';
import { StepperContext } from './context/stepperContext';
import SetCredentials from './components/steps/SetCredentials';

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState('');
  const [finalData, setFinalData] = useState([]);
  const [formErrors, setFormErrors] = useState({});

  const steps = [
    "Personal Details",
    "Set Credentials",
    "Complete"
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <PersonalInfo formErrors={formErrors} setFormErrors={setFormErrors} />;
      case 2:
        return <SetCredentials  formErrors={formErrors} setFormErrors={setFormErrors} />;
      case 3:
        return <Final />;
      default:
    }
  };

  // Check if all fields are valid before allowing to go to the next step
  const validateStep = () => {
    const errors = {};

    // Check required fields for current step
    if (!userData.firstname) {
      errors.firstname = 'First name is required.';
    }
    if (!userData.lastname) {
      errors.lastname = 'Last name is required.';
    }
    if (!userData.email) {
      errors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
      errors.email = 'Email format is invalid.';
    }
    if (userData.phonenumber && !/^\d{10}$/.test(userData.phonenumber)) {
      errors.phonenumber = 'Please enter a valid 10-digit phone number.';
    }


    // Validate username and password on the "Set Credentials" step
    if (currentStep === 2) {
      if (!userData.username) {
        errors.username = 'Username is required.';
      }
      if (!userData.password) {
        errors.password = 'Password is required.';
      } else if (userData.password.length < 6) {
        errors.password = 'Password must be at least 6 characters long.';
      }
    }
   

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleClick = (direction, event) => {
    event.preventDefault(); // Prevent default form submission behavior

    let newStep = currentStep;

    if (direction === 'next') {
      // Validate the current step before progressing
      if (validateStep()) {
        if (currentStep < steps.length) {
          newStep++;
        }
      }
    } else if (direction === 'previous') {
      newStep--;
    }

    // Check if the new step is within valid bounds
    if (newStep > 0 && newStep <= steps.length) {
      setCurrentStep(newStep);
    }
  };

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='centered-container'>
        <div className='form-container'>
          <Stepper steps={steps} currentStep={currentStep} />

          {/* Display Components */}
          <div className='pt-25'>
            <StepperContext.Provider value={{ userData, setUserData, finalData, setFinalData }}>
              {displayStep(currentStep)}
            </StepperContext.Provider>
          </div>

          {/* Navigation Control */}
          {currentStep !== steps.length && (
            <StepperControl
              handleClick={handleClick}
              currentStep={currentStep}
              steps={steps}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
