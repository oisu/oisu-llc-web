import * as React from "react"
import { Grid, Item } from "semantic-ui-react"
import * as shortid from "shortid"

interface ICustomerProps {
  customers: [ICustomer]
}

const styles = {
  column: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
  logo: {
    opacity: 0.5,
  },
}

const Customer = ({ customers }: ICustomerProps) => {
  return (
    <Grid columns={customers.length} container stackable centered>
      <Grid.Row>
        {customers &&
          customers.map((w) => (
            <Grid.Column
              textAlign="center"
              key={shortid.generate()}
              style={styles.column}
            >
              <a href={w.url} target="_blank">
                <Item.Image src={w.logo.url} size="tiny" style={styles.logo} />
              </a>
            </Grid.Column>
          ))}
      </Grid.Row>
    </Grid>
  )
}

export default Customer
