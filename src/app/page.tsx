import styles from "@/styles/Home.module.scss";
import Image from "next/image";
import BatmanImage from "public/batman.png";
import JokerImage from "public/joker.png";
import HarleyImage from "public/harley.png";
import RobinImage from "public/robin.png";
import SeeMoreButton from "@/components/SeeMoreButton";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-2 h-screen items-center">
        <div className="items-center flex w-full h-full relative">
          <h1 className={styles.responsivetitle}>BATMAN</h1>
          <Image
            src={BatmanImage}
            className={styles.batmanimg}
            alt="Batman"
          ></Image>
        </div>
        <div>
          <p className={`text-start ${styles.responsivetext}`}>
            In the name of his murdered parents, Bruce Wayne wages eternal war
            on the criminals of Gotham City. He is vengeance. He is the night.
            He is Batman...
          </p>
          <div className="flex justify-center">
            <SeeMoreButton />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 bg-violet-700 h-screen items-center">
        <div>
          <p className={`text-end ${styles.responsivetext}`}>
            A homicidal artist and an agent of chaos, the Clown Prince of Crime
            is the embodiment of everything Batman fights against…and everything
            he fears.
          </p>
          <SeeMoreButton />
        </div>
        <div className="items-center flex w-full h-full relative">
          <h1 className={`${styles.responsivetitle} text-start left-2`}>
            JOKER
          </h1>
          <Image
            src={JokerImage}
            className={styles.jokerimg}
            alt="Joker"
          ></Image>
        </div>
      </div>
      <div className="grid grid-cols-2 bg-red-600 h-screen items-center">
        <div className="items-center flex w-full h-full relative">
          <h1 className={`${styles.responsivetitle} end-2`}>HARLEY</h1>
          <Image
            src={HarleyImage}
            className={styles.harleyimg}
            alt="Harley"
          ></Image>
        </div>
        <div>
          <p className={styles.responsivetext}>
            The multiverse would be a much less lively place without the hijinks
            and shenanigans of the former Dr. Harleen Quinzel, the one and only
            Clown Princess of Crime.
          </p>
          <SeeMoreButton />
        </div>
      </div>
      <div className="grid grid-cols-2 bg-yellow-400 h-screen items-center">
        <div>
          <p className={`text-end ${styles.responsivetext}`}>
            Every kid wants to be Batman, but do you have a lifetime of
            training? A billion-dollar fortune? The dream gets dashed pretty
            quickly. So OK, maybe you can’t be Batman… but that doesn’t mean you
            can’t be adopted by him.
          </p>
          <SeeMoreButton />
        </div>
        <div className="items-center flex w-full h-full relative">
          <h1 className={`${styles.responsivetitle} text-start`}>ROBIN</h1>
          <Image
            src={RobinImage}
            className={styles.robinimg}
            alt="Robin"
          ></Image>
        </div>
      </div>
    </>
  );
}
