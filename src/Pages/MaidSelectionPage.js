import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchMaids } from '../maidApi';
import VideoModal from '../components/VideoModal';
import { Star } from 'lucide-react';

const MaidSelection = () => {
  const location = useLocation();
  const [filteredMaids, setFilteredMaids] = useState([]);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState(null);
  const [selectedThumbnail, setSelectedThumbnail] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadMaids = async () => {
      try {
        const selectedHours = location.state?.selectedHours;
        if (selectedHours) {
          const allMaids = await fetchMaids(selectedHours);
          const availableMaids = allMaids.filter(
            maid =>
              Array.isArray(maid.availableHours) &&
              maid.availableHours.includes(`${selectedHours} Hours`)
          );
          setFilteredMaids(availableMaids);
        } else {
          console.error('No selectedHours found in location state');
        }
      } catch (err) {
        console.error('Failed to fetch maids', err);
      }
    };

    loadMaids();
  }, [location.state]);

  const handleBookMaid = (maid) => {
    navigate('/checkout', { state: { selectedService: maid } });
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 inline-block ${index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
        fill={index < rating ? 'currentColor' : 'none'}
      />
    ));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-8">
        Available Maids for {location.state.selectedHours} Hours
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {filteredMaids.length > 0 ? (
          filteredMaids.map((maid) => (
            <div
              key={maid._id}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col items-start text-left"
            >
              <img
                src={maid.image}
                alt={maid.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <div className="flex justify-between items-center w-full mb-1">
                <h3 className="text-lg font-semibold text-gray-800">{maid.name}</h3>
                <span className="text-green-500 text-sm font-medium">● Available</span>
              </div>

              <div className="mb-2">
                {renderStars(maid.rating || 4)}
              </div>

              <div className="text-sm text-gray-700 w-full space-y-1 mb-4">
                <p><span className="font-semibold">Experience:</span> {maid.experience}</p>
                <p><span className="font-semibold">Age:</span> {maid.age}</p>
                <p><span className="font-semibold">Religion:</span> {maid.religion}</p>
                <p><span className="font-semibold">Language:</span> {maid.language || '—'}</p>
                <p><span className="font-semibold">Speciality:</span> {maid.speciality || '—'}</p>
                <p><span className="font-semibold">State:</span> {maid.state || '—'}</p>
                <p><span className="font-semibold">Marital Status:</span> {maid.maritalStatus || '—'}</p>
              </div>

              {maid.video && (
                <button
                  onClick={() => {
                    setSelectedVideoUrl(`http://localhost:5000/uploads/${maid.video}`);
                    setSelectedThumbnail(maid.image);
                  }}
                  className="mb-3 w-full px-4 py-2 bg-gray-100 text-sm rounded-md hover:bg-gray-200 border flex items-center justify-center gap-2"
                >
                  ▶️ Watch Intro
                </button>
              )}




              <button
                onClick={() => handleBookMaid(maid)}
                className="w-full px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Book This Maid
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-full">
            No maids available for this selection.
          </p>
        )}
      </div>

      {selectedVideoUrl && (
        <VideoModal
          videoUrl={selectedVideoUrl}
          thumbnail={selectedThumbnail}
          onClose={() => setSelectedVideoUrl(null)}
        />
      )}
    </div>
  );
};

export default MaidSelection;
