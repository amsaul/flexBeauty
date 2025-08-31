import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './sections/Home.jsx'
import BookingPage from './sections/BookingPage.jsx'
import Products from './sections/Products.jsx'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={ <Layout> <Home /> </Layout> } />
          <Route path='/BookingPage' element={ <Layout> <BookingPage /> </Layout> } />
          <Route path='/Products' element={ <Layout> <Products /> </Layout> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
