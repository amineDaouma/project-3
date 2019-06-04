import Link from "next/link";
import Signup from "../components/Signup";
import Navbar from "../components/Navbar";
import Routines from "../components/Routines";
import LoggedInUser from "../components/LoggedInUser";

const Home = () => (
  <div className="Home">
    <Navbar />
    <Routines />
    <style jsx>
      {`
        .Home {
          margin: 0px 12px;
        }
      `}
    </style>
  </div>
);

export default Home;
