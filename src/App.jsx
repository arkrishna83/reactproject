import { Routes , Route, Link} from "react-router-dom";
import Greetings from "./Components/Greetings"
import Header from "./Components/Header"
import Content from "./Components/Content"
import Footer from "./Components/Footer"
import Dashboard from "./Components/Dashboard";
import Settings from "./Components/Settings";
import Profile from "./Components/Profile";
import User from "./Components/User";
import Search from "./Components/Search";

export default function App() {
  return (
    <div>
      <h1>My React Router Practice</h1>
      <nav>
        <Link to="/">Home</Link> | {" "}
        <Link to="/header">Header</Link> | {" "}
        <Link to="/content">Content</Link> | {" "}
        <Link to="/dashboard">DashBoard</Link> | {" "}
        <Link to="/search?keyword=react&category=js">Search React</Link>
      </nav>
      <Routes>
       <Route path="/" element={<Greetings name={"RK"} />}></Route>
       <Route path="/header" element={<Header />}></Route>
       <Route path="/content" element={<Content />}></Route>
       <Route path="/dashboard" element={<Dashboard />}>
        <Route path="profile" element={<Profile/>}></Route>
        <Route path="settings" element={<Settings/>}></Route>
       </Route>
       <Route path="/user/:id" element={<User/>}></Route>
       <Route path="/Search" element={<Search/>}></Route>
      </Routes>
    </div>
  );
}