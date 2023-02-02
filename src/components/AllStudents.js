import React, { useState, useEffect } from "react";
import axios from "axios";

const AllStudents = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const getStudents = () => {
      axios
        .get("http://localhost:8070/student/")
        .then((res) => {
          setStudents(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    };
    getStudents();
  }, []);

  return (
    <div>
      <h1>all students</h1>
    </div>
  );
};

export default AllStudents;
