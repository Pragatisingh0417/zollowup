import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; 
import { fetchMaids } from '../maidApi';

const MaidSelection = () => {
    const location = useLocation(); 
    const [filteredMaids, setFilteredMaids] = useState([]);
    const navigate = useNavigate(); 

    useEffect(() => {
      const loadMaids = async () => {
          try {
              const selectedHours = location.state?.selectedHours;
              console.log("Selected Hours:", selectedHours);  
              if (selectedHours) {
                  const allMaids = await fetchMaids(selectedHours); 
                  setFilteredMaids(allMaids);
              } else {
                  console.error("No selectedHours found in location state");
              }
          } catch (err) {
              console.error("Failed to fetch maids", err);
          }
      };
  
      loadMaids();
  }, [location.state]); 
  
    const handleBookMaid = (maid) => {
        // Navigate to Checkout Page and pass the selected maid details in the state
        navigate('/checkoutPage', { state: { selectedMaid: maid } });
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold text-center mb-8">
                Available Maids for {location.state.selectedHours} Hours
            </h2>
            <div className="maids-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {filteredMaids.length > 0 ? (
                    filteredMaids.map((maid) => (
                        <div
                            key={maid.id}
                            className="maid-card bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center text-center"
                        >
                            <img
                                src={maid.image}
                                alt={maid.name}
                                className="w-24 h-24 object-cover rounded-full border-4 border-blue-100 mb-4"
                            />
                            <h3 className="text-lg font-semibold text-gray-800">{maid.name}</h3>
                            <div className="mt-2 space-y-1 text-sm text-gray-600">
                                <p>
                                    <span className="font-medium text-gray-700">Name:</span>{" "}
                                    {maid.experience}
                                </p>
                                <p>
                                    <span className="font-medium text-gray-700">Age:</span>{" "}
                                    {maid.religion}
                                </p>
                                <p>
                                    <span className="font-medium text-gray-700">Experience:</span> {maid.age}
                                </p>
                                <p>
                                    <span className="font-medium text-gray-700">Religion:</span> {maid.age}
                                </p>
                                <p>
                                    <span className="font-medium text-gray-700">Language:</span> {maid.age}
                                </p>
                                <p>
                                    <span className="font-medium text-gray-700">Speciality:</span> {maid.age}
                                </p>
                                <p>
                                    <span className="font-medium text-gray-700">State:</span> {maid.age}
                                </p>
                                <p>
                                    <span className="font-medium text-gray-700">Martial Status:</span> {maid.age}
                                </p>
                            </div>

                            <button
                                onClick={() => handleBookMaid(maid)}
                                className="mt-4 px-4 py-2 w-full bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all"
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
        </div>
    );
};

export default MaidSelection;
