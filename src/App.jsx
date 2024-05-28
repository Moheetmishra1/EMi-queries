import { useState } from 'react'

// import './App.css'
import Calculator from './assets/component/icici calculator/Calculator'
import Counter from './assets/component/Counter/Counter'
import Queries from './assets/component/Queries/Queries'
import ReactMovieAPI from './assets/component/ReactMovieAPI/ReactMovieAPI'
// import Signup from './assets/component/Routing/Signup'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Navbar from './assets/component/Routing/Navbar'
// import Home from './assets/component/Routing/Home'
// import Product from './assets/component/Routing/Product'
// import User from './assets/component/Routing/Users'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <main>
       {/* <nav></nav> */}
       {/* <Calculator />  */}
      
      {/* <Counter /> */}
      {/* <Queries />   */}
   
       {/* <ReactMovieAPI /> */}

    {/* //   <Signup /> */}
     </main>


    // <BrowserRouter>
    // <Navbar />
    // <Routes>
    //   <Route  path="/" element={<Home />} />
    //   <Route path='/products' element={<Product />} />
    //   <Route path='login' element={<Login />} />
    //   <Route path='signup' element={<Signup />}/>
    //   <Route path='users' element={<User />} />
    //   {/* <Route path='*' element={<Pnf />} /> */}

    // </Routes>
    // </BrowserRouter>
  )
}

export default App
