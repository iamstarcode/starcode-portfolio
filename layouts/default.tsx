import SideBar from './partials/sidebar'
import Footer from './partials/footer'
import Navbar from './partials/navbar'


const DefaultLayout = ({ children }: { children: any }) => {
  return (
    <>
      <div
        tw="w-full flex flex-col max-w-7xl mx-auto"
      >
        <Navbar />
        <main tw="p-4 lg:p-8">
          {children}
        </main>
        <Footer />
      </div>

      <style jsx global>
        {`
        html,body{
          font-family: 'Kumbh Sans', sans-serif;
        } 
        `}
      </style>
    </>
  )
}

export default DefaultLayout
