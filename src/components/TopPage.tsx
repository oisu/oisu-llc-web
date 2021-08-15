// tslint:disable:no-console
import * as React from "react"
import {
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  Segment,
} from "semantic-ui-react"
import * as shortid from "shortid"
import { color } from "../styles/theme"
import Customer from "./Customer"

export interface ITopPageProps {
  customers: [ICustomer]
  sites: [ISite]
  socials: [ISocial]
  businesses: [IBusiness]
}

const styles = {
  businessName: {
    marginBottom: 10,
  },
  cover: {
    alignItems: "center",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    height: 600,
    justifyContent: "center",
    width: "100%",
  },
  customers: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minHeight: 600,
    paddingBottom: 0,
    paddingTop: 0,
  },
  gridRow: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
  header: {
    marginBottom: 0,
    marginLeft: 20,
    marginTop: 0,
  },
  intro: {
    alignItems: "center",
    backgroundColor: color.primary,
    display: "flex",
    flexDirection: "column",
    height: 300,
    justifyContent: "center",
    margin: 0,
    paddingBottom: 0,
    paddingTop: 0,
  },
  root: {
    padding: 0,
  },
  spacer: {
    height: 20,
  },
  subHeader: {
    fontSize: "0.9rem",
  },
  whatWeDo: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minHeight: 600,
    paddingBottom: 20,
    paddingTop: 0,
  },
}

const TopPage = ({ businesses, sites, socials, customers }: ITopPageProps) => {
  const site = sites[0]
  const coverStyle = {
    background: `url(${site.coverImage.url})`,
  }
  return (
    <Segment basic padded={false} className="full-width" style={styles.root}>
      <div style={{ ...coverStyle, ...styles.cover }}>
        <div>
          <Image
            src={site.logo && site.logo.url}
            size="small"
            centered={true}
          />
          <Header size="medium">{site.caption}</Header>
        </div>
      </div>

      <Container text basic="true" style={styles.whatWeDo}>
        <Header size="large">
          <Divider hidden />
          What we do
          <Divider hidden />
        </Header>

        <Container style={styles.spacer} />

        <Grid columns={3} divided container stackable>
          <Grid.Row>
            {businesses.map((b) => (
              <Grid.Column key={shortid.generate()} style={styles.gridRow}>
                <Icon name={b.iconName} size="huge" />
                <Header as="h2" icon style={styles.header}>
                  <Header.Content style={styles.businessName}>
                    {b.name}
                  </Header.Content>
                  <Header.Subheader size="mini" style={styles.subHeader}>
                    {b.description}
                  </Header.Subheader>
                </Header>
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
      </Container>

      <Segment basic style={styles.intro}>
        <Container text>
          <Header size="large" inverted textAlign="center">
            {site.catchphrase}
          </Header>
        </Container>
      </Segment>

      <Divider hidden />

      <Container text style={styles.customers}>
        <Header size="large" textAlign="center">
          <Divider hidden />
          Our customers
          <Divider hidden />
        </Header>
        <Container style={styles.spacer} />
        <Customer customers={customers} />
      </Container>
    </Segment>
  )
}

export default TopPage
