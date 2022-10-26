import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Banner } from '../components/banner';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Landing Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav>
          <li><a href="e">euu</a></li>
        </nav>
      </header>
      <main className={styles.main}>
          <Banner/>
      

      </main>

      <footer className={styles.footer}>
       
      </footer>
    </div>
  )
}