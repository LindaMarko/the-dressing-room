import React from 'react';

export default function CheckoutWizard({ activeStep = 0 }) {
  return (
    <div className="mb-5 flex flex-wrap px-4">
      {['User Login', 'Shipping Address', 'Payment Method', 'Place Order'].map(
        (step, index) => (
          <div
            key={step}
            className={`flex-1 border-b-2 text-center 
            ${
              index <= activeStep
                ? 'border-emerald-400 text-emerald-400'
                : 'border-gray-400 text-gray-400'
            }`}
          >
            {step}
          </div>
        )
      )}
    </div>
  );
}
