import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import ManageInventory from './components/ManageInventory/ManageInventory';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import AddNewItem from './components/AddNewItem/AddNewItem';
import MyItem from './components/MyItem/MyItem';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div >
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        {/* <Route path="/service/:serviceID" element={
          <RequireAuth> <Checkout></Checkout> </RequireAuth>
        }></Route> */}
        <Route path="/manage-inventory" element={<ManageInventory></ManageInventory>}></Route>
        <Route path="/inventory" element={<Inventory></Inventory>}></Route>
        {/* <Route path="/checkout" element={
          <RequireAuth> <Checkout></Checkout> </RequireAuth>
        }></Route> */}
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/add-new" element={<AddNewItem></AddNewItem>}></Route>
        <Route path="/my-item" element={<MyItem></MyItem>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>

      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
