import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const Orchestration = () => <div><h2>Orchestration Page</h2></div>;
const Party1 = () => <div><h2>Party1 Page</h2></div>;
const Party1Escrow = () => <div><h2>Party1 Escrow Page</h2></div>;
const Party2 = () => <div><h2>Party2 Page</h2></div>;
const Party2Escrow = () => <div><h2>Party2 Escrow Page</h2></div>;

// NEW: Embedded iframe component
const Link2Owner = () => (
  <div>
    <h2>Link2Owner Embedded</h2>
    <iframe
      src="https://link2owner.com" // Replace with your actual domain
      title="Link2Owner"
      width="200"
      height="200"
      style={{ border: '1px solid #ccc', borderRadius: 8 }}
    />
  </div>
);

const App = () => {
  const [page, setPage] = useState('home');

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-200 via-blue-100 to-pink-200 p-4">
      <div>
        {page === 'home' && (
          <>
            <p>hi</p>
            <ul>
              <li><button onClick={() => setPage('orchestration')}>Orchestration link</button></li>
              <li><button onClick={() => setPage('party1')}>party1 link</button></li>
              <li><button onClick={() => setPage('party1escrow')}>party1 escrow link</button></li>
              <li><button onClick={() => setPage('party2')}>party2 link</button></li>
              <li><button onClick={() => setPage('party2escrow')}>party2 escrow link</button></li>
              {/* NEW: Add button for embedded page */}
              <li><button onClick={() => setPage('link2owner')}>Link2Owner Embed</button></li>
            </ul>
          </>
        )}
        {page === 'orchestration' && <Orchestration />}
        {page === 'party1' && <Party1 />}
        {page === 'party1escrow' && <Party1Escrow />}
        {page === 'party2' && <Party2 />}
        {page === 'party2escrow' && <Party2Escrow />}
        {page === 'link2owner' && <Link2Owner />}
        {page !== 'home' && (
          <button onClick={() => setPage('home')} style={{ marginTop: 20, color: 'blue' }}>
            Back to Home
          </button>
        )}
      </div>
    </div>
  );
};

export default App;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
