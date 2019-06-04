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
      <div className="navbar">
        <LoggedInUser>
          {({ data }) => {
            console.log(data);
            if (data && data.loggedInUser) {
              const { username } = data.loggedInUser;
              return (
                <>
                  {/* <a className="user">{username}</a> */}
                  <Link href="/">
                    <a onClick={() => removeTokenAndUpdateCache(client)}>
                      Log Out
                    </a>
                  </Link>
                </>
              );
            }
            return (
              <>
                <Link href="signup">
                  <a>Sign Up</a>
                </Link>
                <Link href="login">
                  <a>Log In</a>
                </Link>
              </>
            );
          }}
        </LoggedInUser>
        <style jsx>
          {`
            .navbar {
              padding: 8px 0px;
              display: flex;
              flex-direction: row;
              justify-content: flex-end;
              background: white;
              margin: 8px 0px;
              border: 1px solid white;
              border-radius: 5px;
              box-shadow: 0px 3px 5px rgba(154, 165, 177, 0.8);
            }

            .user:hover {
              color: black;
              background: none;
            }
            a {
              padding: 4px 8px;
              font-size: 16px;
              text-decoration: none;
              margin-right: 24px;
            }

            a:hover {
              color: white;
              background: #2186eb;
              border-radius: 5px;
            }

            a:visited {
              color: black;
            }

            a:visited:hover {
              color: white;
            }
          `}
        </style>
      </div>
    )}
  </ApolloConsumer>
);

export default Navbar;
