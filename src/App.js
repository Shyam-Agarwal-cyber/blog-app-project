import './App.css';
import Blog from './components/Blog';
import EditBlog from './components/EditBlog';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom'
import NewBlog from './components/NewBlog';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='blogs/:id' exact element={<Blog />} />
      <Route path='/edit/:editId' exact element={<EditBlog />} />
      <Route path='/new' element={<NewBlog />} />
    </Routes>
  );
}

export default App;
