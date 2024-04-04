import React from 'react';
import ServiceCard from './ServiceCard';
import icon1 from "../assets/Calendar.png"
import icon2 from "../assets/Calendar.png"
import icon3 from "../assets/Calendar.png"


const ServicePage = () => {
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold text-center mb-8">Our Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ServiceCard
                    title="Goal Setting"
                    description="Set achievable study goals to stay focused and motivated."
                    icon={icon1}
                />
                <ServiceCard
                    title="Progress Tracking"
                    description="Track your study progress over time and see how far you've come."
                    icon={icon2}
                />
                <ServiceCard
                    title="Data Visualization"
                    description="Visualize your study data with interactive charts and graphs."
                    icon={icon3}
                />
            </div>
        </div>
    );
};

export default ServicePage;
