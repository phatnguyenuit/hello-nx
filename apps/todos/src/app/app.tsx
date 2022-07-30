import { CommonUi } from 'common-ui';
import NxWelcome from './nx-welcome';
import Button from './components/Button/Button';

// import './app.module.css';

export function App() {
  return (
    <>
      <CommonUi />
      <Button>Hello styled-components</Button>
      <NxWelcome title="todos" />
    </>
  );
}

export default App;
