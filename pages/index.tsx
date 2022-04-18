import { ReactElement } from 'react'
import tw from 'twin.macro'
import { Button, Logo } from '../components'
import ThemeToggle from '../components/ThemeToggle'
import DefaultLayout from '../layouts/default'

const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ hasBackground }: { hasBackground: boolean }) => [
    tw`flex flex-col items-center justify-center h-screen`,
    hasBackground && tw`bg-gradient-to-b from-electric to-ribbon`,
  ],
}

const App = () => (
  < >
    <div tw="w-full grid grid-cols-1 lg:grid-cols-2">

      <div>
        <h2 tw=" text-sm text-center lg:(text-left text-lg) font-bold mt-5">
          Hi!, I'm Bakare Abiola alias!
        </h2>
        <h2 tw="text-6xl mt-2 text-center">Starcode</h2>

        <h2 tw=" text-sm text-center lg:(text-left text-lg) font-bold mt-5">
          catchy right? Lol
        </h2>

        <h2 tw=" text-sm text-[rgba(57,41,74,1)] text-align[justify] lg:(text-left text-lg) font-bold mt-5">
          Starcode is a freelancer and a front-end developer, with a passion for building and delivering great ideas into digital products.

          When he's not writting codes, He hang's out with Bruce Wayne, am not kidding I hang out with batsy! Loves to play COD after long hours writting codes.
        
          Loves  learning new things and also sharing with the community and also support new devs trasitioning into tech,

        </h2>
      </div>

      <div tw="w-full flex justify-center">
        <div tw="w-52 h-52 mt-5 shadow-xl rounded-xl">
        </div>
      </div>

      <div className="lg:col-span-2 flex flex-col  py-6">

      </div>
    </div>
    <div tw="w-full flex flex-col justify-center gap-y-5 mt-5">
      <Button variant="primary">Submit</Button>
      <Button variant="secondary">Cancel</Button>
      <Button tw="bg-primary" isSmall>Close</Button>
      <ThemeToggle />
    </div>
  </>
)

App.getLayout = function getLayout(page: ReactElement) {
  return (<DefaultLayout>{page}</DefaultLayout>)
}
export default App
