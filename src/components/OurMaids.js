import React from 'react';

const maidsData = [
  {
    id: 1,
    name: 'Sunita Sharma',
    age: 32,
    religion: 'Hindu',
    experience: '5 years',
    hours: '8',
    image: 'https://img.freepik.com/free-photo/chambermaid-preparing-hotel-room_23-2148095204.jpg',
  },
  {
    id: 2,
    name: 'Fatima Begum',
    age: 28,
    religion: 'Muslim',
    experience: '3 years',
    hours: '10',
    image: 'https://img.freepik.com/free-photo/chambermaid-preparing-hotel-room_23-2148095204.jpg',
  },
  {
    id: 3,
    name: 'Anjali Kumari',
    age: 40,
    religion: 'Christian',
    experience: '10 years',
    hours: '8',
    image: 'https://img.freepik.com/free-photo/chambermaid-preparing-hotel-room_23-2148095204.jpg',
  },
  // Add more with different `hours` values
];

const OurMaids = ({ selectedHours }) => {
  const filteredMaids = maidsData.filter((maid) => maid.hours === selectedHours);

  return (
    <div className="bg-gray-50 py-0 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Available Maids for {selectedHours} Hours
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredMaids.length > 0 ? (
          filteredMaids.map((maid) => (
            <div key={maid.id} className="bg-white rounded-2xl shadow-md p-5 text-center">
              <img
                src={maid.image}
                alt={maid.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800">{maid.name}</h3>
              <p className="text-gray-600">Age: {maid.age}</p>
              <p className="text-gray-600">Religion: {maid.religion}</p>
              <p className="text-gray-600">Experience: {maid.experience}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No maids available for {selectedHours} hours.
          </p>
        )}
      </div>
    </div>
  );
};

export default OurMaids;
