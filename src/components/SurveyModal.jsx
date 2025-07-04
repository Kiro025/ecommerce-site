import { useState } from 'react';

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
    setTimeout(() => setShow(false), 2000); // auto-close after 2s
  };

  if (!show) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0,
      width: '100%', height: '100%',
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: 999
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '8px',
        width: '300px',
        textAlign: 'center'
      }}>
        {submitted ? (
          <p>Thank you for your feedback! ❤️</p>
        ) : (
          <>
            <h3>We value your feedback!</h3>
            <form onSubmit={handleSubmit}>
              <label>
                Rate your experience (1–5):<br />
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
              <br /><br />
              <label>
                Any comments?<br />
                <textarea
                  name="comment"
                  rows="3"
                  value={form.comment}
                  onChange={handleChange}
                />
              </label>
              <br /><br />
              <button type="submit">Submit</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default SurveyModal;
