import gql from "graphql-tag"

export const getAllQuery = gql`
  query GetAllQuery {
    sites {
      name
      description
      keyword
      url
      logo {
        url
      }
      coverImage {
        url
      }
      caption
      subCaption
      catchphrase
      address
      localizations(includeCurrent: true) {
        locale
        address
      }
    }
    socials {
      name
      iconName
      url
    }
    businesses {
      name
      iconName
      description
    }
    mes {
      name
      title
      intro
      location
      birthday
      image {
        url
      }
    }
    works(orderBy: updatedAt_DESC) {
      url
      name
      logo {
        url
      }
      description
      techStack
      localizations(includeCurrent: true) {
        locale
        description
      }
    }
    customers(orderBy: updatedAt_DESC) {
      logo {
        url
      }
      url
    }
    experiences(orderBy: startedAt_DESC) {
      name
      description
      image {
        url
      }
      jobTitle
      techStack
      location
      startedAt
      endedAt
      localizations(includeCurrent: true) {
        locale
        description
      }
    }
    educations {
      name
      description
      image {
        url
      }
      major
      location
      startedAt
      endedAt
      localizations(includeCurrent: true) {
        locale
        description
      }
    }
    certificates {
      name
      certificateType
      localizations(includeCurrent: true) {
        locale
        name
      }
    }
  }
`
