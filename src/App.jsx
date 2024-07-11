import { useState , useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx';
import Filter from './components/filter.jsx';
import Cards from  './components/cards.jsx';
import { filterData , apiUrl } from './data.js';
import { toast } from 'react-toastify';
import Spinner from "./components/spinner.jsx"

function App() {

const [courses , setCourses] = useState(null);

const [Loading,setLoading] = useState(true);

const [category,setCategory] = useState(filterData[0].title);

async function fetchData(){
      setLoading(true);
      try{ 
        const res = await fetch(apiUrl);
        const output = await res.json();
        
        setCourses(output.data)
        
        console.log("output ",output.data);
      }
      catch(error){
        console.log(error);
        toast.error("Something Went Wrong");
      }
      setLoading(false);
};

useEffect( () => {
      fetchData();
},[]);
   
  return (
     <div className='min-h-screen flex flex-col bg-blue-950 bg-opacity-70'>
         <div>
         <Navbar></Navbar>
         </div>
         
         <div className=" ">
          <div>
          <Filter filterData={filterData} setCategory={setCategory} category={category}></Filter>
          </div>

          <div className='w-11/12 flex justify-center items-center max-w-[1200px] mx-auto min-h-[50vh] flex-wrap '>
          {
            Loading ? (<Spinner></Spinner> ) :( <Cards courses={courses} category={category}></Cards>) 
          }
          </div>   
          </div>
     </div>
  );
};

export default App
