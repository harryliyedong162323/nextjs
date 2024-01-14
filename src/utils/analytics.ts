import ReactGA from 'react-ga4'

export const initGA = () => {
  console.log('GA init')
  ReactGA.initialize('G-2HKP8KF0FX')
}

export const logPageView = (pageName: string) => {
  console.log(`Logging pageview for ${pageName}`)
  ReactGA.set({ page: pageName })
  ReactGA.send({ hitType: 'pageview', page: pageName })
}

export const logEvent = (category = '', action = '') => {
  console.log(`Logging button for category: ${category} && action: ${action}`)
  if (category && action) {
    // ReactGA.event({ category, action })
    ReactGA.event(`Click_${category}_${action}`)
  }
}

export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.gtag('event', 'exception', {
      description,
      fatal, // set to true if the error is fatal
    })
  }
}