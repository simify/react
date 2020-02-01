import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const GET_ALL_BETS = gql`
  query allBets {
    bet {
      id
      name
      start
      end
    }
  }
`;

const SimpleQuery = () => {
  const { loading, error, data } = useQuery(GET_ALL_BETS);

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
          <li>{b.name}</li>
        ))}
      </ul>
    </>
  );
};

export default SimpleQuery;
