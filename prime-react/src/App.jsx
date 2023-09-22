import "primereact/resources/themes/bootstrap4-dark-blue/theme.css"; 
import "primereact/resources/primereact.min.css";             
import { PrimeReactProvider } from 'primereact/api'
import Page from './Page'

function App() {

  return (
    <PrimeReactProvider>
      <Page/>
    </PrimeReactProvider>
  )
}

export default App
