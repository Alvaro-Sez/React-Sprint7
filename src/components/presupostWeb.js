import { useState, useEffect } from 'react'
import { 
  Form,
  Panell
 } from './style'

function PresupostWeb(){
  const [features, setFeatures] = useState({
    web:0,
    seo:0,
    ads:0,
    pages:0,
    lenguages:0
  })
  useEffect(()=>{
    const data = localStorage.getItem('features')
    if(data){
      setFeatures(JSON.parse(data))
    }
  },[])
  useEffect(()=>{
    localStorage.setItem('features', JSON.stringify(features))
  })

  /* esto esta muy feo , lose xD */
  let preu = features.ads + features.seo + features.web + ((features.pages + features.lenguages) *30)
  

  

  return(
    <>
    <p>Que quieres hacer?</p>
    <Form>
      <label >
        <input onChange={(e)=>e.target.checked
        ?setFeatures({...features, web:features.web+500})
        :setFeatures({...features, web:features.web-500})
        } type="checkbox" checked={Boolean(features.web)}/> 
          Una pagina web (500 €)
      </label>
      {Boolean(features.web) && 
      <Panell>
        <label>
          Numero de paginas:
          <button onClick={()=>setFeatures(
            {...features, pages:features.pages+1})}>+</button>
          <input type='number' value={features.pages}/>
          <button onClick={()=>setFeatures(
            {...features, pages:features.pages-1})}>-</button>
        </label>
        <label>
          Numero de idiomas:
          <button onClick={()=>setFeatures(
            {...features,lenguages:features.lenguages+1})}>+</button>
          <input type='number' value={features.lenguages}/>
          <button onClick={()=>setFeatures(
            {...features,lenguages:features.lenguages-1})}>-</button>
        </label>
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
    </Form>
    </>
  )
}


export default PresupostWeb