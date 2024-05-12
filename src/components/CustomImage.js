import React from 'react'

export default function CustomImage(props) {
  return (
    <img
    src={props.src}
    alt={props.alt}
    className={props.className}
    style={props.style}
    />
  )
}
