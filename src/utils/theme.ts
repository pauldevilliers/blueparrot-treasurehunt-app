import { createTheme as createMuiTheme } from '@mui/material/styles';

export function createTheme(config: any) {
  const textColorPrimary = config?.overall_text_color || '#FF6A00';
  return createMuiTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: textColorPrimary,
      },
      background: {
        default: '#000000',
      },
      text: {
        primary: '#FFFFFF',
        secondary: '#FFFFFF',
      },
    },
    typography: {
      fontFamily: `'Roboto', 'Helvetica', 'Arial', sans-serif`,
      h1: {
        fontWeight: 900,
        fontSize: '3rem',
        textTransform: 'uppercase',
        color: textColorPrimary,
      },
      h2: {
        fontWeight: 700,
        fontSize: '1.8rem',
        textTransform: 'uppercase',
        color: textColorPrimary,
        letterSpacing: '0.1rem',
      },
      h3: {
        fontWeight: 700,
        fontSize: '1.5rem',
        color: textColorPrimary,
        letterSpacing: '0.1rem',
      },
      h4: {
        fontWeight: 700,
        fontSize: '1.3rem',
        color: textColorPrimary,
        letterSpacing: '0.15rem',
      },
      body1: {
        fontSize: '1rem',
        color: '#FFFFFF',
      },
    },
    components: {
      MuiInputBase: {
        styleOverrides: {
          root: {
            backgroundColor: '#333',
            borderRadius: '4px',
            input: {
              color: '#fff',
            },
          },
        },
      },
      MuiFormHelperText: {
        styleOverrides: {
          root: {
            position: 'absolute',
            bottom: -20,
            left: 0,
            margin: 0,
          },
        },
      },
      MuiFormControlLabel: {
        styleOverrides: {
          root: {
            margin: 0,
            textAlign: 'left',
            display: 'flex',
            justifyContent: 'space-between',
          },
        },
      },
      MuiCheckbox: {
        styleOverrides: {
          root: {
            // color: '#FF6A00',
            padding: 0,
            marginLeft: '0.5rem',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '4px',
            fontWeight: 'bold',
            fontSize: '1rem',
            textTransform: 'uppercase',
            background: config?.overall_button_color || '#fff',
            color: config?.overall_button_text_color || '#FF6A00',
            minWidth: '150px',
            // width: 'max-content',
            marginTop: 'auto',
            marginLeft: 'auto',
            marginRight: 'auto',
          },
        },
      },
    },
  });
}
