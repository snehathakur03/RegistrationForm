import React, {useEffect,useState,useRef} from 'react'

const Stepper = ({steps,currentStep}) => {
    const [newStep,setNewStep] = useState([]);
    const stepRef = useRef();

    const updateStep = (stepNumer, steps) =>{
        const newStep = [...steps]
        let count=0;

        while (count < newStep.length){
            //Current step
            if(count===stepNumer){
                newStep[count]={
                    ...newStep[count],
                    highlighted : true,
                    selected: true,
                    completed:true,


                };
            }
            //step completed
            else if (count<stepNumer){
                newStep[count]={
                    ...newStep[count],
                    highlighted : false,
                    selected: true,
                    completed:true,

            };
            }
            //step pending
            else{
                newStep[count]={
                    ...newStep[count],
                    highlighted : false,
                    selected: false,
                    completed:false,

            };
            }
            count++;
        }
        return newStep;

}

useEffect(()=>{
    //create object
    const stepState = steps.map((step,index)=>
        Object.assign(
            {},
            {
                description:step,
                completed:index < currentStep,
                highlighted : index === 0 ? true:false,
                selected : index === 0 ? true:false,
            }
        )
    );
    stepRef.current = stepState;
    const current  = updateStep(currentStep-1, stepRef.current);
    setNewStep(current);
},[steps,currentStep])

const displaySteps = newStep.map ((step,index) => {
    return(
        <div key={index} className={index != newStep.length-1 ? 'w-full flex items-center' : "flex items:center"}>
        <div className='relative flex flex-col items-center text-gray-200'>
        {/* Display Number */}
        <div className={`rounded-full transition duration-500 ease-in-out border-2 border-gray-400 h-12 w-12 flex items-center justify-center py-3 ${step.selected ? "bg-teal-300 text-gray-900 font-bold border border-teal-500" : ""}`}>
            {step.completed ? (
                <span className='text-gray-600 font-bold text-xl'>  &#10003; </span>
            ) : ( index + 1)
            }
        </div>
        {/* Display Description */}
        <div className={`absolute top-0 text-center mt-16 w-32 text-[14px] font-normal tracking-widest uppercase ${step.highlighted ? " text-gray-200 " : " text-gray-400 "}`}>
            {step.description}
        </div>
        </div>
        <div
        className={`flex-auto border-t-3 transition duration-500 ease-in-out 
            ${step.completed ?  'border-teal-300' : 'border-gray-500'
        }`}
      >            {/* Display Line */}
        </div>
        </div>
    )
});
   

    return (
        <div className='mx-4 p-4 flex justify-between items-center'>
        {displaySteps}
        </div>
    )
}

export default Stepper
