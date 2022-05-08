
import './App.css';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Inventory from './Components/Inventory/Inventory';
import ManageInventory from './Components/ManageInventory/ManageInventory';
import NotFound from './Components/NotFound/NotFound';
import AddNewItem from './Components/AddNewItem/AddNewItem';
import MyItem from './Components/MyItem/MyItem';
import Blog from './Components/Blog/Blog';
import Register from './Components/Register/Register';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import { ToastContainer } from 'react-toastify';

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
        <Route path="/manage-inventory" element={<ManageInventory></ManageInventory> }></Route>
        <Route path="/inventory" element={<Inventory></Inventory> }></Route>
        <Route path="/login" element={<Login></Login> }></Route>
        <Route path="/register" element={<Register></Register> }></Route>
        <Route path="/add-new" element={<RequireAuth>
          <AddNewItem></AddNewItem>
        </RequireAuth> }></Route>
        <Route path="/my-item" element={<RequireAuth>
          <MyItem></MyItem>
        </RequireAuth>}></Route>
        <Route path="*" element={ <NotFound></NotFound>}></Route>
        
      </Routes>

      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
