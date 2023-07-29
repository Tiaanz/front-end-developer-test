import { FC } from 'react'
import Head from "next/head";

interface MetaProps {
  title: string
 
}

const Meta: FC<MetaProps> = ({ title}) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content="E-commerce | clothing site | online-shopping" />
      <meta name="description" content="A convenient online shopping website." />
      <meta charSet="utf-8" />
      <title>{title}</title>
    </Head>
  )
}



export default Meta
