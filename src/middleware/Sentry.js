import * as Sentry from '@sentry/node'
import { sentry } from 'graphql-middleware-sentry'

Sentry.init({ dsn: 'https://8935fc13d0d047f69d54b04e6d7f4c42@sentry.io/1526675' })

const sentryMiddleware = sentry({
  sentryInstance: Sentry,
  withScope: (scope, error, ctx) => {
    console.log(error)
  },
  forwardErrors: true,
  reportError: res => false /* TODO: make this function */
})

export default sentryMiddleware
