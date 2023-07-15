import { Wrap } from './styled';
import wanted_logo from '../../img/wanted_logo.png';

export default function Advertisement() {
  return (
    <Wrap
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.wanted.co.kr/"
    >
      <img src={wanted_logo} alt="wanted_logo" />
    </Wrap>
  );
}
