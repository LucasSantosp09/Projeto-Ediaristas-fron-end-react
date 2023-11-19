import { Inter } from 'next/font/google';
import { NextPage } from 'next';
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <div>
      <SafeEnvironment />
      <PageTitle 
        title = {'Conheça os profissionais'} 
        subtitle = {'Preencha seu endereço e veja todos os profissionais da sua localidade'}
        />
     </div>

    </>
  )
}
