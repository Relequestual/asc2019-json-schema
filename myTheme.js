import theme from 'mdx-deck/themes'
import { white } from 'ansi-colors';

export default {
  styles: {
    ...theme,
    strong: {
      color: 'black'
    },
    'p': {
      'paddingLeft': '1em',
      'paddingRight': '1em',
      '@media screen and (min-width: 64em)':{
        fontSize: '32px',
        textAlign: 'left',
      }
    },
    h1: {
      'textAlign': 'center',
    },
    h2: {
      'textAlign': 'center',
    },
    h3: {
      'textAlign': 'center',
    },
    ul: {
      maxWidth: '80%',
    },
    li: {
      marginBottom: '0.5em',
    },
    // LIke githib
    code: {
      backgroundColor: 'rgba(27, 31, 35, 0.05)',
      padding: '3px',
      color: '#268bd2', //Solarized
      borderRadius: '3px',
      padding: '2px 5px',
    },
    'Slide': {
      padding: '0',
      display: 'flex',
    },
  },
  colors: {
    background: '#f6f8fa'
  },
};
