import * as React from "react"
import Layout from "../components/layout"

// markup
const IndexPage = () => {
  return (
    <Layout title="Home">
      <main>
        <div className="intro">
          <h1>Jacqi and Noah are getting hitched</h1>
          <p>June 4, 2022</p>
          <p>The Bindery in McMinnville, Oregon</p>
        </div>
      </main>  
    </Layout>
  )
}

export default IndexPage
