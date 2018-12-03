import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
// import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
// import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  card: {
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing.unit * 2
    },
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing.unit * 2
    },
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing.unit * 2
    },
    [theme.breakpoints.up('lg')]: {
      margin: theme.spacing.unit * 2
    }
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
})

function MediaCard(props) {
  const { classes, title, children } = props
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {title}
        </Typography>
        {children}
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  )
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(MediaCard)
