import moment from "moment"
// tslint:disable:no-console
import * as React from "react"
import { Divider, Icon, Item, Label } from "semantic-ui-react"
import * as shortid from "shortid"
import { getLocalized } from "../common/util"

interface IExperienceProps {
  lang: string
  experiences: [IExperience]
}

const formattedDate = (date?: string) => {
  return date ? moment(date).format("MMM YYYY") : "Present"
}

const styles = {
  description: {
    marginBottom: 10,
    marginTop: 10,
  },
}

const Experience = ({ experiences, lang }: IExperienceProps) => {
  return (
    <React.Fragment>
      {experiences &&
        experiences.map((e) => (
          <React.Fragment key={shortid.generate()}>
            <Item.Group divided>
              <Item>
                <Item.Image src={e.image.url} size="tiny" />
                <Item.Content verticalAlign="middle">
                  <Item.Header as="a">{e.jobTitle}</Item.Header>
                  <Item.Meta>
                    <Icon name="building" />
                    <span>{e.name}</span>
                  </Item.Meta>
                  <Item.Meta>
                    <Icon name="calendar" />
                    <span>
                      {formattedDate(e.startedAt) +
                        " - " +
                        formattedDate(e.endedAt)}
                    </span>
                  </Item.Meta>
                  <Item.Description style={styles.description}>
                    {getLocalized(lang, e.localizations, "description")}
                  </Item.Description>
                  <Item.Extra>
                    {e.techStack.split(",").map((t) => (
                      <Label key={shortid.generate()}>{t}</Label>
                    ))}
                  </Item.Extra>
                </Item.Content>
              </Item>
            </Item.Group>
            <Divider hidden />
          </React.Fragment>
        ))}
    </React.Fragment>
  )
}

export default Experience
