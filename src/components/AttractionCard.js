function AttractionCard({ attraction, onSelect }) {
  return (
    <article className="attraction-card">
      <button className="attraction-card-button" type="button" onClick={() => onSelect(attraction)} aria-label={`View details for ${attraction.name}`}>
        <span className="card-image-wrap"><img src={attraction.image} alt={attraction.imageAlt} loading="lazy" /><span className="card-category">{attraction.category}</span><span className="card-open" aria-hidden="true">↗</span></span>
        <span className="card-copy">
          <span className="card-location">{attraction.location}</span>
          <span className="card-title-row"><strong>{attraction.name}</strong><span aria-hidden="true">↗</span></span>
          <span className="card-description">{attraction.description}</span>
          <span className="card-cost">EST. {attraction.estimatedCost}</span>
        </span>
      </button>
    </article>
  );
}

export default AttractionCard;