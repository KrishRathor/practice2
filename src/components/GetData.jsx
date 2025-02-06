import React,{useState} from 'react'
import axios from 'axios'

const GetData = () => {
    const [Data, setData] = useState([])

    const getData=async()=>{
      const response = await axios.get("https://picsum.photos/v2/list");
      console.log(response.data)
      setData(response.data);
    }

  return (
    <>
        <button onClick={getData} className='bg-white m-2 font-extrabold text-xl p-1 pl-2 pr-2 rounded-2xl active:scale-90'>Get Data</button>
        <div className=' bg-lime-700 m-2 text-white p-2'>
            {Data.map(function(elem,ind){
            return <>
            <div key={ind} className='bg-amber-950   text-amber-400 flex justify-between items-center w-full px-7 py-6 rounded mb-3' >
                <img src={elem.download_url} alt=""  className='h-40 p-2'/>
                <div className='text-xl font-extrabold'>{elem.author}</div>
            </div>
            </>
            })}
        </div>
    </>
  )
}

export default GetData