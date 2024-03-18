import React, { useState } from 'react';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';

const Sessions = () => {
    const [sessions, setSessions] = useState([]);
    const [newSession, setNewSession] = useState({
        date: '',
        subject: '',
        duration: '',
        notes: ''
    });
    const [editingIndex, setEditingIndex] = useState(null);
    const [sortBy, setSortBy] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewSession({ ...newSession, [name]: value });
    };

    const handleAddSession = () => {
        if (editingIndex !== null) {
            // Editing existing session
            const updatedSessions = [...sessions];
            updatedSessions[editingIndex] = newSession;
            setSessions(updatedSessions);
            setEditingIndex(null);
        } else {
            // Adding new session
            setSessions([...sessions, newSession]);
        }
        setNewSession({
            date: '',
            subject: '',
            duration: '',
            notes: ''
        });
        setIsModalOpen(false);
    };

    const handleEditSession = (index) => {
        // Set editingIndex and populate newSession with session details
        setEditingIndex(index);
        setNewSession(sessions[index]);
        setIsModalOpen(true);
    };

    const handleDeleteSession = (index) => {
        const updatedSessions = [...sessions];
        updatedSessions.splice(index, 1);
        setSessions(updatedSessions);
    };

    const handleSort = (sortByField) => {
        if (sortBy === sortByField) {
            setSessions([...sessions].reverse());
            setSortBy(null); // Reset sortBy if same field is clicked again
        } else {
            setSessions([...sessions].sort((a, b) => {
                if (a[sortByField] < b[sortByField]) return -1;
                if (a[sortByField] > b[sortByField]) return 1;
                return 0;
            }));
            setSortBy(sortByField);
        }
    };

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">Study Sessions</h1>
            <button className="bg-blue-500 text-white px-4 py-2 rounded shadow mb-4" onClick={() => {setIsModalOpen(true); setEditingIndex(null);}}>Add Session</button>
            
            <div className="mt-4">
                <h2 className="text-xl font-bold mb-2">Recent Sessions</h2>
            
                {sessions.map((session, index) => (
                    <div key={index} className="border border-gray-300 rounded p-2 mb-2 cursor-pointer">
                        <p><strong onClick={() => handleSort('date')}>Date:</strong> {session.date}</p>
                        <p><strong onClick={() => handleSort('duration')}>Subject:</strong> {session.subject}</p>
                        <p><strong onClick={() => handleSort('subject')}>Duration:</strong> {session.duration} minutes</p>
                        <p><strong>Notes:</strong> {session.notes}</p>
                        <div className="flex justify-end mt-2">
                            <RiEdit2Line className="text-blue-500 cursor-pointer mr-2" onClick={() => handleEditSession(index)} />
                            <RiDeleteBinLine className="text-red-500 cursor-pointer" onClick={() => handleDeleteSession(index)} />
                        </div>
                    </div>
                ))}
            </div>
            {/* Modal for adding/editing session */}
            {isModalOpen && (
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-4 rounded-lg w-96">
                        <h2 className="text-xl font-bold mb-4">{editingIndex !== null ? 'Edit Session' : 'Add Session'}</h2>
                        <div className="mb-4">
                            <label htmlFor="date" className="block mb-1">Date:</label>
                            <input
                                type="date"
                                name="date"
                                value={newSession.date}
                                onChange={handleInputChange}
                                className="border border-gray-300 px-2 py-1 rounded mb-2 w-full"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="subject" className="block mb-1">Subject:</label>
                            <input
                                type="text"
                                name="subject"
                                value={newSession.subject}
                                onChange={handleInputChange}
                                className="border border-gray-300 px-2 py-1 rounded mb-2 w-full"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="duration" className="block mb-1">Duration (in minutes):</label>
                            <input
                                type="number"
                                name="duration"
                                value={newSession.duration}
                                onChange={handleInputChange}
                                className="border border-gray-300 px-2 py-1 rounded mb-2 w-full"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="notes" className="block mb-1">Notes:</label>
                            <textarea
                                name="notes"
                                value={newSession.notes}
                                onChange={handleInputChange}
                                className="border border-gray-300 px-2 py-1 rounded mb-2 w-full"
                            />
                        </div>
                        <div className="flex justify-between">
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded shadow"
                                onClick={handleAddSession}
                            >
                                {editingIndex !== null ? 'Save Session' : 'Add Session'}
                            </button>
                            <button className="bg-red-500 text-white px-4 py-2 rounded shadow" onClick={() => setIsModalOpen(false)}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Sessions;
