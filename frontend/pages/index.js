import { ApolloConsumer } from "react-apollo";
import { ScaleLoader } from "react-spinners";
import spinnerStyle from "../style/reactSpinner";
import LoggedInUser from "../components/LoggedInUser";
import Navbar from "../components/Navbar";
import Routines from "../components/Routines";

const Home = () => (
  <ApolloConsumer>
    {client => (
      <>
        <div className="Home">
          <LoggedInUser>
            {({ data, error, loading }) => {
              if (error) {
                console.log(error);
              }
              return (
                <>
                  {loading && (
                    <div className="loader-container">
                      <div className="overlay" />
                      <ScaleLoader
                        css={spinnerStyle}
                        heightUnit={"px"}
                        height={96}
                        widthUnit={"px"}
                        width={12}
                        radius={12}
                        color={"#9AA5B1"}
                        loading={loading}
                        margin={"2px"}
                      />
                      <p>Retrieving your habits...</p>
                    </div>
                  )}
                  {data && !loading && <Navbar client={client} data={data} />}
                  {data.loggedInUser && <Routines data={data} />}
                </>
              );
            }}
          </LoggedInUser>
          <style jsx>
            {`
              .Home {
                z-index: 1;
                margin: 0px 256px;
                margin-top: 8px;
              }
              .loader-container {
                display: flex;
                height: 100vh;
                flex-direction: column;
              }
              .loader-container p {
                color: #52606d;
                font-size: 24px;
                margin: 0 auto;
              }
            `}
          </style>
        </div>
      </>
    )}
  </ApolloConsumer>
);

export default Home;
