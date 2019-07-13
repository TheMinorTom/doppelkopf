import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary">
        <Link color="inherit" href="/opensource.php">
            Open Source Licenses
        </Link>
        {' | '}
        <Link color="inherit" href="//go.minortom.net/imprint?rel=doppelkopf">
            Imprint/Impressum
        </Link>
        {' | '}
        <Link color="inherit" href="//go.minortom.net/contact?rel=doppelkopf">
            Contact
        </Link>
        {' | '}
        <Link color="inherit" href="//go.minortom.net/privacy?rel=doppelkopf">
            Privacy policy
        </Link>
        {' | '}
        <Link color="inherit" href="//go.minortom.net/tos?rel=doppelkopf">
            Terms of Service
        </Link>
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(2),
    marginTop: 'auto',
    backgroundColor: 'white',
  },
}));

export default function StickyFooter() {
  const classes = useStyles();
  
  return (
      <footer>
        <Container className={classes.footer} maxWidth="sm">
          <Typography variant="body1">© <Link color="inherit" href="https://minortom.net/?rel=doppelkopf">MinorTom</Link>, DaJaBe</Typography>
          <MadeWithLove />
        </Container>
      </footer>
  );
} 
