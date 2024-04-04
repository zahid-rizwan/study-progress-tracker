import React, { useState, useEffect } from "react";

const AssignmentTracker = () => {
  const [assignments, setAssignments] = useState([]);
  const [newAssignment, setNewAssignment] = useState({
    name: "",
    dueDate: "",
    priority: "low", // Default priority
    status: "pending", // Default status
  });
  const currentDate = new Date();
  const minDate =
    currentDate.getFullYear() +
    "-" +
    ("0" + (currentDate.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + currentDate.getDate()).slice(-2);
  const [showModal, setShowModal] = useState(false);
  const [sortBy, setSortBy] = useState(null);

  useEffect(() => {
    console.log("Fetching assignments from local storage...");
    const savedAssignments = localStorage.getItem("assignments");
    console.log("Saved assignments:", savedAssignments);
    if (savedAssignments) {
      setAssignments(JSON.parse(savedAssignments));
    }
  }, []);

  useEffect(() => {
    console.log("Saving assignments to local storage:", assignments);
    localStorage.setItem("assignments", JSON.stringify(assignments));
  }, [assignments]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAssignment({ ...newAssignment, [name]: value });
  };

  const handleAddAssignment = () => {
    setAssignments([...assignments, newAssignment]);
    setNewAssignment({
      name: "",
      dueDate: "",
      priority: "low",
      status: "pending",
    });
    setShowModal(false);
  };

  const handleStatusChange = (index, newStatus) => {
    const updatedAssignments = [...assignments];
    updatedAssignments[index].status = newStatus;
    setAssignments(updatedAssignments);
  };

  const handleSort = (sortByField) => {
    if (sortBy === sortByField) {
      setAssignments([...assignments].reverse());
    } else {
      setAssignments(
        [...assignments].sort((a, b) => {
          if (a[sortByField] < b[sortByField]) return -1;
          if (a[sortByField] > b[sortByField]) return 1;
          return 0;
        })
      );
    }
    setSortBy(sortByField);
  };

  const priorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-600";
      case "medium":
        return "bg-amber-600";
      case "low":
      default:
        return "bg-green-500";
    }
  };

  return (
    <div className="container mx-auto p-10">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded shadow mb-4"
        onClick={() => setShowModal(true)}
      >
        Add Assignment
      </button>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-4 rounded shadow  ">
            <h2 className="text-lg font-bold mb-4">Add Assignment</h2>
            <input
              type="text"
              name="name"
              placeholder="Assignment Name"
              value={newAssignment.name}
              onChange={handleInputChange}
              className="block w-full px-4 py-2 border rounded mb-2"
            />
            <input
              type="date"
              name="dueDate"
              value={newAssignment.dueDate}
              min={minDate} // Set min to today's date
              onChange={handleInputChange}
              className="block w-full px-4 py-2 border rounded mb-2"
            />
            <select
              name="priority"
              value={newAssignment.priority}
              onChange={handleInputChange}
              className="block w-full px-4 py-2 border rounded mb-2"
            >
              <option value="low">Low Priority</option>
              <option value="medium">Medium Priority</option>
              <option value="high">High Priority</option>
            </select>
            <div className="flex justify-end">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded shadow mr-2"
                onClick={handleAddAssignment}
              >
                Add
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded shadow"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-400 text-center">
          <thead>
            <tr>
              <th className="border border-gray-400 px-4 py-2 cursor-pointer" onClick={() => handleSort("name")}>
                Assignment Name
              </th>
              <th className="border border-gray-400 px-4 py-2 cursor-pointer" onClick={() => handleSort("dueDate")}>
                Due Date
              </th>
              <th className="border border-gray-400 px-4 py-2 cursor-pointer" onClick={() => handleSort("priority")}>
                Priority
              </th>
              <th className="border border-gray-400 px-4 py-2 cursor-pointer" onClick={() => handleSort("status")}>
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((assignment, index) => (
              <tr key={index} className={priorityColor(assignment.priority)}>
                <td className="border border-gray-400 px-4 py-2">{assignment.name}</td>
                <td className="border border-gray-400 px-4 py-2">{assignment.dueDate}</td>
                <td className="border border-gray-400 px-4 py-2">{assignment.priority}</td>
                <td className="border border-gray-400 px-4 py-2" style={{ backgroundColor: assignment.status === "completed" ? "rgb(22 163 74)" : "rgb(185 28 28)" }}>
                  <select
                    value={assignment.status}
                    onChange={(e) => handleStatusChange(index, e.target.value)}
                    className="border rounded px-2 py-1 bg-transparent"
                  >
                    <option value="pending" >Pending</option>
                    <option value="completed">Completed</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssignmentTracker;
