import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Todo from "../components/todo"

const Poetry = () => (
  <Layout>
    <Seo title="Poetry" />
      <section className="py-5 container">
        <Todo></Todo>
      </section>
  </Layout>
)

export default Poetry
