'use client'
import React, { useState } from 'react';

export default function DeleteAccount() {
  const [contact, setContact] = useState('');
  const [reason, setReason] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // You would typically send this data to your backend API for processing.
    const data = {
      contact,
      reason,
    };

    // Simulate a successful form submission
    setMessage('Your request to delete your account has been submitted.');

    // Clear form fields
    setContact('');
    setReason('');
  };

  return (
    // <div className='w-screen h-screen flex justify-center items-center'>
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Delete Your Account</h1>
      <p className="mb-6">If you would like to delete your account, please fill out the form below. We will process your request and delete your data from our systems.</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact Number</label>
          <input
            type="phone"
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Your contact number"
          />
        </div>

        <div>
          <label htmlFor="reason" className="block text-sm font-medium text-gray-700">Reason for Leaving (optional)</label>
          <textarea
            id="reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Tell us why you want to delete your account"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Submit Request
        </button>
      </form>

      {message && (
        <p className="mt-4 text-green-600">{message}</p>
      )}
    </div>
    // </div>
  );
}
