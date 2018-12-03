import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import MediaCard from './MediaCard'
import LineChart from './LineChart'

const styles = theme => {
  return {
    root: {
      flexGrow: 1,
      [theme.breakpoints.down('sm')]: {
        paddingTop: theme.spacing.unit * 2
      },
      [theme.breakpoints.up('md')]: {
        paddingTop: theme.spacing.unit * 4
      },
      [theme.breakpoints.up('lg')]: {
        paddingTop: theme.spacing.unit * 6
      }
    },
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    item: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 'none',
      maxWidth: '100%'
    }
  }
}

function ContentGrid(props) {
  const { classes } = props
  return (
    <div className={classes.root}>
      <Grid className={classes.container} container spacing={24}>
        <Grid className={classes.item} item sm={6}>
          <MediaCard>
            <LineChart />
          </MediaCard>
        </Grid>
        <Grid className={classes.item} item sm={6}>
          <MediaCard>
            <LineChart />
          </MediaCard>
        </Grid>
        <Grid className={classes.item} item sm={6}>
          <MediaCard>
            <LineChart />
          </MediaCard>
        </Grid>
        <Grid className={classes.item} item sm={6}>
          <MediaCard>
            <LineChart />
          </MediaCard>
        </Grid>
      </Grid>
    </div>
  )
}

ContentGrid.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ContentGrid)
