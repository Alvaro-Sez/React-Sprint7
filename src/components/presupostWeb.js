import { useState, useEffect } from 'react'
import { 
  Form,
  Panell,
  PopupButton,
  WrapperPresupost,
  Lista
 } from './style'
 import ListaElement from './ListaElement'

function PresupostWeb(props){
  const {setShow, setPages, setLenguages, lenguages, pages} = props
  const [features, setFeatures] = useState({
    web:0,
    seo:0,
    ads:0
  })
  const [clientName, setClientName] = useState(null)
  const [projectName, setProjectName] = useState(null)
  const [presupostLista, setPresupostLista] = useState([])
  const objInfo = {
    features,
    pages,
    lenguages,
    presupostLista
  }
  useEffect(()=>{
    const data = localStorage.getItem('info')
    if(data){
      const info = JSON.parse(data)
      setFeatures(info.features)
      setPages(info.pages)
      setLenguages(info.lenguages)
      setPresupostLista(info.presupostLista)
    }
  },[setLenguages, setPages])
  useEffect(()=>{
    localStorage.setItem('info', JSON.stringify(objInfo))
  })

  const handleSaveInfo = () => {
    const time = new Date().toLocaleString()
    const miliseconds = Date.now()
    let hide = false
    const newElement = {...objInfo, clientName, projectName, time, preu, miliseconds, hide}
    setPresupostLista([...presupostLista, newElement])
  }
  const orderByName = () => {
    const newArr = presupostLista.sort((elementA, elementB) =>elementA.clientName&&elementB.clientName? elementA.clientName.localeCompare(elementB.clientName):null)
    setPresupostLista([...newArr])
  }
  const orderByDate = () =>{
    const newArr = presupostLista.sort((elementA,elementB)=> elementA.miliseconds - elementB.miliseconds ).reverse()
    setPresupostLista([...newArr])
  }
  const reinitOrder = () =>{
    const newArr = presupostLista.sort((elementA,elementB)=> elementA.miliseconds - elementB.miliseconds )
    setPresupostLista([...newArr])
  }
  const getByName = (e) =>{
    presupostLista.forEach(element=>{
      if(element.clientName && element.clientName.startsWith(e.target.value)){
        element.hide = false
      } else{
        element.hide = true
        console.log(element)
      }
    })
    setPresupostLista([...presupostLista])

  }

 
  let preuWeb = features.web && features.web +((pages + lenguages) *30)
  let preu = preuWeb + features.ads + features.seo  
  

  return(
    <>
    <WrapperPresupost>
    <Form>
    <p>Que quieres hacer?</p>
      <label >
        <input onChange={(e)=>e.target.checked
        ?setFeatures({...features, web:features.web+500})
        :setFeatures({...features, web:features.web-500})
        } type="checkbox" checked={Boolean(features.web)}/> 
          Una pagina web (500 €)
      </label>
      {Boolean(features.web) && 
      <Panell>
        <div>
          Numero de paginas:
          <button onClick={()=>setPages(pages+1)}>+</button>
          <input type='number' onChange={()=>true} value={pages}/>
          <button onClick={()=>setPages(pages-1)}>-</button>
            <PopupButton onClick={()=> setShow(1)}>i</PopupButton>
        </div>
        <div>
          Numero de idiomas:
          <button onClick={()=>setLenguages(lenguages+1)}>+</button>
          <input type='number' onChange={()=>true} value={lenguages} />
          <button onClick={()=>setLenguages(lenguages-1)}>-</button>
            <PopupButton onClick={()=>setShow(2)}>i</PopupButton>
        </div>
      </Panell>}
      <br/>
      <label>
        <input onChange={(e)=>e.target.checked
          ?setFeatures({...features, seo:features.seo+300})
          :setFeatures({...features, seo:features.seo-300})} type="checkbox" checked={Boolean(features.seo)}/> 
          Una consultoria SEO (300 €)
      </label>
      <br/>
      <label>
        <input onChange={(e)=>e.target.checked
          ?setFeatures({...features, ads:features.ads+200})
          :setFeatures({...features, ads:features.ads-200})} type="checkbox" checked={Boolean(features.ads)}/> 
          Una campanya de Google Ads (200 €)
      </label>
      <p>Preu: {preu}€</p>
        Nombre cliente:<input type='text' onChange={(e)=>setClientName(e.target.value)}></input> <br/>
        Nombre proyecto:<input type='text' onChange={(e)=>setProjectName(e.target.value)}></input><br/>
        <button onClick={handleSaveInfo}> Guardar </button><br/><br/><br/>
        <button onClick={()=>setPresupostLista([])}> Limpiar lista </button>
    </Form>
    <Lista>
      <span>
        <button onClick={orderByName}> ordenar por nombre</button>
        <button onClick={orderByDate}> ordenar por fecha</button>
        <button onClick={reinitOrder}> reiniciar orden</button>
        <br/>
        <label>
          Buscar presupuesto por nombre: <input onChange={getByName}  type='text'></input>
        </label>
      </span>
      {presupostLista.map((element, index)=>{
        if(element.hide)return null
        else{
          return( 
            <ListaElement
            key={index} 
            web={element.features.web}
            seo={element.features.seo}
            ads={element.features.ads}
            pages={element.pages}
            lenguages={element.lenguages}
            client={element.clientName}
            project={element.projectName}
            date={element.time}
            preu={element.preu}
            />
            )
        }
        }
      )}
    </Lista>
    </WrapperPresupost>
    </>
  )
}


export default PresupostWeb