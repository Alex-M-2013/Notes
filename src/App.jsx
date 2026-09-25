import "./App.css";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { Notes } from "./components/Notes";
import { GitHubLink } from "./components/GitHubLink";

export const App = () => {
    return (
        <>
            <ThemeSwitcher />

            <h1>Notes</h1>
            <Notes />

            <GitHubLink />
        </>
    );
};
