import SideBar from './partials/sidebar'
import Footer from './partials/footer'
import Navbar from './partials/navbar'


const DefaultLayout = ({ children }: { children: any }) => {
  return (
    <>
      
        <Navbar  />
        <main tw="w-full mt-6">
          {children}
        </main>
        <Footer />

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
