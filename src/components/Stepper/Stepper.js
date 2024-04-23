import React, { useState } from 'react';
import './Stepper.css';

const Stepper = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const goToNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const goToPreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className="stepper">
      <div className="step-indicator">
        Step {currentStep + 1} of {steps.length}
      </div>
      <div className="step-content">
        {steps[currentStep].content}
      </div>
      <div className="step-navigation">
        {currentStep > 0 && (
          <button onClick={goToPreviousStep}>Previous</button>
        )}
        {currentStep < steps.length - 1 && (
          <button onClick={goToNextStep}>Next</button>
        )}
      </div>
    </div>
  );
};

export default Stepper;
