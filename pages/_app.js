import App from 'next/app'
import { withTina } from 'tinacms'

export default withTina(App, {
  sidebar: {
    hidden: false,
    buttons: { save: 'Get Code' },
  },
})
