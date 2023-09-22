import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import Page from './page';

export default function App() {
  return <MantineProvider><Page/></MantineProvider>;
}
