import App from 'next/app'
import { withTina } from 'tinacms'

export default withTina(App, {
  sidebar: {
    buttons: { save: 'Get Code' },
  },
})
