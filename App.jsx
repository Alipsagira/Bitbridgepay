
import React, { useState} from 'react';

function App() {
  const [amount, setAmount] = useState('');
  const [link, setLink] = useState('');

  const generateLink = async () => {
    const res = await fetch('http://localhost:3000/api/create-payment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ amount}),
});
    const data = await res.json();
    setLink(data.link);
};

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">BitBridge Pay</h1>
      <input
        type="number"
        placeholder="Amount in sBTC"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-2 w-full mb-4"
      />
      <button onClick={generateLink} className="bg-blue-600 text-white px-4 py-2 rounded">
        Generate Payment Link
      </button>
      {link && (
        <div className="mt-4">
          <p className="text-green-600">Payment Link:</p>
          <a href={link} className="text-blue-500 underline">{link}</a>
        </div>
)}
    </div>
);
}

export default App;




