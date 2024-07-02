export default function NavMenu({type, children, href}) {
    return <a className={type} href={href}>{children}</a>
}