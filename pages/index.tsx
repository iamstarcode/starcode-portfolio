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
  <div >
    <div tw="w-full flex flex-col justify-center gap-y-5 mt-5">
      <Button variant="primary">Submit</Button>
      <Button variant="secondary">Cancel</Button>
      <Button tw="bg-primary" isSmall>Close</Button>
      <ThemeToggle/>
    </div>
  </div>
)

App.getLayout = function getLayout(page: ReactElement) {
  return ( <DefaultLayout>{page}</DefaultLayout>)
}
export default App
