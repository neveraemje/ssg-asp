"use client"
import React, { useState } from 'react';

const DownloadGetting= () => {
  const [foundationData, setFoundationData] = useState(null);
  const [foundationLoading, setFoundationLoading] = useState(false);
  const [foundationDownloadFeedback, setFoundationDownloadFeedback] = useState(null);

  const fetchData = async () => {
    try {
      setFoundationLoading(true);

      const URL = process.env.NEXT_PUBLIC_URL;
      const response = await fetch(`${URL}/api/download-getting`, {
        cache: 'no-cache',
      });

      if (!response.ok) {
        throw new Error('Failed to fetch foundation data');
      }

      const data = await response.json();
      setFoundationData(data);
      //console.log('Foundation Data:', data);
      setFoundationDownloadFeedback('Update success');
    } catch (error) {
      //console.error('Error fetching foundation data:', error.message);
      setFoundationDownloadFeedback('Update failed');
    } finally {
      setFoundationLoading(false);
    }
  };

  return (
    <div>
   
          <button
            onClick={fetchData}
            disabled={foundationLoading}
            className={`bg-gray-800 text-white px-3 py-1 text-base rounded-xl hover:bg-gray-900 ${foundationLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {foundationLoading ? 'Updating...' : 'Update image'}
          </button>

          {/* Display the download feedback */}
          {foundationDownloadFeedback && <p>{foundationDownloadFeedback}</p>}

    </div>
  );
};

export default DownloadGetting;
