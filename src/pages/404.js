import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div className="container text-center my-5">
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... good job!</p>
    </div>

  </Layout>
)

export default NotFoundPage
