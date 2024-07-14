import './App.css';

import { Route , Routes} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import People from './Components/People/People';
import Tvshow from './Components/Tvshow/Tvshow';
import Movies from './Components/Movies/Movies';
import MovieDetails from './Components/MovieDetails/MovieDetails';
import PersonDetails from './Components/PersonDetails/PersonDetails';
import  TvDetails  from "./Components/TvDetails/TvDetails";
import SearchComponent from './Components/SearchComponent/SearchComponent';
import $ from 'jquery';







function App() {


  /* ---------------------------- SCROLL UP Button ---------------------------- */

 $(window).scroll(function () 
 {

  let wscroll = $(window).scrollTop();
  if (wscroll> 100) 
  {
  $("#scrollStyle").fadeIn(500);
  }else
  {
    $("#scrollStyle").fadeOut(200);

  }
  
 })

 function up() 
 {
  $(window).scrollTop(0); 
 }


  return (

    <>
    {/* ---------- sending our user Data and logout function as a props ---------- */}

     <Navbar/> 
     <button onClick={up} id='scrollStyle' className='btn position-fixed rounded-5'>

     <i className=' fas fa-arrow-alt-circle-up'></i>
    </button>

      <div className='container'>
    <Routes>
{/* ------  putting the all component that cant be reached by the one who dont login --------------- */}
    
      <Route path='/noxe' element={<><Home/></>} />
      <Route path='/' element={<Home/>} />
      <Route path='home' element={<Home/>} />
      <Route path='SearchComponent' element={<SearchComponent/>} />

      
      <Route path='Tvshow' element={<Tvshow/>} />
         <Route path='TvDetails' element={<TvDetails/>}>
         <Route path=':TvId' element={<TvDetails/>}/>
         </Route>


      <Route path='People' element={<People/>}/>
         <Route path='PersonDetails' element={<PersonDetails/>}>
            <Route path=':PersonId' element={<PersonDetails/>}/>
         </Route>


      <Route path='Movies' element={<Movies/>} />
          <Route path='MovieDetails' element={<MovieDetails/>}>
            <Route path=':MovieId' element={<MovieDetails/>}/>
          </Route>

      <Route path='*' 
      element={
      <h2 className=' vh-100 text-opacity-25 text-light text-center d-flex justify-content-center align-items-center'>
       page not found <span className='text-danger text-opacity-50 mx-3'> : 404 </span>  
      </h2>} />

    
    </Routes>

    </div>
    

    
    </>
    
  );
}

export default App;
