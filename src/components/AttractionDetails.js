import { useEffect, useRef } from 'react';

function AttractionDetails({ attraction, onClose, onEnquire }) {
  const closeButtonRef = useRef(null);
  useEffect(() => {
    closeButtonRef.current?.focus();
    function handleKeyDown(event) { if (event.key === 'Escape') onClose(); }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="dialog-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <section className="attraction-dialog" role="dialog" aria-modal="true" aria-labelledby="dialog-title">
        <button ref={closeButtonRef} className="dialog-close" type="button" onClick={onClose} aria-label="Close attraction details">×</button>
        <div className="dialog-image"><img src={attraction.image} alt={attraction.imageAlt} /></div>
        <div className="dialog-content">
          <p className="eyebrow">{attraction.category} <span>·</span> {attraction.location}</p>
          <h2 id="dialog-title">{attraction.name}</h2>
          <p className="dialog-description">{attraction.details}</p>
          <h3>Activities to try</h3>
          <ul className="activity-list">{attraction.activities.map((activity) => <li key={activity}>{activity}</li>)}</ul>
          <div className="dialog-bottom"><p><span>Estimated visit</span><strong>{attraction.estimatedCost}</strong></p><a className="button button-primary" href="#enquiry" onClick={() => onEnquire(attraction.name)}>Plan a visit <span aria-hidden="true">↗</span></a></div>
        </div>
      </section>
    </div>
  );
}

export default AttractionDetails;