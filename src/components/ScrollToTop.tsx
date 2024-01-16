import Box from '@mui/material/Box'
import Fade from '@mui/material/Fade'
import useScrollTrigger from '@mui/material/useScrollTrigger'

function ScrollToTop({ children }: React.PropsWithChildren<unknown>) {
  const trigger = useScrollTrigger({
    target: window,
    disableHysteresis: true,
    threshold: 100,
  })

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#back-to-top-anchor')

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      })
    }
  }

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 55, right: 15 }}
      >
        {children}
      </Box>
    </Fade>
  )
}

export default ScrollToTop
