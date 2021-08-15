import { graphql } from "react-apollo"
import { compose } from "recompose"
import { getAllQuery } from "../common/query"

export const withAllData = () => (Component: any) =>
  compose<IAllDataResponse, {}>(graphql<{}, IAllDataResponse>(getAllQuery))(
    Component
  )
