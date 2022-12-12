import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <Link href="/">
        <div className="z-20 cursor-pointer">
          <Image
            alt="apple-logo.png"
            src="http://rb.gy/vsvv2o"
            width="20"
            height="20"
          />
        </div>
      </Link>
    </header>
  );
};
