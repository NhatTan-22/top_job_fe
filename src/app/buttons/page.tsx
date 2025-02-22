import { Button } from '@/components/ui/button'

export default function ButtonsPage() {
  return (
    <div className='flex flex-col items-center justify-center gap-5 w-screen h-screen p-10'>
      <div className='flex flex-wrap gap-5 items-center justify-center'>
        <Button variant='default'>Default</Button>
        <Button variant='destructive'>Destructive</Button>
        <Button variant='outline'>Outline</Button>
        <Button variant='secondary'>Secondary</Button>
        <Button variant='ghost'>Ghost</Button>
        <Button variant='link'>Link</Button>
      </div>
      <div className='flex flex-wrap gap-5 items-center justify-center'>
        <Button variant='blue'>Blue</Button>
        <Button variant='green'>Green</Button>
        <Button variant='cyan'>Cyan</Button>
        <Button variant='teal'>Teal</Button>
        <Button variant='lime'>Lime</Button>
        <Button variant='red'>Red</Button>
        <Button variant='pink'>Pink</Button>
        <Button variant='purple'>Purple</Button>
      </div>
      <div className='flex flex-wrap gap-5 items-center justify-center'>
        <Button variant='purpleToBlue'>Purple to Blue</Button>
        <Button variant='cyanToBlue'>Cyan to Blue</Button>
        <Button variant='greenToBlue'>Green to Blue</Button>
        <Button variant='purpleToPink'>Purple to Pink</Button>
        <Button variant='pinkToOrange'>Pink to Orange</Button>
        <Button variant='tealToLime'>Teal to Lime</Button>
        <Button variant='redToYellow'>Red to Yellow</Button>
      </div>
    </div>
  )
}
