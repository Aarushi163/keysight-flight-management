import React, { useState } from "react";
 
function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");
  const [gender, setGender] = useState("");
  const [terms, setTerms] = useState(false);
  const [data, setData] = useState(null);
 
  const errors = {
    name: name === "" ? "Name is required" : "",
    email: email === "" ? "Email is required" : "",
    age: age === "" ? "Age is required" : "",
    course: course === "" ? "Course is required" : "",
    gender: gender === "" ? "Gender is required" : ""
  };
 
  const isValid =
    name && email && age && course && gender && terms;
 
  const handleSubmit = (e) => {
    e.preventDefault();
 
    setData({ name, email, age, course, gender });
 
    // Clear form
    setName("");
    setEmail("");
    setAge("");
    setCourse("");
    setGender("");
    setTerms(false);
  };
 
  return (
    <div>
      <h2>Student Admission Form</h2>
 
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p style={{ color: "red" }}>{errors.name}</p>
 
        <input
          type="email"
          placeholder="Email ID"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p style={{ color: "red" }}>{errors.email}</p>
 
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <p style={{ color: "red" }}>{errors.age}</p>
 
        <select value={course} onChange={(e) => setCourse(e.target.value)}>
          <option value="">Select Course</option>
          <option>React</option>
          <option>Angular</option>
          <option>Java</option>
          <option>Python</option>
        </select>
        <p style={{ color: "red" }}>{errors.course}</p>
 
        <div>
          <label>
            <input
              type="radio"
              value="Male"
              checked={gender === "Male"}
              onChange={(e) => setGender(e.target.value)}
            />
            Male
          </label>
 
          <label>
            <input
              type="radio"
              value="Female"
              checked={gender === "Female"}
              onChange={(e) => setGender(e.target.value)}
            />
            Female
          </label>
        </div>
        <p style={{ color: "red" }}>{errors.gender}</p>
 
        <label>
          <input
            type="checkbox"
            checked={terms}
            onChange={(e) => setTerms(e.target.checked)}
          />
          Accept Terms & Conditions
        </label>
 
        <br /><br />
 
        <button type="submit" disabled={!isValid}>
          Submit
        </button>
      </form>
 
      {data && (
        <div style={{ border: "1px solid black", marginTop: "20px", padding: "10px" }}>
          <h3>Student Details</h3>
          <p><b>Name:</b> {data.name}</p>
          <p><b>Email:</b> {data.email}</p>
          <p><b>Age:</b> {data.age}</p>
          <p><b>Course:</b> {data.course}</p>
          <p><b>Gender:</b> {data.gender}</p>
        </div>
      )}
    </div>
  );
}
 
export default Form;