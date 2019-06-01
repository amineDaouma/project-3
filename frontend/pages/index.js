import Link from "next/link";
import Signup from "../components/Signup";
import Navbar from "../components/Navbar";
import LoggedInUser from "../components/LoggedInUser";

const Home = () => (
  <div>
    <Navbar />
    <LoggedInUser />
  </div>
);

export default Home;
