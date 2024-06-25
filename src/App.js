import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './redux/store';
import Header from './components/Header';
import Footer from './components/Footer';
import NavMenu from './components/Navmenu';
import { showSnackBar } from './redux/slice/snackBar';
import ErrorSnackBar from './components/ErrorSnackBar';

// Lazy load components
const HomePage = React.lazy(() => import('./pages/HomePage'));
const CartPage = React.lazy(() => import('./pages/CartPage'));
const ProductDetailsPage = React.lazy(() => import('./pages/ProductDetails'));
const Products = React.lazy(() => import('./pages/Products'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));

const AppContent = () => {
  const snackBarShow = useSelector((state) => state.globalSnackbar);
  const dispatch = useDispatch();
  
  useEffect(() => {
    console.log("App component mounted");
  }, []);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(
      showSnackBar({
        setopen: false,
        message: '',
        severity: '',
      })
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <NavMenu />
      <div className="flex-grow">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/productDetail/:id" element={<ProductDetailsPage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
      <ErrorSnackBar opensnackbar={snackBarShow} handleClose={handleClose} />
    </div>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <AppContent />
      </Router>
    </Provider>
  );
};

export default App;
