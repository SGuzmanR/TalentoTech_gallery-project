import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Navigation from './components/Navigation';
import { GalleyImages } from './constants';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='w-full flex flex-col justify-center items-center screen-max-width px-3'>
          <h1 className='text-center text-2xl font-bold my-3 py-3'>Gallery Project</h1>

          <div className='flex flex-row justify-center w-full h-[500px]'>
            <Routes>
              {GalleyImages.map((img) => (
                <Route key={img.path} path={img.path} element={img.element}></Route>
              ))}
            </Routes>
          </div>
        </div>

        <div className='flex justify-center w-full px-3 screen-max-width mt-4'>
          <Navigation />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
