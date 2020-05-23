import React from "react"
import Layout from "../components/layout"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

const A = styled.a`
  box-shadow: none;
`

const Projects = () => {
  return (
    <Layout>
      <h3>Professional Work & Personal Projects</h3>
      <main
        css={css`
          display: grid;
          grid-template-columns: 1fr 1fr;
          box-shadow: none;
          justify-content: space-between;
        `}
      >
        <section
          css={css`
            display: grid;
            grid-template-rows: 1fr 1fr;
          `}
        >
          <A
            target="_blank"
            href="https://www.churchofjesuschrist.org/media?lang=eng"
          >
            Gospel Media Library
          </A>
          2019 - Present
          <A
            target="_blank"
            href="http://www.justiceworks.com/defenderData_Overview.mp4"
          >
            defenderData App
          </A>{" "}
          2017 - 2019
        </section>
        <section
          css={css`
            display: grid;
            grid-template-rows: 1fr 1fr;
          `}
        >
          <A target="_blank" href="https://correct-name-of-church.netlify.app">
            React Quiz App
          </A>
          2020 - Present
          <A target="_blank" href="https://inspiration-blog.netlify.app">
            Inspiration Blog
          </A>
          2020 - Present
        </section>
      </main>
    </Layout>
  )
}

export default Projects
