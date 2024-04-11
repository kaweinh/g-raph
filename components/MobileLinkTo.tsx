import Link from "next/link"

interface Props {
    children: JSX.Element
    width?: "fit-content" | "100%",
    useAHref: boolean,
    linkHref: string,
    aHref: string
}

const MobileLinkTo = ( { children, width = "fit-content", useAHref, linkHref, aHref }: Props ) => {
    return (
        <div>
            { !useAHref ?(
                <Link href={ linkHref } >
                    { children }
                </Link>
            ) : (
                <a href={ aHref} >
                    { children }
                </a>
            )}
        </div>
    )
}

export default MobileLinkTo