import React, { useState, useEffect } from 'react';
import './mainCheckout.css'
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Summary from './summary'
import CustomerDetails from './CustomerDetails'
import DeliverySection from './delivery'
import { IoIosArrowBack } from 'react-icons/io'
import { useSelector, connect } from 'react-redux'



function getSteps() {

  return ['', '', ''];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <Summary />;
    case 1:
      return <CustomerDetails />;
    case 2:
      return <DeliverySection />;
    default:
      return null;
  }
}

function HorizontalLabelPositionBelowStepper({cart}) {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const activeCurrency = useSelector((activeCurrency) => activeCurrency);
  const value = activeCurrency.currencyReducer.defaultValue;
  const [cartItem, setCartItem] = useState(cart)
  const [currency, setCurrency] = useState(value)
  const [subTotal, setSubTotal] = useState(0)
  const [VAT, setVAT] = useState(7.5)
  const [VATvalue, setVATValue] = useState(0)

  useEffect(() => {
    let price = 0;

    cartItem.forEach(item => {
      price += item.qty * item.price;
    })
    setVATValue(subTotal * VAT / 100)
    setSubTotal(price)
    setVAT(7.5)

  }, [cartItem, subTotal, VAT]);


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
                  <IoIosArrowBack />
                </Button>
                <Button variant="contained" color="primary" onClick={handleNext}>
                  {activeStep === steps.length - 1 ? 'Proceed To Payment' : 'Continue'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
      cart: state.shop.cart,
      activeCurrency: state.activeCurrency
  }
}

export default connect(mapStateToProps)(HorizontalLabelPositionBelowStepper);
