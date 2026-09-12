import { Heading } from './Components/Heading';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  console.log('Oi');

  return (
    <>
      <Heading attr={123} attr2='String'>Olá mundo! 1</Heading>
    
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde iste, quo
        maxime veniam assumenda deleniti deserunt error magni, eaque accusamus
        laudantium voluptates voluptate quaerat? Id quas veritatis vel et
        aperiam?
      </p>
    </>
  );
}
