// LandingPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import AboutPage from '../pages/AboutPage';

const LandingPage = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
            <header className="text-center mb-12">
                <h1 className="text-4xl font-bold text-blue-600 mb-4">Study Progress Tracker</h1>
                <nav>
                    <Link to="/login" className="text-blue-600 px-4 py-2 rounded-md border border-blue-600 mr-4">Login</Link>
                    <Link to="/signup" className="text-white bg-blue-600 px-4 py-2 rounded-md">Sign Up</Link>
                </nav>
            </header>

            <section className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Achieve Your Academic Goals</h2>
                        <p className="text-gray-700 mb-8">With our study progress tracker, you can stay organized, focused, and on track to reach your academic goals. Whether you're a student, educator, or lifelong learner, our platform is designed to help you succeed.</p>
                    </div>
                    <div>
                        <img src="/study.jpg" alt="Study Progress Tracker" className="rounded-lg shadow-md" />
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4 mt-12">
                <h2 className="text-3xl font-bold mb-4">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-bold mb-4">Study Session Tracking</h3>
                        <p className="text-gray-700">Record your study sessions with ease. Keep track of subjects, durations, and notes for each session.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-bold mb-4">Goal Setting</h3>
                        <p className="text-gray-700">Set and monitor your study goals. Stay motivated and accountable as you work towards academic success.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-bold mb-4">Progress Insights</h3>
                        <p className="text-gray-700">Gain valuable insights into your study habits and progress. Identify areas for improvement and track your growth over time.</p>
                    </div>
                </div>
            </section>
            <AboutPage/>

            <footer className="mt-auto text-gray-600 text-center py-8">
                <p>Contact us at support@example.com</p>
            </footer>
        </div>
    );
};

export default LandingPage;
