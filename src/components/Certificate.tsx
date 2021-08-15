import * as R from "ramda"
import * as React from "react"
import { Divider, Header, List } from "semantic-ui-react"
import * as shortid from "shortid"
import { getLocalized } from "../common/util"

interface ICertificateProps {
  certificates: [ICertificate]
  lang: string
}

const Certificate = ({ certificates, lang }: ICertificateProps) => {
  const certMap = R.groupBy((c: ICertificate) => c.certificateType)(
    certificates
  )
  const certTypes = R.keys(certMap)
  return (
    <React.Fragment>
      {certTypes.map((key) => (
        <span key={shortid.generate()}>
          <Header size="medium">{key}</Header>
          <List as="ol">
            {certMap[key].map((c: ICertificate) => (
              <List.Item as="li" value="-" key={shortid.generate()}>
                {getLocalized(lang, c.localizations, "name")}
              </List.Item>
            ))}
          </List>
          <Divider hidden />
        </span>
      ))}
    </React.Fragment>
  )
}

export default Certificate
