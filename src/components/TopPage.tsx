// tslint:disable:no-console
import * as React from "react"
import { Header, Image, Segment } from "semantic-ui-react"
import { openChat } from "../common/util"
import { color } from "../styles/theme"

export interface ITopPageProps {
  customers: [ICustomer]
  sites: [ISite]
  socials: [ISocial]
  businesses: [IBusiness]
  lang: string
}

const styles = {
  appealingText: {
    marginBottom: 10,
    marginTop: 10,
  },
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
  largeSpacer: {
    height: 60,
  },
  root: {
    display: "flex",
    flexDirection: "column" as const,
    flexGrow: 1,
    padding: 0,
  },
  spacer: {
    marginBottom: 10,
    marginTop: 10,
  },
  subHeader: {
    fontSize: "0.9rem",
  },
  warnings: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    padding: 30,
  },
  warningsCaption: {
    marginBottom: 60,
    marginTop: 60,
  },
  warningsText: {
    marginBottom: 10,
    textAlign: "center" as const,
  },
  whatWeDo: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minHeight: 640,
    paddingBottom: 20,
    paddingTop: 0,
  },
}

const TopPage = ({
  businesses,
  sites,
  socials,
  customers,
  lang,
}: ITopPageProps) => {
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
      <div style={styles.warnings}>
        <h2 style={styles.warningsCaption}>
          👷 Oisu LLCのWebサイトは現在、縮小営業中です👷
        </h2>
        <span style={styles.warningsText}>
          弊社代表三浦のプロフィールについては
          <a
            href="https://www.cake.me/s---Rh8HmZwZOqp1QdLVswoJg--/hiroaki-miura-eafb03"
            target="_blank"
          >
            <u>こちら</u>
          </a>
          をご参照ください🙏
        </span>
        <span style={styles.warningsText}>
          お仕事のご依頼やお問い合わせは、
          <a onClick={openChat}>
            <u>フォーム</u>
          </a>
          よりお願いします！
        </span>
      </div>
    </Segment>
  )
}

export default TopPage
