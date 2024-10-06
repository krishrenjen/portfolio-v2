interface Props{
    title: string,
    href: string
    newTab?: boolean;
}

export default function NavItem(props:Props){
    return(
        <a href={props.href} target={props.newTab ? "_blank" : ""} className={"font-normal text-lg  md:hover:bg-transparent rounded-md px-4 md:px-0 hover:bg-light-dark-gray md:hover:text-slate-300"}>
            {props.title}
        </a>
    )
}