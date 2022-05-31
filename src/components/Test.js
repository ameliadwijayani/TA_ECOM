
import React from 'react'
import {withPrefix} from 'gatsby'
import { Helmet } from 'react-helmet'
import 'bootstrap/dist/js/bootstrap.min.js'

export default function Test() {
  return (
    <Helmet>
      <script type="module" src="https://cdn.jsdelivr.net/npm/@justinribeiro/lite-youtube@1.3.1/lite-youtube.js"></script>
    </Helmet>
  )
}
