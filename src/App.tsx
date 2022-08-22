import Button from './components/Button/Button';
import { PublishIcon } from './components/SvgMaterialIcons';

function App() {

  return (
    <div>
     <header></header>
     <main>
      <h1 className="text-3xl font-bold underline">Main content</h1>
      <Button>Primer boton</Button>
      <Button
        before={'Hola'}
        after={'Adios'}
      >
        Publicar
      </Button>
      <Button
        before={<PublishIcon fill="white"></PublishIcon>}
      >
        Publicar
      </Button>
     </main>
     <aside></aside>
    </div>
  )
}

export default App
