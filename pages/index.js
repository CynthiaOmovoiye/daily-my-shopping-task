import Head from 'next/head';

import Header from '../components/Header';
import TopCards from '../components/TopCards';
import Table from '../components/Table';
import ThirdForm from '../components/ThirdForm';
import FirstForm from '@/components/FirstForm';
 import SecondForm from '@/components/SecondForm';
 import LoginPage from '@/components/Login';


export default function Home() {
  return (
    <LoginPage />
    // <>
    //   <Head>
    //     <title>Create Next App</title>
    //     <meta name='description' content='Generated by create next app' />
    //     <meta name='viewport' content='width=device-width, initial-scale=1' />
    //     <link rel='icon' href='/favicon.ico' />
    //   </Head>
     
    //   <main className='bg-gray-100 min-h-screen'>
    //     <Header />
    //     <TopCards />
    //     <Table />
    //     <FirstForm/>
    //     <div className='p-4 grid md:grid-cols-3 grid-cols-1 gap-4'>
    //     <SecondForm/>
    //       <ThirdForm />
    //     </div>
    //   </main>
    // </>
  );
}
