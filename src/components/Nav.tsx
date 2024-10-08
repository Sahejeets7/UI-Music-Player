import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

type LibraryProps = {
  setLibraryStatus: (libraryStatus: boolean) => void;
  libraryStatus: boolean;
};

const Nav = ({ setLibraryStatus, libraryStatus }: LibraryProps) => {
  const openLibraryHandler = () => {
    setLibraryStatus(!libraryStatus);
  };

  return (
    <nav>
      <h1>Vibes</h1>
      <button
        className={libraryStatus ? 'library-active' : ''}
        onClick={openLibraryHandler}>
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;
