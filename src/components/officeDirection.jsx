import { useRef, useState, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine';
import { motion } from 'framer-motion';

export default function DirectionsToOfficeModal({ officeLocation, onClose }) {
  const mapRef = useRef(null);
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    // Get User's Current Location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation([position.coords.latitude, position.coords.longitude]);
      },
      (error) => {
        console.error('Error fetching location:', error);
        alert('Unable to fetch your location.');
      }
    );
  }, []);

  useEffect(() => {
    if (!mapRef.current || !userLocation) return;

    // Initialize the map
    const map = L.map(mapRef.current).setView(userLocation, 13);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    // Add the route from user's location to the office
    L.Routing.control({
      waypoints: [L.latLng(userLocation), L.latLng(officeLocation)],
      routeWhileDragging: true,
      lineOptions: {
        styles: [{ color: '#007BFF', weight: 5 }],
      },
    }).addTo(map);

    return () => map.remove(); // Clean up the map on unmount
  }, [userLocation, officeLocation]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="p-4 fixed top-0 bottom-0 right-0 left-0 backdrop-blur-sm flex flex-col justify-center items-center z-50">
      <div className="w-full sm:w-4/5 md:w-1/2 bg-white py-4 px-4 flex flex-col rounded-lg shadow-lg relative">
        <button
          onClick={onClose}
          className="text-red-500 text-right mb-2 text-lg font-bold">
          &times;
        </button>
        {!userLocation ? (
          <p className="text-center">Fetching your location...</p>
        ) : (
          <div
            ref={mapRef}
            className="w-full h-96 rounded-md"
            style={{ background: '#f0f0f0' }}></div>
        )}
      </div>
    </motion.div>
  );
}

// export function OfficeDirections() {
//   const officeCoordinates = [12.9716, 77.5946];
//   const [showDirections, setShowDirections] = useState(false);

//   return (
//     <div className="p-4">
//       <button
//         onClick={() => setShowDirections(true)}
//         className="bg-blue-500 text-white px-4 py-2 rounded-md">
//         Get Directions to Office
//       </button>

//       {showDirections && (
//         <DirectionsToOfficeModal
//           officeLocation={officeCoordinates}
//           onClose={() => setShowDirections(false)}
//         />
//       )}
//     </div>
//   );
// }
