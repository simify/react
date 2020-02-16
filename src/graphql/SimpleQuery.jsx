import React from "react";
import gql from "graphql-tag";
import { useSubscription } from "@apollo/react-hooks";

const BET_SUBSCRIPTION = gql`
  subscription subscribeLatest5Courses {
    course(order_by: { id: desc }, limit: 5) {
      id
      title
    }
  }
`;

const SimpleQuery = () => {
  const { loading, error, data } = useSubscription(BET_SUBSCRIPTION);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error(error);
    return <div>Error!</div>;
  }

  return (
    <>
      <h2>Latest 5 Courses (as Subscription)</h2>
      <ul>
        {data.course.map(b => (
          <li key={b.id}>{b.title}</li>
        ))}
      </ul>
    </>
  );
};

export default SimpleQuery;
