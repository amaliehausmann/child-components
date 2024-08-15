import './App.css'
import { Wrapper } from './components/Wrapper/Wrapper'
import { Card } from './components/Card/Card'
import { CardHeader } from './components/Card/CardHeader/CardHeader'
import { CardBody } from './components/Card/CardBody/CardBody'
import { CardFooter } from './components/Card/CardFooter/CardFooter'
import { CardImage } from './components/Card/CardImage/CardImage'
import { cards } from '../src/data/data.js'


function App() {


  return (
    <>
    <Wrapper title='Wrapper Title' subtitle='Wrapper subtitle'>
    {cards.map((item) => (
        <Card key={item.title}>
          <CardHeader title={item.title}></CardHeader>
          <CardImage image={item.image} alt="" /> 
          <CardBody textContent={item.textContent}></CardBody>
          <CardFooter footerContent={item.footerContent}></CardFooter>
        </Card>
      )
        )}
    </Wrapper>
    </>
  )
}

export default App
