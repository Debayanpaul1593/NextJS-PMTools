import headerStyles from "../styles/Header.module.css";
export default function Header() {
  let x = 2;
  return (
    <div>
      <h1 className="title">
        <span>WebDev</span> News
      </h1>
      {/* <style jsx>
        {`
          .title {
            color: ${x > 3 ? 'red' : 'blue'};
          }
        `}
      </style> */}
    </div>
  );
}
