import { Inter } from '@next/font/google'

import Header from "../components/Header"
import CardList from "../components/CardList"
import Rodape from '../components/Rodape'



export default function Home() {

  return (
    <>
      <Header />
      <CardList />
      <Rodape />
    </>
  )
}