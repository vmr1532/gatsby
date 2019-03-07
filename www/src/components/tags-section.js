import React from "react"
import { Link } from "gatsby"
import TagsIcon from "react-icons/lib/ti/tags"

import Button from "./button"
import { rhythm, scale } from "../utils/typography"
import presets from "../utils/presets"
const _ = require(`lodash`)

const TagsSection = ({ tags }) => {
  if (!tags) return null
  const tagLinks = tags.map((tag, i) => {
    const divider = i < tags.length - 1 && <span>{`, `}</span>
    return (
      <span key={tag}>
        <Link to={`/blog/tags/${_.kebabCase(tag.toLowerCase())}`}>{tag}</Link>
        {divider}
      </span>
    )
  })
  return (
    <div
      css={{
        display: `flex`,
        flexFlow: `row wrap`,
        justifyContent: `space-between`,
        alignItems: `baseline`,
      }}
    >
      <em
        css={{
          ...scale(-1 / 5),
          display: `block`,
          flexBasis: `60%`,
          flexGrow: 1,
          fontStyle: `normal`,
          marginBottom: rhythm(presets.space[5]),
          marginRight: rhythm(2),
          marginTop: rhythm(3),
        }}
      >
        Tagged with {tagLinks}
      </em>
      <Button
        css={{ flexShrink: 0 }}
        tiny
        key="blog-post-view-all-tags-button"
        to="/blog/tags"
      >
        View All Tags <TagsIcon />
      </Button>
    </div>
  )
}

export default TagsSection
