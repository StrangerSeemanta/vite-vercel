import "./scss/ProjectTexture.css"
interface Props {
    transform: string;
}
function ProjectTexture({ transform }: Props) {

    return (
        <div className='texture' style={{ transform: `${transform}` }}>
            p
        </div>
    )
}

export default ProjectTexture