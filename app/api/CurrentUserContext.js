import React, { useState, createContext } from "react";
import useQuery from "@apollo/client";

import { GET_ME } from "./gql/query";
import ActivityIndicator from "../components/layouts/ActivityIndicator";
import ErrorIndicator from "../components/layouts/ErrorIndicator";

export const UserContext = createContext();

export const CurrentUserProvider = (props) => {
  const { loading, error, data } = useQuery(GET_ME);
  if (loading) return <ActivityIndicator />;

  if (error) return <ErrorIndicator />;
  //   console.log(athlete);
  return (
    <UserContext.Provider curUser={{ loading, errror, data }}>
      {props.children}
    </UserContext.Provider>
  );
};
