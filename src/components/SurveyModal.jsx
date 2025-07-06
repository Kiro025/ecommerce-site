import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai'; // ← import icon

const SurveyModal = () => {
  const [show, setShow] = useState(true);
  const [form, setForm] = useState({ rating: '', comment: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setShow(false), 2000);
  };

  if (!show) return null;

  return (
    <div className="survey-backdrop">
      <div className="survey-modal">
        <div
          className="close-icon"
          onClick={() => setShow(false)}
          role="button"
          tabIndex={0}
        >
          <AiOutlineClose size={20} />
        </div>

        {submitted ? (
          <p className="survey-thank-you">✅ Thank you for your feedback!</p>
        ) : (
          <>
            <h3>We’d love your feedback 💬</h3>
            <p className="survey-subtext">
              Your opinion helps us improve the SwiftFit experience.
            </p>
            <form onSubmit={handleSubmit} className="survey-form">
              <label>
                Rate your experience (1–5):
                <input
                  type="number"
                  name="rating"
                  min="1"
                  max="5"
                  required
                  value={form.rating}
                  onChange={handleChange}
                />
              </label>

              <label>
                Comments:
                <textarea
                  name="comment"
                  rows="3"
                  placeholder="Let us know what you think..."
                  value={form.comment}
                  onChange={handleChange}
                />
              </label>

              <button type="submit">Submit</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default SurveyModal;
