import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddNewItem from './components/AddNewItem/AddNewItem';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import ManageInventory from './components/ManageInventory/ManageInventory';
import MyItem from './components/MyItem/MyItem';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';
import RequireAuth from './components/RequireAuth/RequireAuth';



function App() {
  return (
    <div >
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/inventory/:inventoryID" element={
          <RequireAuth> <Inventory></Inventory> </RequireAuth>
        }></Route>
        <Route path="/manage-inventory" element={<ManageInventory></ManageInventory>}></Route>
        <Route path="/inventory" element={<Inventory></Inventory>}></Route>
        {/* <Route path="/checkout" element={
          <RequireAuth> <Checkout></Checkout> </RequireAuth>
        }></Route> */}
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/add-new" element={<AddNewItem></AddNewItem>}></Route>
        <Route path="/my-item" element={<MyItem></MyItem>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>

      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;