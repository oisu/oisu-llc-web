import * as React from "react"
import { branch, renderComponent } from "recompose"

export const renderWhileLoading = (
  component: React.ComponentType<any>,
  propName = "data"
) =>
  branch(
    (props) => props[propName] && props[propName].loading,
    renderComponent(component)
  )
