import React from 'react';
import './mainCheckout.css'
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Summary from './summary'
import CustomerDetails from './CustomerDetails'
import DeliverySection from './delivery'
import {IoIosArrowBack} from 'react-icons/io'

function getSteps() {
  return ['', '', ''];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <Summary/>;
    case 1:
      return <CustomerDetails/>;
    case 2:
      return <DeliverySection/>;
    default:
      return 'Unknown stepIndex';
  }
}

export default function HorizontalLabelPositionBelowStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
      <>
    <div className='root'>
        <div className="heading">Checkout</div>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className='root-body'>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className='root-body'>{getStepContent(activeStep)}</Typography>
            <div className='checkout-btn'>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className='bck-btn'
              >
               <IoIosArrowBack/>
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Pay 17,500' : 'Continue'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  );
}
