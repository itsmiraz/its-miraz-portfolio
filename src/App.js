import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Route';
function App() {
  return (
    <div className='max-w-[1440px] bg-black mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    <Toaster></Toaster>
    </div>
  );
}

export default App;
