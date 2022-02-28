####Pre rendering

by default NextJS pre-renders every page which means it generates HTML for each page in advance

pre-redering results in better performance and SEO

each generated HTML page is associated with minimal JS code necessary for that
page

#### Pre-rendering process

Initial load(pre-rendered HTML is displayed) -------Hydration------> React
components are loaded and the application becomes interactive

without prerendering the components are loaded only after hydration

#### There are 2 forms of pre-rendering

1. Static Generation - generates the HTML at build time and is reused on every
   request
2. Server-side rendering - generates the HTML on every request


using static generation whenever possible is recommended

in case page shows frequently updated data and is different on every request
then consider using server side rendering

#### getStaticProps

this runs at build time in production, one can fetch external data and send it
as props to the page

