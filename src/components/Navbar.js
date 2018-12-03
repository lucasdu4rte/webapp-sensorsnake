import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MoreIcon from '@material-ui/icons/MoreVert'

import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
// import Modal from '@material-ui/core/Modal'

const styles = theme => ({
  text: {
    paddingTop: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2
  },
  toolbar: {
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})

class Navbar extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  }

  state = {
    anchorEl: null
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  render() {
    const { anchorEl } = this.state
    const { classes } = this.props
    return (
      <>
        <AppBar position="static">
          <Toolbar className={classes.toolbar}>
            <Typography variant="title" color="inherit">
              Snake Sensor
            </Typography>
            <div>
              <IconButton
                color="inherit"
                aria-owns={anchorEl ? 'simple-menu' : undefined}
                aria-haspopup="true"
                onClick={this.handleClick}
              >
                <MoreIcon />
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.handleClose}>Configuração</MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </>
    )
  }
}

export default withStyles(styles)(Navbar)
