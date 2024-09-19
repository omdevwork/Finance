import Image from "next/image";
import Link from "next/link";

export const HeaderLogo = () => {
    return (
        <Link href={"/"}>
            <div className="hidden lg:flex items-center">
                <Image
                    src={"/images/logo.svg"}
                    alt="logo"
                    height={50}
                    width={50}
                />
                <p className="font-semibold text-white text-2xl ml-2.5">
                    Finance
                </p>
            </div>
        </Link>
    )
}