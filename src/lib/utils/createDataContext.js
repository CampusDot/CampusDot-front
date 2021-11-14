import React, { useReducer } from 'react';

export default (reducer, actions, defaultValue) => {
  const Context = React.createContext();

  const Provider = function ({ children }) {
    const [state, dispatch] = useReducer(reducer, defaultValue);

    const boundActions = {};
    Object.keys(actions).forEach((item) => {
      boundActions[item] = actions[item](dispatch);
    });

    // eslint-disable-next-line react/jsx-no-constructed-context-values
    return <Context.Provider value={{ state, ...boundActions }}>{children}</Context.Provider>;
  };
  return { Context, Provider };
};
