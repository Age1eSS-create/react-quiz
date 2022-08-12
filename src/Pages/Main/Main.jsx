import React , { useEffect } from 'react';
import './Main.scss';
// import { getQuestion } from '../Store/Reducers/QuestionReducer';
import { useDispatch } from 'react-redux';
import { BrowserRouter , Routes , Route  } from "react-router-dom";
import Header from '../../Components/Header/Header'
import Home from '../Home';


const Main = () => {
  const dispatch = useDispatch()


  return (
    <BrowserRouter className="Main">
        <Header />
        <div className='Main_content'>
            <Routes>
                <Route path='/' element={<Home />} />
                {/* <Route path='/quiz' element={<Quiz/>}/> */}
            </Routes>
        </div>
    </BrowserRouter>
  );
}

export default Main;
