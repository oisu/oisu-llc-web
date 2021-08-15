// tslint:disable:no-console
import Cookies from 'js-cookie'
import * as React from 'react'
import { ChildDataProps } from 'react-apollo'
import { Helmet } from 'react-helmet'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { compose } from 'recompose'
import 'semantic-ui-css/semantic.min.css'
import { getLang } from '../common/util'
import { withAllData } from '../enhancers/graphql'
import { renderWhileLoading } from '../enhancers/navigation'
import Footer from './Footer'
import Loading from './Loading'
import MenuBar from './MenuBar'
import ScrollToTop from './ScrollToTop'
import TeamPage from './TeamPage'
import TopPage from './TopPage'
import WorkPage from './WorkPage'

interface State {
  lang: string
}

class App extends React.Component<ChildDataProps<IAllDataResponse>, State> {
  constructor (props: ChildDataProps<IAllDataResponse>) {
    super(props)
    // TODO: Turn this React.Context
    const lang = Cookies.get('lang') || 'ja'
    this.state = {
      lang,
    }
  }
  public render () {
    const {
      data: {
        businesses,
        certificates,
        educations,
        experiences,
        mes,
        works,
        sites,
        socials,
        customers,
      },
    } = this.props

    const setLang = (langKey: string) => {
      const lang = getLang(langKey)
      Cookies.set('lang', langKey)
      this.setState({
        lang: lang.key,
      })
    }
    const teamProps = {
      certificates,
      educations,
      experiences,
      lang: this.state.lang,
      mes,
      sites,
      socials,
    }
    const workProps = {
      lang: this.state.lang,
      works,
    }
    const topProps = {
      businesses,
      customers,
      sites,
      socials,
    }
    const footerProps = {
      lang: this.state.lang,
      setLang,
      sites,
    }

    const renderTop = () => <TopPage {...topProps} />
    const renderTeam = () => <TeamPage {...teamProps} />
    const renderWork = () => <WorkPage {...workProps} />

    const site = sites[0]
    const me = mes[0]

    return (
      <Router>
        <ScrollToTop>
          <Helmet>
            <title>{site.name}</title>
            <meta charSet='utf-8' />
            <meta name='title' content={site.name} />
            <meta name='description' content={site.description} />
            <meta name='author' content={me.name} />
            <meta name='keywords' content={site.keyword} />
            <meta name='url' content={site.url} />

            <meta itemProp='name' content={site.name} />
            <meta itemProp='description' content={site.description} />
            <meta itemProp='image' content={site.logo.url} />

            <meta name='og:url' content={site.url} />
            <meta name='og:type' content='profile' />
            <meta name='og:title' content={site.name} />
            <meta name='og:description' content={site.description} />
            <meta name='og:image' content={site.logo.url} />

            <meta name='twitter:card' content='summary_large_image' />
            <meta name='twitter:title' content={site.name} />
            <meta name='twitter:description' content={site.description} />
            <meta name='twitter:image' content={site.logo.url} />
          </Helmet>

          <MenuBar sites={sites} />

          <React.Fragment>
            <Route exact path='/' render={renderTop} />
            <Route exact path='/team' render={renderTeam} />
            <Route exact path='/work' render={renderWork} />
          </React.Fragment>

          <Footer {...footerProps} />
        </ScrollToTop>
      </Router>
    )
  }
}

export default compose(withAllData(), renderWhileLoading(Loading))(App)
