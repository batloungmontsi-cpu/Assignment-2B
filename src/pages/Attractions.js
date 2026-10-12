import { useMemo, useState } from 'react';
import AttractionCard from '../components/AttractionCard';

function Attractions({ attractions, onSelectAttraction }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All categories');
  const categories = useMemo(() => ['All categories', ...new Set(attractions.map((attraction) => attraction.category))], [attractions]);
  const filteredAttractions = attractions.filter((attraction) => {
    const matchesName = attraction.name.toLowerCase().includes(query.trim().toLowerCase());
    const matchesCategory = category === 'All categories' || attraction.category === category;
    return matchesName && matchesCategory;
  });

  return (
    <section className="attractions-section" id="attractions" aria-labelledby="attractions-title">
      <div className="section-topline"><p className="eyebrow">Find your kind of highland</p><span className="section-index">02 / 03</span></div>
      <div className="attractions-heading">
        <div><h2 id="attractions-title">Explore<br /><em>Lesotho.</em></h2><p>From high mountain passes to the stories held in stone, find a place that stays with you.</p></div>
        <div className="results-count"><strong>{String(filteredAttractions.length).padStart(2, '0')}</strong><span>places to<br />discover</span></div>
      </div>
      <div className="filter-bar" role="search">
        <label className="search-field" htmlFor="attraction-search"><span className="search-icon" aria-hidden="true">⌕</span><input id="attraction-search" type="search" aria-label="Search destinations" placeholder="Search destinations..." value={query} onChange={(event) => setQuery(event.target.value)} /></label>
        <label className="category-field" htmlFor="category-filter"><span>Experience</span><select id="category-filter" aria-label="Filter by category" value={category} onChange={(event) => setCategory(event.target.value)}>{categories.map((option) => <option key={option}>{option}</option>)}</select></label>
      </div>
      {filteredAttractions.length > 0 ? (
        <div className="attraction-grid" aria-live="polite">{filteredAttractions.map((attraction) => <AttractionCard key={attraction.id} attraction={attraction} onSelect={onSelectAttraction} />)}</div>
      ) : (
        <div className="empty-results" role="status"><span aria-hidden="true">↗</span><h3>No places found just yet.</h3><p>Try another name or choose a different experience.</p><button type="button" onClick={() => { setQuery(''); setCategory('All categories'); }}>Clear search</button></div>
      )}
      <p className="cost-note">Prices are estimates in Lesotho loti (M), per person unless noted. Confirm current fees, access and guide availability before travelling.</p>
    </section>
  );
}

export default Attractions;