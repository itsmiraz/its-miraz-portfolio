import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Route';

function App() {
  return (
    <div className='bg-blue-gradient '>
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
