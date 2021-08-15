interface Window {
  fcWidget: {
    open(): void
  }
}

interface IWork {
  name: string
  description: string
  logo: IImage
  url: string
  techStack: string
  localizations: [IWorkLocalized]
}

interface IWorkLocalized {
  locale: string
  description: string
}

interface IAllDataResponse {
  data: {
    works: [IWork]
    educations: [IEducation]
    certificates: [ICertificate]
    experiences: [IExperience]
    mes: [IMe]
    sites: [ISite]
    customers: [ICustomer]
    socials: [ISocial]
    businesses: [IBusiness]
  }
}

interface ISite {
  name: string
  description: string
  keyword: string
  url: string
  logo: IImage
  coverImage: IImage
  caption: string
  subCaption: string
  catchphrase: string
  address: string
  localizations: [ISiteLocalized]
}

interface ISiteLocalized {
  locale: string
  address: string
}

interface ISocial {
  name: string
  // @ts-ignore
  iconName: SemanticICONS
  url: string
}

interface IBusiness {
  name: string
  // @ts-ignore
  iconName: SemanticICONS
  description: string
}

interface IExperience {
  name: string
  description: string
  jobTitle: string
  techStack: string
  location: string
  image: IImage
  startedAt: string
  endedAt?: string
  localizations: [IExperienceLocalized]
}

interface IExperienceLocalized {
  locale: string
  description: string
}

interface IImage {
  url: string
}

interface IEducation {
  name: string
  description: string
  major: string
  location: string
  image: IImage
  startedAt: string
  endedAt: string
  localizations: [IEducationLocalized]
}

interface IEducationLocalized {
  locale: string
  description: string
}

interface ICertificate {
  name: string
  certificateType: string
  startedAt: string
  endedAt: string
  localizations: [ICertificateLocalized]
}

interface ICertificateLocalized {
  locale: string
  name: string
}

interface IMe {
  name: string
  title: string
  intro: string
  location: string
  birthday: string
  image: IImage
}

interface ILang {
  key: string
  text: string
  value: string
}

interface ICustomer {
  logo: IImage
  url: string
}
