import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { ThemeProvider } from 'next-themes';
import Page from './Page';

function App() {

  return (
    <ThemeProvider attribute="class">
      <Theme >
        <Page/>
      </Theme>
    </ThemeProvider>
  )
}

export default App