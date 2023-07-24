import { Dispatch, SetStateAction } from 'react';
import { HeaderThemes } from '../../types/headerThemes.ts';
import { useHeaderTheme } from '../../hooks/useHeaderTheme.ts';

const ContactsSection = ({setHeaderTheme}: {setHeaderTheme: Dispatch<SetStateAction<HeaderThemes>>}) => {
  const themeRef = useHeaderTheme(HeaderThemes.dark, setHeaderTheme);

  return (
    <footer ref={themeRef}>

    </footer>
  );
};

export default ContactsSection;