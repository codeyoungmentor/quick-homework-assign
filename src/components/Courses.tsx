// CoursesList.js
import React from "react";

const courses = [
  { course: "Python Level 1", id: "34rfsd" },
  { course: "Python Level 2", id: "98erwt" },
  { course: "Machine Learning", id: "65tyui" },
  { course: "Web Dev Level 1", id: "23abcd" },
  { course: "Web Dev Level 2", id: "45efgh" },
  { course: "Web Dev Level 3", id: "67ijkl" },
];

const Courses = (currentCourse , setCurrentCourse) => {
  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Courses</h2>
      <ul className="list-disc pl-6">
        {courses.map((course) => (
          <li key={course.id} className="mb-2">
            {course.course}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;