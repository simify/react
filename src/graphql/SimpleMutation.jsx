import React, { useState } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

const ADD_BET = gql`
  mutation InsertBet($name: String!) {
    insert_bet(objects: { name: $name }) {
      returning {
        id
        name
      }
    }
  }
`;

const SimpleMutation = () => {
  const [addBet] = useMutation(ADD_BET);
  const [betName, setBetName] = useState("");

  return (
    <>
      <h2>GraphQL demo</h2>
      <form
        onSubmit={e => {
          e.preventDefault();
          addBet({ variables: { name: betName } });
          setBetName("");
        }}
      >
        <input
          placeholder="Add bet"
          value={betName}
          onChange={e => setBetName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default SimpleMutation;
