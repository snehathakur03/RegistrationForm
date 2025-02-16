import React from 'react'

const StepperControl = ({handleClick, currentStep, steps,emailError }) => {
  return (
    <div className='flex container justify-between my-8 mx-2'>
        {/* Back Button */}
        <button 
        onClick={(e)=>handleClick("previous", e)}
        className={`text-blue-300 border-blue-300 py-3 px-7 rounded-xl border-2 font-medium text-lg hover:bg-blue-300 hover:text-gray-900
        ${currentStep === 1 ? "opacity-40 cursor-not-allowed" : ""}`}
        disabled={currentStep === 1}>
            Previous
        </button>

      {/* Next Button */}
      <button 
       onClick={(e)=>handleClick("next", e)} type="button"
       className="text-gray-900 bg-blue-300 py-3 px-7 rounded-xl font-medium text-lg cursor-pointer hover:bg-blue-400">
        {currentStep === steps.length - 1 ? "Confirm" : "Next"}
      </button>
    </div>
  )
}

export default StepperControl
