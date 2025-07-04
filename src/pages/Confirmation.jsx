import SurveyModal from '../components/SurveyModal';

const Confirmation = () => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Thank You for Your Order!</h2>
      <p>Your SwiftFit gear is on its way 💪</p>
      <p>You'll receive a confirmation email shortly.</p>

      {/* Feedback modal */}
      <SurveyModal />
    </div>
  );
};

export default Confirmation;
