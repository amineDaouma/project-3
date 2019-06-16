import { ApolloConsumer } from "react-apollo";
import { ScaleLoader } from "react-spinners";
import spinnerStyle from "../style/reactSpinner";
import LoggedInUser from "../components/LoggedInUser";
import Navbar from "../components/Navbar";
import Routines from "../components/Routines";
import MiniStats from "../components/MiniStats";

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
              console.log(data);
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
                  {/* TO REFACTOR: As props are drilled down too much, I can consider using the Context API */}
                  {data && !loading && <Navbar client={client} data={data} />}
                  {data.loggedInUser && <Routines data={data} />}
                  {data && data.loggedInUser && <MiniStats data={data} />}
                </>
              );
            }}
          </LoggedInUser>
          <style jsx>
            {`
              .Home {
                z-index: 1;
                max-width: 768px;
                margin: 0 auto;
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
