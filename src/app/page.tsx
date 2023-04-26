import Sidebar from '@/components/Sidebar';
import Main from '@/components/Main';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-1 mb-12 pb-12">
        <Sidebar />
        <Main />
      </div>
     <Footer />
    </div>
  )
}
