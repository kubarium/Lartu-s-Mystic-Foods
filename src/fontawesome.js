import Vue from 'vue'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faQuestion, faPlay, faPause, faCartPlus} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

[faQuestion, faPlay, faPause, faCartPlus].forEach(icon => library.add(icon))

Vue.component('font-awesome-icon', FontAwesomeIcon)
