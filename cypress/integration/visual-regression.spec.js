import _ from 'lodash'
import sources from '../../docs/src/exampleSources.json'

describe('Visual Regression Tests', () => {
  Object.keys(sources).forEach((source) => {
    it(source, () => {
      const path = _.kebabCase(source.split('/').slice(-1))

      cy.visit(`http://localhost:3000/maximize/${path}`)
        .eyesOpen({
          appName: 'Semantic UI React Docs',
          testName: source,
          browser: [
            {
              name: 'chrome',
              width: 800,
              height: 600,
            },
            {
              name: 'firefox',
              width: 800,
              height: 600,
            },
          ],
          showLogs: true,
        })
        .eyesCheckWindow({
          sizeMode: 'selector',
          selector: '#root > *:first-child',
        })
        .eyesClose()
    })
  })
})
