import Link from "next/link"

const NavbarItem = ({name , url}) => {
    return(
        <Link href={url}>{name}</Link>
    )
}

export default NavbarItem