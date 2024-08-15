import './App.css'
import { Wrapper } from './components/Wrapper/Wrapper'
import { Card } from './components/Card/Card'
import { CardHeader } from './components/Card/CardHeader/CardHeader'
import { CardBody } from './components/Card/CardBody/CardBody'
import { CardFooter } from './components/Card/CardFooter/CardFooter'

function App() {

  return (
    <>
    <Wrapper title='Wrapper Title' subtitle='Wrapper subtitle'>
    <Card>
      <CardHeader title='card header'></CardHeader>
      <CardBody textContent='Text content på card'></CardBody>
      <CardFooter footerContent = 'Footer content på card'></CardFooter>
    </Card>
    </Wrapper>
    </>
  )
}

export default App
