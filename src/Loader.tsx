import "./Loader.css";
interface props {
    className?: string;
}
function Loader({ className }: props) {
    return (
        <>
            <div className={className ? className + " app-loader" : " app-loader"}></div>
        </>
    )
}

export default Loader