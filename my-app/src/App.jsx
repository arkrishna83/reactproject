import MyCom from "./Components/MyCom";
import Header from "./Components/Header";
import Content from "./Components/Content"; 
import Footer from "./Components/Footer";
import Greetings from "./Components/Greetings";
import Counter from "./Components/Counter";
import Message from "./Components/Message";
export default function App() {
  return (
    <div>
      <Header/>
      <Content/>
      <Greetings name="RK"/>
      <Counter/>
      <Message/>
       <Footer/>
    </div>
  );
}