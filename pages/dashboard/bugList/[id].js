import { AuthApi } from "../../../services";
export const getStaticPaths = async () => {
  const res = await AuthApi().getAllBugs();
  const paths = res?.map((x) => ({ params: { id: x._id.toString() } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await AuthApi().getAllBugs(`/${id}`);
  return {
    props: {
      bug: res,
    },
  };
};
export default function Details({ bug }) {
  return (
    <div>
      <h1>Details page</h1>
      <h3>{bug.title}</h3>
      <p>{bug.description}</p>
      <p>{bug.severity}</p>
      <p>{bug.priority}</p>
      <p>{bug.type}</p>
      <p>{bug.resolution}</p>
    </div>
  );
}
