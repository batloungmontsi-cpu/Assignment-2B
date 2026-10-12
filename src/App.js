import { useEffect, useState } from 'react';
import AttractionDetails from './components/AttractionDetails';
import EnquiryForm from './components/EnquiryForm';
import Footer from './components/Footer';
import Header from './components/Header';
import Attractions from './pages/Attractions';
import Home from './pages/Home';
import { attractions } from './data/attractions';
import './App.css';

function App() {
  const [selectedAttraction, setSelectedAttraction] = useState(null);
  const [enquiryDestination, setEnquiryDestination] = useState('');

  useEffect(() => {
    document.title = 'Discover Lesotho | The Mountain Kingdom';
  }, []);

  function startEnquiry(destination) {
    setEnquiryDestination(destination);
    setSelectedAttraction(null);
  }

  return (
    <div className="app-shell">
      <Header />
      <main>
        <Home attractions={attractions} onSelectAttraction={setSelectedAttraction} />
        <Attractions attractions={attractions} onSelectAttraction={setSelectedAttraction} />
        <section className="enquiry-section" id="enquiry" aria-labelledby="enquiry-title">
          <div className="enquiry-intro">
            <p className="eyebrow">Your next chapter starts here</p>
            <h2 id="enquiry-title">Plan a visit<br /><em>to Lesotho.</em></h2>
            <p>Tell us what you have in mind. Share a few details and we&apos;ll help you start planning your time in the Mountain Kingdom.</p>
            <div className="enquiry-contact"><span className="contact-mark" aria-hidden="true">↗</span><span>Thoughtful trips begin with a conversation.</span></div>
          </div>
          <EnquiryForm attractions={attractions} initialDestination={enquiryDestination} />
        </section>
      </main>
      <Footer />
      {selectedAttraction && (
        <AttractionDetails
          attraction={selectedAttraction}
          onClose={() => setSelectedAttraction(null)}
          onEnquire={startEnquiry}
        />
      )}
    </div>
  );
}

export default App;