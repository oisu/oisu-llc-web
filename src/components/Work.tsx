import * as React from "react"
import { Divider, Item, Label } from "semantic-ui-react"
import * as shortid from "shortid"
import { getLocalized } from "../common/util"

interface IWorkProps {
  lang: string
  works: [IWork]
}

const styles = {
  description: {
    fontSize: "0.9em",
  },
  url: {
    wordBreak: "break-word",
  },
}

const Work = ({ lang, works }: IWorkProps) => {
  return (
    <React.Fragment>
      {works &&
        works.map((w) => (
          <React.Fragment key={shortid.generate()}>
            <Item.Group divided>
              <Item>
                <Item.Image src={w.logo.url} size="tiny" />
                <Item.Content verticalAlign="middle">
                  <Item.Header as="a">{w.name}</Item.Header>
                  <Item.Meta style={styles.url}>
                    <a href={w.url} target="_blank">
                      <u>{w.url}</u>
                    </a>
                  </Item.Meta>
                  <Item.Description style={styles.description}>
                    {getLocalized(lang, w.localizations, "description")}
                  </Item.Description>
                  <Item.Extra>
                    {w.techStack.split(",").map((t) => (
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

export default Work
