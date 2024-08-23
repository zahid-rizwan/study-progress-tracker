import AssignmentTracker from "../components/AssignmentTracker";

const Assignments = () => {
  return (
      <div className="container ml-70  mt-28">
          <h1 className=" ps-3 text-2xl font-bold mb-4">Assignments</h1>
         <AssignmentTracker/>{/* Add the AssignmentTracker component here */}
      </div>
  );
};

export default Assignments;