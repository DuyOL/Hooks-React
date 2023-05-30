import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"
function Paragraph() {
    const context = useContext(ThemeContext)
    return (
        <p className={context.theme}>
            If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.
        </p>
    )
}
export default Paragraph
