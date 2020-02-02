import React from "react";
import gql from "graphql-tag";
import { useSubscription } from "@apollo/react-hooks";

const BET_SUBSCRIPTION = gql`
  subscription getNewBet {
    bet(order_by: { id: desc }, limit: 10) {
      id
      name
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
      <h2>Bets from GraphQL</h2>
      <ul>
        {data.bet.map(b => (
          <li key={b.id}>{b.name}</li>
        ))}
      </ul>
    </>
  );
};

export default SimpleQuery;
