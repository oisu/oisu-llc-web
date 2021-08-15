import moment from "moment"
import * as React from "react"
import { Card, Icon, Image } from "semantic-ui-react"
import Social from "./Social"

interface IMeProps {
  me: IMe
  socials: [ISocial]
}

const Me = ({ me, socials }: IMeProps) => {
  return (
    <Card centered>
      <Image src={me.image.url} />
      <Card.Content>
        <Card.Header>{me.name}</Card.Header>
        <Card.Meta>{me.title}</Card.Meta>
        <Card.Description>{me.intro}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div>
          <a>
            <Icon name="location arrow" />
            {me.location}
          </a>
        </div>
        <div>
          <a>
            <Icon name="birthday cake" />
            Born on {moment(me.birthday).format("MMM DD, YYYY")}
          </a>
        </div>
      </Card.Content>
      <Card.Content extra>
        <Social socials={socials} inverted={false} />
      </Card.Content>
    </Card>
  )
}

export default Me
