import { useEffect, useState } from 'react';

const emptyForm = { fullName: '', email: '', phone: '', destination: '', visitors: '1', visitDate: '', message: '' };
const fullNamePattern = /^[\p{L}\p{M}]+(?: +[\p{L}\p{M}]+)*$/u;
const emailPattern = /^[A-Z0-9!#$%&'*+\/?^_`{|}~-]+(?:\.[A-Z0-9!#$%&'*+\/?^_`{|}~-]+)*@(?:[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?\.)+[A-Z]{2,63}$/i;

function getToday() {
  const date = new Date();
  return new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
}

function isValidPhone(value) {
  return /^\+?\d{7,15}$/.test(value);
}

function sanitizePhone(value) {
  const digits = value.replace(/\D/g, '');
  return value.trimStart().startsWith('+') ? `+${digits}` : digits;
}

function EnquiryForm({ attractions, initialDestination }) {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [messageTouched, setMessageTouched] = useState(false);

  useEffect(() => {
    if (initialDestination) setForm((current) => ({ ...current, destination: initialDestination }));
  }, [initialDestination]);

  function updateField(event) {
    const { name, value } = event.target;
    const nextValue = name === 'fullName'
      ? value.replace(/[^\p{L}\p{M} ]/gu, '')
      : name === 'phone' ? sanitizePhone(value) : value;
    setForm((current) => ({ ...current, [name]: nextValue }));
    if (name === 'message') setMessageTouched(true);
    setErrors((current) => ({ ...current, [name]: '' }));
    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = {};
    if (!form.fullName.trim()) nextErrors.fullName = 'Please enter your full name.';
    else if (!fullNamePattern.test(form.fullName.trim())) nextErrors.fullName = 'Use letters and spaces only for your full name.';
    if (!emailPattern.test(form.email.trim())) nextErrors.email = 'Please enter a valid email address.';
    if (!isValidPhone(form.phone)) nextErrors.phone = 'Enter a valid phone number with 7 to 15 digits.';
    if (!form.destination) nextErrors.destination = 'Choose a destination to continue.';
    const visitorCount = Number(form.visitors);
    if (!Number.isInteger(visitorCount) || visitorCount < 1) nextErrors.visitors = 'Enter a whole number of visitors greater than zero.';
    if (!form.visitDate || form.visitDate < getToday()) nextErrors.visitDate = 'Choose today or a future visit date.';
    if (form.message.trim().length < 10) nextErrors.message = 'Please add a short message (at least 10 characters).';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) setSubmitted(true);
  }

  function sendAnother() {
    setForm({ ...emptyForm, destination: initialDestination || '' });
    setErrors({});
    setSubmitted(false);
    setMessageTouched(false);
  }

  const messageError = errors.message || (form.message.trim().length < 10
    ? 'Please add a short message (at least 10 characters).'
    : '');

  if (submitted) {
    return <div className="form-success" role="status"><span className="success-icon" aria-hidden="true">✓</span><p className="eyebrow">Enquiry ready</p><h3>Your journey starts<br /><em>right here.</em></h3><p>Thank you, {form.fullName.split(' ')[0]}. Your enquiry about {form.destination} has been recorded in this demo. Connect a booking service to deliver it to a local travel host.</p><button className="text-button" type="button" onClick={sendAnother}>Send another enquiry <span aria-hidden="true">↗</span></button></div>;
  }

  return (
    <form className="enquiry-form" onSubmit={handleSubmit} noValidate>
      <div className="form-heading"><span>01</span><p>Tell us about your trip</p></div>
      <div className="form-grid">
        <div className="form-field"><label htmlFor="full-name">Full name <span>*</span></label><input id="full-name" name="fullName" autoComplete="name" value={form.fullName} onChange={updateField} aria-invalid={Boolean(errors.fullName)} aria-describedby={errors.fullName ? 'full-name-error' : undefined} />{errors.fullName && <span className="field-error" id="full-name-error">{errors.fullName}</span>}</div>
        <div className="form-field"><label htmlFor="email-address">Email address <span>*</span></label><input id="email-address" name="email" type="email" autoComplete="email" value={form.email} onChange={updateField} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} />{errors.email && <span className="field-error" id="email-error">{errors.email}</span>}</div>
        <div className="form-field"><label htmlFor="phone-number">Phone number <span>*</span></label><input id="phone-number" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="+266" value={form.phone} onChange={updateField} aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? 'phone-error' : undefined} />{errors.phone && <span className="field-error" id="phone-error">{errors.phone}</span>}</div>
        <div className="form-field"><label htmlFor="destination">Selected destination <span>*</span></label><select id="destination" name="destination" value={form.destination} onChange={updateField} aria-invalid={Boolean(errors.destination)} aria-describedby={errors.destination ? 'destination-error' : undefined}><option value="">Choose a destination</option>{attractions.map((attraction) => <option value={attraction.name} key={attraction.id}>{attraction.name}</option>)}</select>{errors.destination && <span className="field-error" id="destination-error">{errors.destination}</span>}</div>
        <div className="form-field"><label htmlFor="visitors">Number of visitors <span>*</span></label><input id="visitors" name="visitors" type="number" inputMode="numeric" min="1" step="1" list="visitor-count-options" value={form.visitors} onChange={updateField} aria-invalid={Boolean(errors.visitors)} aria-describedby={errors.visitors ? 'visitors-error' : undefined} /><datalist id="visitor-count-options">{Array.from({ length: 20 }, (_, index) => <option value={index + 1} key={index + 1} />)}</datalist>{errors.visitors && <span className="field-error" id="visitors-error">{errors.visitors}</span>}</div>
        <div className="form-field"><label htmlFor="visit-date">Preferred visit date <span>*</span></label><input id="visit-date" name="visitDate" type="date" min={getToday()} value={form.visitDate} onChange={updateField} aria-invalid={Boolean(errors.visitDate)} aria-describedby={errors.visitDate ? 'date-error' : undefined} />{errors.visitDate && <span className="field-error" id="date-error">{errors.visitDate}</span>}</div>
        <div className="form-field form-field-wide"><label htmlFor="message">Your message <span>*</span></label><textarea id="message" name="message" rows="3" placeholder="Tell us what you are hoping to experience..." value={form.message} onChange={updateField} aria-invalid={Boolean(errors.message) || (messageTouched && form.message.trim().length < 10)} aria-describedby={messageError ? 'message-error' : undefined} />{messageError && <span className="field-error" id="message-error">{messageError}</span>}</div>
      </div>
      <div className="form-bottom"><p>Fields marked * are required.</p><button className="button button-primary" type="submit">Send enquiry <span aria-hidden="true">↗</span></button></div>
    </form>
  );
}

export default EnquiryForm;