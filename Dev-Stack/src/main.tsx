import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Technologies from './components/Technologies'
import type { IPopularProduct } from './types'

const usersFetch = async ():Promise<IPopularProduct[]> =>{
  const response = await fetch("../public/technologies-card.json");
  const data = await response.json();
  return data;
}

const usersPromise =  usersFetch();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
 <Navbar/>
 <Banner/>
 <Technologies usersPromise={usersPromise}/>
  </StrictMode>,
)
