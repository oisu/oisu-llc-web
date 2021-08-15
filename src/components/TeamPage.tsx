// tslint:disable:no-console
import * as React from "react"
import { Container, Divider, Header } from "semantic-ui-react"
import Certificate from "./Certificate"
import Education from "./Education"
import Experience from "./Experience"
import Me from "./Me"

export interface ITeamPageProps {
  certificates: [ICertificate]
  educations: [IEducation]
  experiences: [IExperience]
  mes: [IMe]
  socials: [ISocial]
  lang: string
}

const styles = {
  root: {
    marginTop: "6em",
  },
}

const TeamPage = ({
  certificates,
  educations,
  experiences,
  lang,
  mes,
  socials,
}: ITeamPageProps) => {
  const me = mes && mes[0]
  return (
    <Container text style={styles.root}>
      <Header as="h1">
        <Header.Content>Team</Header.Content>
        <Divider hidden />
      </Header>

      <Me me={me} socials={socials} />

      <Divider hidden />

      <Header as="h2">
        <Divider hidden />
        <Header.Content>Experience</Header.Content>
        <Divider hidden />
      </Header>

      <Divider hidden />

      <Experience experiences={experiences} lang={lang} />

      <Divider hidden />

      <Header as="h2">
        <Divider hidden />
        <Header.Content>Education</Header.Content>
        <Divider hidden />
      </Header>

      <Education educations={educations} lang={lang} />

      <Divider hidden />

      <Header as="h2">
        <Divider hidden />
        <Header.Content>Certificates</Header.Content>
        <Divider hidden />
      </Header>

      <Certificate certificates={certificates} lang={lang} />
    </Container>
  )
}

export default TeamPage
