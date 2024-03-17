// import React from 'react';
// import { IoLocationSharp } from 'react-icons/io5';

// export default function PlaceCard({ img, title, location, description, price, rating, type }) {
//     return (
//         <div className='max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700'>
//             <a href="#">
//                 <img className="rounded-t-lg w-full h-[200px] object-cover" src={img} alt={title} />
//             </a>
//             <div className="p-4">
//                 <a href="#">
//                     <h5 className="mb-2 text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
//                 </a>
//                 <p className="mb-3 text-sm sm:text-base font-normal text-gray-700 dark:text-gray-400">{description}</p>
//                 <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-2">
//                     <div className="flex items-center opacity-70 mb-2 sm:mb-0">
//                         <IoLocationSharp className="mr-2" />
//                         <p>{location}</p>
//                     </div>
//                     {/* <div className="text-lg font-bold">₹{price}</div> */}
//                 </div>
//                 <div className="mt-3 flex flex-col sm:flex-row justify-between items-start sm:items-center">
//                     <div className="flex items-center opacity-70 mb-2 sm:mb-0">
//                         {/* <p>{type}</p> */}
//                     </div>
//                     {/* <div className="flex items-center">
//                         <p className="text-sm text-gray-700 mr-2">Rating: {rating}</p>
//                     </div> */}
//                 </div>
//             </div>
//         </div>
//     );
// }