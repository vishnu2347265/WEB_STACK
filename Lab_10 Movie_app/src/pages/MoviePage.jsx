import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'


function MoviePage() {
  const APIURL = "https://www.omdbapi.com/?apikey=1565bd66&t="
  const [movieName,setMovieName]=useState("")
  const [movieData,setMovieData]=useState({})
  const [loading,setLoading]=useState(null)

  const handleInput=(e)=>{
    setMovieName(e.target.value)
  }

  const searchMovieHandler=()=>{
    if(movieName===""|| movieName===null){
      alert("ENTER VALID MOVIE NAME")
    }
    else{
      setLoading(true)
      var api = APIURL+ movieName
      axios.get(api).then((res)=>{
        console.log('response', res);
        setMovieData(res.data)
        setLoading(false)
      }).catch((err)=>{
        console.log(err);
      })
    }
   }



  return (
    <>
    <div className='text-center font-bold text-[60px] text-blue-500'>Preflix</div>
 

    <div className='w-11/12 p-2 mx-auto mt-10 flex flex-row gap-5  '>
        <input className='flex-1 p-2 border-2 border-black' 
        onChange={handleInput} 
        value={movieName}
        type="text" name="" id="" placeholder='Search movie'/>
        <button 
        onClick={searchMovieHandler}
        className='px-[16px] py-[8px] bg-blue-500 text-white font-semibold rounded-md outline-blue-600' 
        
        >Search </button>
    </div>
    {loading&&
    <div  className='w-full h-[80vh] flex items-center justify-center'>
    <div className="loader"></div>
  </div>
    }

    {
      movieData.Title && !loading?
    <div className='w-11/12 mx-auto my-5 p-2  flex flex-row-reverse  gap-2 items-start bg-gray-100'>
      <div className='flex flex-col w-[60%] '>
        <div className='flex flex-row items-center justify-between'>
          <div>
          <div className='text-[60px] font-extrabold flex-1 text-blue-500'>
            {movieData?.Title}
          </div>
          <div className='font-semibold capitalize'>Type : {movieData?.Type}</div>
          <div>Release Date : <strong className='text-blue-500'>{movieData?.Released}</strong></div>
          <div className='flex flex-row gap-1'>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480.769-160q-66.598 0-124.761-25.038-58.162-25.039-101.662-68.539-43.5-43.5-68.539-101.648-25.038-58.149-25.038-124.731 0-66.583 25.038-124.775 25.039-58.192 68.539-101.692 43.5-43.5 101.662-68.539Q414.171-800 480.769-800q68.923 0 131.27 28.461 62.346 28.462 108.73 79.385v-75.538q0-8.5 5.758-14.25t14.27-5.75q8.511 0 14.242 5.75 5.731 5.75 5.731 14.25v113.846q0 13.731-9.289 23.019-9.288 9.289-23.019 9.289H614.616q-8.501 0-14.251-5.758t-5.75-14.269q0-8.512 5.75-14.242 5.75-5.731 14.251-5.731h79.23q-41.769-46-96.384-72.231Q542.846-760 480.769-760q-117 0-198.5 81.5t-81.5 198.5q0 117 81.5 198.5t198.5 81.5q98.846 0 175-62t97.846-157.385q2.693-9.076 9.154-14 6.462-4.923 15.003-3.692 9.074 1.231 13.305 8.731T792.846-412Q770-301.461 683-230.731 596-160 480.769-160Zm20-328.308 120 120q5.616 5.616 6 13.769.385 8.154-6 14.539-6.384 6.385-14.154 6.385-7.769 0-14.154-6.385l-122-122q-5.23-5.231-7.461-10.975t-2.231-11.871V-660q0-8.5 5.758-14.25t14.269-5.75q8.512 0 14.243 5.75 5.73 5.75 5.73 14.25v171.692Z"/></svg>   
          <div>{movieData?.Runtime}{movieData.Type==="series"?" / Episode":""}</div>
          
          </div>
          </div>
          
        </div>

        <div className='flex flex-row items-center gap-2'>
          {
            movieData?.Genre?.split(",").map((node,i)=>(
              <div className='px-3 py-1  text-[12px] my-1 font-bold  border-[#531616] text-blue-500 rounded-[50px] w-fit'>
                {node}
              </div>
            ))
          }

        </div>
        <div className=' flex flex-row gap-2 my-2'>
              <div className='py-1 px-2 w-fit '>Director : <span className='font-bold'>{movieData?.Writer}</span></div>
              <div className='py-1 px-2 w-fit '>Writer : <span className='font-bold'>{movieData?.Director}</span></div>
          </div>
          <div className='flex flex-col gap-2  p-2'>
              {movieData?.Actors?.split(",").map((node,i)=>(
                <div key={i} className='px-2 py-1 w-fit bg-blue-500 text-white font-semibold'>{node}</div>
              ))
                
              }
          </div>
          <div className='p-2  my-3 bg-blue-200' >
            {movieData?.Plot}

          </div>
      </div>
      <div className='flex flex-col gap-3 w-[60%] '>
        <img 
        src={movieData?.Poster}
        className='w-1/2 h-1/2 mx-auto scale-95' 
        alt="" 
        />
      </div>
    </div>:null
    }
    {
      movieData.Error&&
      <div className='w-11/12 text-center font-bold text-[30px] py-10 text-[#53161640] flex flex-col justify-center'>
        <svg xmlns="http://www.w3.org/2000/svg" className='mx-auto ' height="80" viewBox="0 -960 960 960" width="80"><path fill='#53161640' d="M612.461-641.615q0-56.077-37.73-90.154-37.731-34.077-99.346-34.077-39.77 0-69.423 15.577-29.654 15.577-51.269 48.038-6.77 9.154-17.347 11.5-10.577 2.347-19.038-4.115-7.077-5.308-8.577-13.923-1.5-8.616 3.346-16.385 28.923-44.154 69.192-65.654 40.269-21.5 93.116-21.5 81.615 0 133.269 47.308 51.654 47.308 51.654 122.462 0 41.923-18.231 78.307-18.231 36.385-56.923 70.77-47 41.153-64.615 69.115-17.616 27.961-18.539 62.192-.923 10.154-7.808 16.923-6.884 6.77-16.807 6.77-9.924 0-16.808-7.039-6.885-7.038-6.885-16.962 0-41.307 19.692-75.346 19.693-34.038 65.847-74.654 41-35.769 57.115-65.269 16.115-29.5 16.115-63.884ZM475.385-120q-16.077 0-28.039-11.961-11.962-11.962-11.962-28.039t11.962-28.039Q459.308-200 475.385-200t28.038 11.961q11.962 11.962 11.962 28.039t-11.962 28.039Q491.462-120 475.385-120Z"/></svg>

        <div>Sorry We could Not find.Please Check your Movie name</div>
      </div>
    }





    </>
  )
}

export default MoviePage