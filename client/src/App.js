import NavbarComponent from './components/NavbarComponent';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function App() {
  const [blogs, setBlogs] = useState([]);

  const fetchData = (props) => {
    axios.get(`${process.env.REACT_APP_API_URL}/blogs`)
    .then(res => {
      setBlogs(res.data);
    })
    .catch(err => {
      alert("cannot connect to server");
    })
  }

  useEffect(() => {
    fetchData();
  } , [])

  return (
    <div className="App">
          <NavbarComponent />
          <div className="container">
          {blogs.map((blog, index) => (
            <div className="card" key={index}>
              <Link to={`/post/${blog.slug}`}>
              <h2>{blog.title}</h2>
              </Link>
              <p>{blog.description.substring(0,100)}</p>
              <p>ผู้เขียน {blog.author} เพยแพร่ {new Date(blog.createdAt).toLocaleString()}</p>
            </div>
          ))}
          </div>
    </div>
  );
}

export default App;
