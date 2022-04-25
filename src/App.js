
import { Routes, Route } from 'react-router-dom'
import Menu from './components/Menu';
import AddingForm from './page/AddingForm';
import EditForm from './page/EditForm';
import Home from './page/Home';


function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path='/' element={< Home />} />
        <Route path='/add' element={<AddingForm />} />
        <Route path='/edit/:id/:name/:age/:mail' element={<EditForm />} />
      </Routes>

    </>

  );
}

export default App;
