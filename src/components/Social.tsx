import * as React from "react"
import { List } from "semantic-ui-react"
import * as shortid from "shortid"

interface ISocialProps {
  socials: [ISocial]
  inverted?: boolean
}

const styles = {
  link: {
    cursor: "pointer",
  },
}

const Social = ({ inverted, socials }: ISocialProps) => {
  return (
    <List horizontal inverted={inverted}>
      {socials &&
        socials.map((s) => (
          <List.Item
            as="a"
            href={s.url}
            target="_blank"
            style={styles.link}
            key={shortid.generate()}
          >
            <List.Icon name={s.iconName} inverted={inverted} />
            {s.name}
          </List.Item>
        ))}
    </List>
  )
}

export default Social
