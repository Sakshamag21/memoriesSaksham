import { makeStyles, ThemeProvider } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 0,
    width:'98vw',
    height:'50vh',
    marginBottom: ' 10px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'white',
    position:'absolute',
    fontWeight: '600',
    opacity:'0.5'
    
  },
  image: {
    marginLeft: '0px',
    height:'50vh',
  },
  imageBottom: {
    margin: '20px',
    marginLeft: '0px',
    borderRadius:'3px',
    boxShadow:'0px 2px 2px rgb(0 0 0 / 38%)'
  },
}));
