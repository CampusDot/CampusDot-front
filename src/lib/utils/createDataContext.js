import React, { useReducer, useMemo } from 'react';

export default (reducer, actions, defaultValue) => {
  const Context = React.createContext();

  const Provider = function ({ children }) {
    const [state, dispatch] = useReducer(reducer, defaultValue);

    const boundActions = {};
    Object.keys(actions).forEach((item) => {
      boundActions[item] = actions[item](dispatch);
    });

    const value = useMemo(() => boundActions, [state]);
    return <Context.Provider value={value}>{children}</Context.Provider>;
  };
  return { Context, Provider };
};
