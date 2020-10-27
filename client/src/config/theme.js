import {createMuiTheme} from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette: {
        primary: {
            main : "#4BA8CE",
        },
        secondary: {
            main : "#212121"
        },
    },
    overrides: {
        MuiTooltip: {
          tooltip: {
            fontSize: "1rem",
            color: "white",
          }
        }
      }
})
export default theme