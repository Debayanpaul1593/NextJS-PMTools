import Head from "next/head";
import Link from "next/link";
import Nav from "../../components/Nav";
import dashboardStyles from "../../styles/Dashboard.module.css";
import layoutStyles from "../../styles/Layout.module.css";
const headerItems = [
  {
    k: "My Tasks",
    v: 16,
    link: "/dashboard/taskList",
  },
  {
    k: "Bugs",
    v: 17,
    link: "/dashboard/bugList",
  },
  {
    k: "Stories",
    v: 1,
    link: "/dashboard/taskList",
  },
  {
    k: "Sprints",
    v: 34,
    link: "/dashboard/taskList",
  },
  {
    k: "Projects",
    v: 3,
    link: "/dashboard/taskList",
  },
];

/**
 * three methods to retrieve data
 * 1. getStaticProps - get the data at build time
 * 2. getServerSideProps - get the data on every request
 * 3. getStaticPaths - dynamically genenrate paths based on the data we are fetching
 */

// export function getServerSideProps() {
//   let token = null;
//   if (!token) {
//     return {
//       redirect: {
//         destination: "/signin",
//         permanent: false,
//       },
//     };
//   }
// }

export async function getStaticProps() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=6"
  );
  const articles = await res.json();
  return {
    props: {
      articles,
    },
  };
}

export default function dashboard({ articles }) {
  console.log(articles);
  return (
    <div>
      <Nav />
      <div>
        <head>
          <Head>
            <title>Dashboard</title>
          </Head>
        </head>
        <div className={dashboardStyles.container}>
          <div className={dashboardStyles.leftCol}>
            <div className={dashboardStyles.cardContainer}>
              <div style={{ flexDirection: "row", display: "flex" }}>
                <div style={{ flex: 2, backgrounColor: "green" }}>
                  <p>Good morning</p>
                  <div className={dashboardStyles.topContainer}>
                    <ol>
                      <li>
                        <a>Create a user</a>
                      </li>
                      <li>
                        <a>Create a project</a>
                      </li>
                      <li>
                        <a>Create a story</a>
                      </li>
                      <Link href="/dashboard/createTask">
                        <a>Create a task</a>
                      </Link>
                    </ol>
                  </div>
                </div>
                <div className={dashboardStyles.headerContainer}>
                  {headerItems.map(({ k, v, link }, index) => (
                    <div
                      className={dashboardStyles.headerItem}
                      key={index.toString()}
                    >
                      <p>{k}</p>
                      <Link href={link}>
                        <a>
                          <h1>{v}</h1>
                        </a>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className={dashboardStyles.rightCol}>
            <div className={dashboardStyles.cardContainer}>
              <a href="/">There</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
