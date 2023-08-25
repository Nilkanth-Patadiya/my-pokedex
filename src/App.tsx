import { CssBaseline, Grid, Typography } from "@mui/material"

function App() {
  return (
    <>
      <CssBaseline enableColorScheme />
      <Grid container>
        <Grid item>
          <Typography variant="h1" color={"darkseagreen"}>
            Pokedex App
          </Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default App
