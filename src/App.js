// // import {Switch, Route} from 'react-router-dom'

// // import LoginForm from './components/LoginForm'
// // import Home from './components/Home'
// // import Products from './components/Products'
// // import Cart from './components/Cart'
// // import NotFound from './components/NotFound'
// // import ProtectedRoute from './components/ProtectedRoute'

// // import './App.css'

// // const App = () => (
// //   <Switch>
// //     <Route exact path="/login" component={LoginForm} />
// //     <ProtectedRoute exact path="/" component={Home} />
// //     <ProtectedRoute exact path="/products" component={Products} />
// //     <ProtectedRoute exact path="/cart" component={Cart} />
// //     <Route component={NotFound} />
// //   </Switch>
// // )

// // export default App

// import {BrowserRouter, Switch, Route} from 'react-router-dom'

// import LoginForm from './components/LoginForm'
// import Home from './components/Home'
// import Products from './components/Products'
// import Cart from './components/Cart'
// import NotFound from './components/NotFound'
// import ProtectedRoute from './components/ProtectedRoute'

// import './App.css'

// const App = () => (
//   <BrowserRouter>
//     <Switch>
//       <Route exact path="/login" component={LoginForm} />
//       <ProtectedRoute exact path="/" component={Home} />
//       <ProtectedRoute exact path="/products" component={Products} />
//       <ProtectedRoute exact path="/cart" component={Cart} />
//       <Route component={NotFound} />
//     </Switch>
//   </BrowserRouter>
// )

// export default App

import {Switch, Route} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/products" component={Products} />
    <ProtectedRoute exact path="/cart" component={Cart} />
    <Route component={NotFound} />
  </Switch>
)

export default App
