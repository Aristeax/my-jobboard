// app/components/JobForm.tsx
import { useState } from 'react';

const JobForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [rate, setRate] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, description, rate }),
    });

    if (res.ok) {
      const data = await res.json();
      // Redirect to Stripe Checkout
      window.location.href = data.url;
    } else {
      alert('Checkout failed. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border rounded">
      <div className="mb-4">
        <label className="block mb-1">Job Name</label>
        <input
          type="text"
          className="w-full border p-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Description</label>
        <textarea
          className="w-full border p-2"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Rate (€)</label>
        <input
          type="number"
          className="w-full border p-2"
          value={rate}
          onChange={(e) => setRate(Number(e.target.value))}
          required
        />
      </div>
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Post Job (Pay €5)
      </button>
    </form>
  );
};

export default JobForm;
