import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaSquareInstagram } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { MdAddCall } from "react-icons/md";
import Link from "next/link";

export default function SocialIcons() {
  return (
    <aside className="flex gap-4 mr-5">

        <Link href="https://www.linkedin.com/login">
        <BsLinkedin />
        </Link>
        

        <Link href="https://github.com/login">
        <BsGithub />
        </Link>


        <Link href="https://www.instagram.com/">
        <FaSquareInstagram />
        </Link>

        <Link href="https://mail.google.com/mail/u/0/#inbox">
        <BiLogoGmail />
        </Link>

        <Link href='tel:+2348129376469'>
        <MdAddCall />
        </Link>

    </aside>
  )
}
