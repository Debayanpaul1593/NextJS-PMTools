import styles from "../styles/Layout.module.css";
import Nav from "./Nav";
import Header from "./Header";
export default function Layout({ children }) {
  return (
    <>
      <div>
        <main>{children}</main>
      </div>
    </>
  );
}
