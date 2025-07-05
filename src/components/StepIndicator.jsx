import { useLocation } from 'react-router-dom';

const StepIndicator = () => {
  const location = useLocation();

  const steps = [
    { name: 'Cart', path: '/cart' },
    { name: 'Info & Payment', path: '/checkout' },
    { name: 'Confirmation', path: '/confirmation' },
  ];

  const currentIndex = steps.findIndex(step => location.pathname.includes(step.path));

  return (
    <div className="step-indicator">
      {steps.map((step, index) => (
        <div key={step.name} className={`step ${index <= currentIndex ? 'active' : ''}`}>
          <span>{index + 1}</span>
          <p>{step.name}</p>
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
