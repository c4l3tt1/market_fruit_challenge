'use client'
import { ThemeProvider, createTheme } from '@mui/material'
import * as React from 'react'

const theme = createTheme({
  typography: {
    fontFamily: ['var(--font-openSans)'].join(','),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: () => `
            * {
              margin: 0;
              padding: 0;
            }
        `,
    },
  },
})
type Props = {
  children: React.ReactNode
}
function MUIThemeProvider({ children }: Props) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default MUIThemeProvider
