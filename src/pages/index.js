import React from "react"
import { Link } from "gatsby"
import NavBar from "../components/NavBar";
import '../styles/global.css'
import indexStyles from './index.module.css'
import Footer from "../components/Footer";

// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" />
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//       <Image />
//     </div>
//     <Link to="/page-2/">Go to page 2</Link>
//   </Layout>
// )

function IndexPage() {
  return (
    <div className={indexStyles.outer}>
      <NavBar />
      <div className={indexStyles.content}>
        <div className={indexStyles.container}>
          <h1 className={indexStyles.title}>Blake Lamb</h1>
          <p className={indexStyles.subtitle}>Full Stack Web Developer</p>
          <img className={indexStyles.img} src="f" />
        </div>
      </div>
      <Footer />

    </div>
  )
}

export default IndexPage
