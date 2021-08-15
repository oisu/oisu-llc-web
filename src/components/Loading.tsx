import * as React from "react"
import { Dimmer, Loader, Segment } from "semantic-ui-react"

const styles = {
  dimmer: {
    backgroundColor: "gray",
  },
  root: {
    bottom: 0,
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
  },
}

const Loading = () => (
  <Segment style={styles.root}>
    <Dimmer active style={styles.dimmer}>
      <Loader size="large" content="Loading" />
    </Dimmer>
  </Segment>
)

export default Loading
