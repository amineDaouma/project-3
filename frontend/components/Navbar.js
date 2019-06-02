import React from "react";
import Link from "next/link";
import { ApolloConsumer } from "react-apollo";
import LoggedInUser, { LOGGEDINUSER_QUERY } from "./LoggedInUser";

const removeTokenAndUpdateCache = client => {
  localStorage.removeItem("Authorization");
  const data = client.readQuery({
    query: LOGGEDINUSER_QUERY
  });
  console.log(data);
  client.writeQuery({
    query: LOGGEDINUSER_QUERY,
    data: {
      loggedInUser: {
        username: null
      }
    }
  });
};

const Navbar = props => (
  <ApolloConsumer>
    {client => (
      <div>
        <LoggedInUser>
          {({ data }) => {
            console.log(data);
            if (data && data.loggedInUser) {
              const { username } = data.loggedInUser;
              return (
                <>
                  <span>{username}</span>
                  <Link href="/">
                    <a onClick={() => removeTokenAndUpdateCache(client)}>
                      Log Out
                    </a>
                  </Link>
                </>
              );
            }
            return (
              <div>
                <Link href="signup">
                  <a>Sign Up</a>
                </Link>
                <Link href="login">
                  <a>Log In</a>
                </Link>
              </div>
            );
          }}
        </LoggedInUser>
        <style jsx>
          {`
            div {
              display: flex;
              flex-direction: row;
              justify-content: flex-start;
              background: white;
            }
            a {
              margin-left: 16px;
            }
          `}
        </style>
      </div>
    )}
  </ApolloConsumer>
);

export default Navbar;
