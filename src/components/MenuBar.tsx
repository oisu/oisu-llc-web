import * as React from "react"
import { Link } from "react-router-dom"
import { Container, Menu } from "semantic-ui-react"
import { openChat } from "../common/util"
import { color } from "../styles/theme"

interface IMenuBarProps {
  sites: [ISite]
  lang: string
}

const styles = {
  root: {
    background: color.primary,
  },
}

const MenuBar = ({ sites, lang }: IMenuBarProps) => {
  return (
    <Menu inverted fixed="top" style={styles.root}>
      <Container>
        <Menu.Item as={Link} to="/" header style={{ background: "none" }}>
          Oisu LLC
        </Menu.Item>
        <Menu.Item as={Link} to="/team">
          <u>Team</u>
        </Menu.Item>
        <Menu.Item as={Link} to="/work">
          <u>Works</u>
        </Menu.Item>
        <Menu.Item as="a" href="https://blog.oisu.jp" target="_blank">
          <u>Blog</u>
        </Menu.Item>
        <Menu.Item
          as="a"
          href="https://www.wantedly.com/companies/company_985610/projects"
          target="_blank"
        >
          <u>Jobs</u>
        </Menu.Item>
        <Menu.Item as="a" onClick={openChat}>
          <u>Contact</u>
        </Menu.Item>
      </Container>
    </Menu>
  )
}

export default MenuBar
