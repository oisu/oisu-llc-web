import moment from "moment"
import * as React from "react"
import { Icon, Item, Label } from "semantic-ui-react"
import * as shortid from "shortid"
import { getLocalized } from "../common/util"

interface IEducationProps {
  educations: [IEducation]
  lang: string
}

const formattedDate = (date: string) => moment(date).format("MMM YYYY")

const Education = ({ educations, lang }: IEducationProps) => {
  return (
    <React.Fragment>
      {educations &&
        educations.map((e) => (
          <Item.Group divided key={shortid.generate()}>
            <Item>
              <Item.Image src={e.image.url} size="tiny" />
              <Item.Content verticalAlign="middle">
                <Item.Header as="a">{e.name}</Item.Header>
                <Item.Meta>
                  <Icon name="calendar" />
                  <span>
                    {formattedDate(e.startedAt) +
                      " - " +
                      formattedDate(e.endedAt)}
                  </span>
                </Item.Meta>
                <Item.Description>
                  {getLocalized(lang, e.localizations, "description")}
                </Item.Description>
                <Item.Extra>
                  {e.major.split(",").map((t) => (
                    <Label key={shortid.generate()}>{t}</Label>
                  ))}
                </Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
        ))}
    </React.Fragment>
  )
}

export default Education
