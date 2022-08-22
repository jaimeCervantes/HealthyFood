import Button from './components/Button/Button';

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
     </main>
     <aside></aside>
    </div>
  )
}

export default App
