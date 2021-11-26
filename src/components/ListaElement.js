function ListaElement (props) {
  const {web, seo, ads, pages, lenguages, client, date, project, preu} = props
  return (
    <>
      <div>
        <ul>
          {client ?<li> nombre cliente: {client}</li>: ''} 
          {project ?<li> proyecto: {project}</li>: ''} 
          {web?<li> Proyecto web: 500€</li>: ''} 
          {pages ?<li> paginas: {pages}</li>: ''} 
          {lenguages ?<li>  idiomas: {lenguages}</li>: ''} 
          {seo?<li> consultoria SEO: 300€</li>: ''} 
          {ads ?<li> Google Ads: 200€</li>: ''} 
          <li> {`fecha: ${date}`} </li>
          <li> {`precio: ${preu}€`} </li>
        </ul>
      </div>
    </>
  )
}


export default ListaElement