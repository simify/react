import React, { useState } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

const ADD_COURSE = gql`
  mutation InsertCourse($title: String!) {
    insert_course(objects: { title: $title }) {
      returning {
        title
      }
    }
  }
`;

const SimpleMutation = () => {
  const [addCourse] = useMutation(ADD_COURSE);
  const [courseName, setCourseName] = useState("");

  return (
    <>
      <h2>Add Course (GraphQL Mutation)</h2>
      <form
        onSubmit={e => {
          e.preventDefault();
          addCourse({ variables: { title: courseName } });
          setCourseName("");
        }}
      >
        <input
          placeholder="Add course"
          value={courseName}
          onChange={e => setCourseName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default SimpleMutation;
