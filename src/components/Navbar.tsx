import Link from "next/link";
import styles from "@/styles/Navbar.module.scss";

function Navbar() {
  return (
    <nav>
      <div className="w-screen flex z-20">
        <div className={styles.navbar}>
          <div className="text-2xl">
            <Link className={styles.navlinktext} href="/">
              experiment01
            </Link>
          </div>
          <div className="text-2xl">
            <Link className={styles.navlinktext} href="/gotham">
              Gotham
            </Link>
            <Link className={styles.navlinktext} href="/gallery">
              Gallery
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
