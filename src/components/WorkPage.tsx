import * as React from "react"
import { Container, Divider, Header } from "semantic-ui-react"
import Work from "./Work"

export interface IWorkPageProps {
  works: [IWork]
  lang: string
}

const styles = {
  root: {
    marginTop: "6em",
  },
}

const WorkPage = ({ lang, works }: IWorkPageProps) => {
  return (
    <Container text style={styles.root}>
      <Header as="h2">
        <Header.Content>Works</Header.Content>
        <Divider hidden />
      </Header>

      <Work works={works} lang={lang} />
    </Container>
  )
}

export default WorkPage
