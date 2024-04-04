import React from 'react';

const ServiceCard = ({ title, description, icon }) => {
    return (
        <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="flex justify-center items-center h-20 bg-blue-500">
                <img className="h-10 w-10" src={icon} alt="Service Icon" />
            </div>
            <div className="px-4 py-2">
                <h2 className="text-gray-800 font-bold text-xl mb-2">{title}</h2>
                <p className="text-gray-600 text-sm">{description}</p>
            </div>
        </div>
    );
};

export default ServiceCard;
