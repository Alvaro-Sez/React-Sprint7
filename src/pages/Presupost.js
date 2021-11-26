import PresupostWeb from "../components/presupostWeb";
import Modal from '../components/modal'
import { useState } from "react";



function Presupost () {
  const [show, setShow] = useState(0)
  const [pages, setPages] = useState(0)
  const [lenguages, setLenguages] = useState(0)
  return (
    <>
      <Modal 
      show={show} 
      setShow={setShow} 
      pages={pages} 
      lenguages={lenguages} 
      />
      <PresupostWeb 
      show={show}
      setShow={setShow} 
      setPages={setPages} 
      setLenguages={setLenguages}
      pages={pages}
      lenguages={lenguages}
      />
    </> 
  );
}

export default Presupost