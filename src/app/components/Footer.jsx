import SocialIcons from "./SocialIcons";


export default function Footer() {
  return (
   <footer className="bg-[gold] flex md:flex-row items-center justify-between h-[20vh] px-10">
    <p>&copy; univelcity {new Date().getFullYear()}</p>

    <SocialIcons />
    


   </footer>
  )
}
