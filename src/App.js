import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import axios from 'axios';
import {useEffect,useState} from 'react'
import Header from './components/header'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './components/product';
import Account from './components/account';
import DashBoard from './components/dashBoard';

function App(props) {

  const [apiData, setAPIData] = useState({});

  useEffect(() =>{
    axios.get("https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json")
    .then((res) => {
      setAPIData(res.data);
      props.storeAPIData(res.data);
    })
    .catch((err) => {
      console.log(err);
    })
    console.log(apiData);
   
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/product" element={<Product />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
const mapStateToProps = (state) => {
  return state
}

const mapStateToDispatch = (dispatch) => {
  return {
    storeAPIData : (apiData) => {dispatch({type: 'storeAPIData', payload: apiData})}
  }
}
export default connect(mapStateToProps,mapStateToDispatch)(App);
