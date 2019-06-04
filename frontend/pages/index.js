import { ApolloConsumer } from "react-apollo";
import LoggedInUser from "../components/LoggedInUser";
import Navbar from "../components/Navbar";
import Routines from "../components/Routines";

const Home = () => (
  <ApolloConsumer>
    {client => (
      <div className="Home">
        <LoggedInUser>
          {({ data }) => <Navbar client={client} data={data} />}
        </LoggedInUser>

        {/* <Routines /> */}
        <style jsx>
          {`
            .Home {
              margin: 0px 12px;
            }
          `}
        </style>
      </div>
    )}
  </ApolloConsumer>
);

export default Home;
