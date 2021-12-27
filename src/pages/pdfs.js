
import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const PDFs = () => (
    <Layout>
      <Seo title="PDFs" />
      <section className="py-5 container">
        <div class="ratio ratio-1x1">
        <object data="pdf/resume.pdf" type="application/pdf">
              {/* <embed src="pdf/resume.pdf" type="application/pdf"/> */}
            </object>        </div>
      </section>
    </Layout>
)

export default PDFs
