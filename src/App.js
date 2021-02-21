import logo from './logo.svg';
import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import ContactCard from "./components/ContactCard"
import contactData from './data/contactData';
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findindex

function App() {
  const contacts = contactData.map(con =>
    <div key={con.id}>
      {console.log(con)}
      <ContactCard  contact={{
        name: con.name,
        imgUrl: con.imgUrl,
        phone: con.phone,
        email: con.email
      }} />
    </div>

  )

  return (
    <div className="App">
      <Header />
      <MainContent />
      <div className="contacts">
        {contacts}
      </div>
      <Footer />
    </div>
  );
}

export default App;
