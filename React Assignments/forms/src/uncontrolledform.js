import React, { useRef } from "react";
 
function FeedbackForm() {
  const nameRef = useRef();
  const courseRef = useRef();
  const feedbackRef = useRef();
  const ratingRef = useRef();
 
  const handleSubmit = (e) => {
    e.preventDefault();
 
    alert(
      "Student Name: " + nameRef.current.value + "\n" +
      "Course Name: " + courseRef.current.value + "\n" +
      "Feedback: " + feedbackRef.current.value + "\n" +
      "Rating: " + ratingRef.current.value
    );
 
    // Reset using refs
    nameRef.current.value = "";
    courseRef.current.value = "";
    feedbackRef.current.value = "";
    ratingRef.current.value = "";
  };
 
  return (
    <div>
      <h2>Course Feedback Form</h2>
 
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Student Name" ref={nameRef} />
        <br /><br />
 
        <input type="text" placeholder="Course Name" ref={courseRef} />
        <br /><br />
 
        <textarea placeholder="Feedback Message" ref={feedbackRef}></textarea>
        <br /><br />
 
        <select ref={ratingRef}>
          <option value="">Select Rating</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br /><br />
 
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
}
 
export default FeedbackForm;