import { Component, createContext, ReactNode, useContext } from "react";

interface UserContextType {
  user: any;
  setUser: (user: any) => void;
}

const UserContext = createContext<UserContextType>({
  user: {},
  setUser: () => {},
});

export default class UserContextProvider extends Component<
  { children: ReactNode },
  { user: any }
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = {
      user: {},
    };
  }

  setUser = (user: any) => {
    this.setState({ user: user });
  };

  render() {
    const contextValues = {
      user: this.state.user,
      setUser: this.setUser,
    };

    return (
      <UserContext.Provider value={contextValues}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export const useUserContext = () => useContext(UserContext);