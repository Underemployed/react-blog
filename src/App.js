import './App.css';
import Navbar from './Navbar';

function App() {
  const title = "Welcome to the new Blog"
  const number = 'wow'
  const link = "http://google.com"
  // const blogs = [
  //   {
  //     title: 'My First Blog',
  //     body: 'Lorem ipsum...',
  //     author: 'mario',
  //     id: 1
  //   },
  //   {
  //     title: 'Welcome Party!',
  //     body: 'Lorem ipsum...',
  //     author: 'yoshi',
  //     id: 2
  //   }
  // ]

  return (
    
    <div className="App">
      <h1 className="content">{title} {number}</h1>
      <h2>{[1,2,3,4,5]}</h2>
      <h2>{Math.random() * 10}</h2>
      <a href={link} target="_blank" rel="noopener noreferrer">hhahaahah</a>
    </div>
  );
}

export default App;
