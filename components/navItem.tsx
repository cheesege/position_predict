import Link from "next/link"

const NavbarItem = ({name , url,className}) => {
    return(
        <Link href={url} className={className}>{name}</Link>
    )
}

export default NavbarItem