import { useDeferredValue, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card/Card'

function App() {
  const [detail, setDetail] = useState([])

  const [seeAll, setSeeAll] = useState(false)
  const [modalData, setModalData] = useState({})
  const [view, setView] = useState(null)
  console.log  (view)


  useEffect(() => {

    fetch('https://openapi.programming-hero.com/api/ai/tools')
      .then(response => response.json())
      .then(data => setDetail(data.data.tools))




  }, [])

  useEffect ( () => {


    fetch (` https://openapi.programming-hero.com/api/ai/tool/${view}`)
    .then(response => response.json())
    .then (data => setModalData(data.data))  
  }, [view])

  const showMore =  () => {


    setSeeAll (true)



   }




  return (
    <div className="App">




      <div className='grid lg:grid-cols-3 gap-5'>


        {


          detail.slice( 0, seeAll? 12: 6).map(detail => <Card modal = {modalData} singledata = {setView} name={detail.name} features={detail.features} key={detail.id} image={detail.image} id = {detail.id}></Card>)
        }

        

      </div>

      <div>

        

        

        




      <button  onClick={showMore}  className={!seeAll  ? 'btn' : 'hidden'}>Show More</button>


      </div>












    </div>
  )
}

export default App
