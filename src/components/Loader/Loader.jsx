import css from './Loader.module.css';
import { ReactComponent as LoaderIcon } from '../Icons/spinner.svg';

export default function Loader() {
  return (
    <div>
      <LoaderIcon size="48" className={css.icon__spin}/>
    </div>
  );
}
