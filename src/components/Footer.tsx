// tslint:disable:no-console
// tslint:disable:no-debugger
import * as React from "react"
import { Link } from "react-router-dom"
import {
  Container,
  Dropdown,
  DropdownProps,
  Grid,
  Image,
  List,
  Segment,
} from "semantic-ui-react"
import { getLang, getLocalized, langs, openChat } from "../common/util"
import { color } from "../styles/theme"

interface IFooterProps {
  lang: string
  setLang: (lang: string) => void
  sites: [ISite]
}

const styles = {
  address: {
    maxWidth: 240,
  },
  dropdown: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 20,
  },
  listItem: {
    color: "rgba(255,255,255,.9)",
  },
  root: {
    background: color.primary,
    margin: "2em 0em 0em",
    padding: "3em 0em",
  },
  spacer: {
    height: 20,
  },
}

const Footer = ({ lang, setLang, sites }: IFooterProps) => {
  const {
    localizations,
    logo: { url },
  } = sites[0]

  const onChange = (
    event: React.SyntheticEvent<HTMLElement>,
    data: DropdownProps
  ) => {
    setLang(String(data.value))
  }

  return (
    <Segment inverted vertical style={styles.root}>
      <Container textAlign="center">
        <List horizontal inverted divided link>
          <List.Item as={Link} to="/" style={styles.listItem}>
            <u>Home</u>
          </List.Item>
          <List.Item as={Link} to="/team" style={styles.listItem}>
            <u>Team</u>
          </List.Item>
          <List.Item as={Link} to="/work" style={styles.listItem}>
            <u>Works</u>
          </List.Item>
          <List.Item as="a" href="https://blog.oisu.jp" target="_blank">
            <u>Blog</u>
          </List.Item>
          <List.Item
            as="a"
            href="https://www.wantedly.com/companies/company_985610/projects"
            target="_blank"
          >
            <u>Jobs</u>
          </List.Item>
          <List.Item
            as={Link}
            onClick={openChat}
            to="."
            style={styles.listItem}
          >
            <u>Contact</u>
          </List.Item>
        </List>
      </Container>

      <Container style={styles.spacer} />

      <Grid columns={3} container stackable centered>
        <Grid.Row>
          <Grid.Column verticalAlign="middle">
            <Image src={url} size="tiny" centered />
          </Grid.Column>
          <Grid.Column
            verticalAlign="middle"
            centered="true"
            style={styles.address}
          >
            Oisu LLC
            <br />
            {getLocalized(lang, localizations, "address")}
          </Grid.Column>
          <Grid.Column verticalAlign="middle">
            <div style={styles.dropdown}>
              <Dropdown
                text={getLang(lang).text}
                onChange={onChange}
                options={langs}
              />
            </div>
            © 2021 — All Rights Reserved
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default Footer
