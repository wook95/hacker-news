import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import List from '@/pages/List';
import Detail from '@/pages/Detail';
import NotFound from '@/pages/NotFound';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/list/:id' element={<List />} />
      <Route path='/detail/:id' element={<Detail />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
  );
};

export default App;
