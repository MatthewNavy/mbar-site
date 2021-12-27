import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Todo from "../components/todo"

const Resume = () => (
  <Layout>
    <Seo title="Resume" />
      <section className="py-5 container">
        <Todo></Todo>
      </section>
  </Layout>
)

export default Resume
