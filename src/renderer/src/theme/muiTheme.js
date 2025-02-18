import { createTheme } from '@mui/material'

export default createTheme({
    palette: {
        normalGreen: {
            light: '#ff0000',
            main: '#8FDFA5',
            contrastText: '#253239'
        },
        darkGreen: {
            main: '#253239',
            contrastText: '#8FDFA5'
        },
        lightGreen: {
            main: '#E6FDEC',
            contrastText: '#253239'
        },
        white: {
            main: '#F9FFFB',
            contrastText: '#253239'
        },
        error: {
            main: '#9F1538',
            contrastText: '#eee'
        }
    }
})
