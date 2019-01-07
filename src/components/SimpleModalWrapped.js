import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Modal from '@material-ui/core/Modal'
// import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MoreIcon from '@material-ui/icons/Settings'
import TextField from '@material-ui/core/TextField'

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  modalContent: {
    display: 'flex',
    marginTop: '20px',
    marginBottom: '20px',
    flexDirection: 'column'
  }
})

function getModalStyle() {
  const top = 50
  const left = 50

  return {
    position: 'fixed',
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    minHeight: '70%',
    minWidth: '70%'
  }
}

class SimpleModal extends React.Component {
  state = {
    open: true,
    tempMax: '',
    tempMin: ''
  }

  handleOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  toggle = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }))
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  }

  render() {
    const { classes } = this.props

    return (
      <>
        <IconButton
          color="inherit"
          aria-owns="simple-menu"
          aria-haspopup="true"
          onClick={this.handleOpen}
        >
          <MoreIcon />
        </IconButton>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="h5" id="modal-title">
              Parâmetros de configuração
            </Typography>
            <div className={classes.modalContent}>
              <Typography variant="h6" id="modal-title">
                Temperatura
              </Typography>
              <form
                className={classes.formContainer}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-name"
                  label="Mínimo"
                  className={classes.textField}
                  value={this.state.tempMin}
                  onChange={this.handleChange('tempMin')}
                  margin="normal"
                />
                <TextField
                  id="standard-name"
                  label="Máximo"
                  className={classes.textField}
                  value={this.state.tempMax}
                  onChange={this.handleChange('tempMax')}
                  margin="normal"
                />
              </form>

              <Typography variant="h6" id="modal-title">
                Humidade
              </Typography>
              <form
                className={classes.formContainer}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-name"
                  label="Mínimo"
                  className={classes.textField}
                  value={this.state.tempMin}
                  onChange={this.handleChange('tempMin')}
                  margin="normal"
                />
                <TextField
                  id="standard-name"
                  label="Máximo"
                  className={classes.textField}
                  value={this.state.tempMax}
                  onChange={this.handleChange('tempMax')}
                  margin="normal"
                />
              </form>
            </div>
          </div>
        </Modal>
      </>
    )
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired
}

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal)

export default SimpleModalWrapped
