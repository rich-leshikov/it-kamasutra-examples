import React from "react";

type PageTitlePropsType = {
  title: string
}

function PageTitleMain(props: PageTitlePropsType) {
  return (
    <h1>{props.title}</h1>
  )
}

export const PageTitle = React.memo(PageTitleMain)