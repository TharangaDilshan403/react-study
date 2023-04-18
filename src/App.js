import './App.css';
import UseStateHook from './APP/hooks/UseStateHook';
import UseEffectHook from "./APP/hooks/UseEffectHook";
import {useTheme, useThemeUpdate} from './APP/hooks/UseContexHook'
import Theme from './APP/components/Theme'
import {ThemeProvider} from "./APP/hooks/UseContexHook";

function App() {

    // const theme = useTheme();
    // const toggleTheme = useThemeUpdate();
    //
    // const themeStyles = {
    //    backgroundColor :  theme ? '#333' : '#ccc',
    //     color : theme ? '#ccc'  : '#333',
    //     padding : '2rem',
    //     margin : '2rem'
    // }

  return (
      <>
        {/*use State*/}
        {/*<UseStateHook/>*/}


        {/*use Effect */}
        {/*<UseEffectHook/>*/}

        {/*use context*/}
        <ThemeProvider>
            <Theme/>
        </ThemeProvider>
      </>
  );
}

export default App;
