import React from 'react';
import experts from '../db/expert.json';

export default function MeetOurExperts() {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">
          Meet Our Experts
        </h2>
        <p className="mb-6 text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {experts.map((expert) => (
            <div
              key={expert.id}
              className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src={expert.image}
                alt={expert.name}
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-medium text-gray-700">
                {expert.name}
              </h3>
              <p className="text-gray-500">{expert.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
