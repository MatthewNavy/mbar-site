import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Todo from "../components/todo"

const Books = () => (
  <Layout>
    <Seo title="Books" />
      <section className="py-5 container">
        <Todo></Todo>
      </section>
  </Layout>
)

export default Books
