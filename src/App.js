import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar'
import PostList from './components/pages/PostList'
import Footer from './components/pages/Footer';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <br></br><br></br><br></br><br></br><br></br><br></br>
      <PostList></PostList>
      <Footer/>
    </div>
  );
}

export default App;
