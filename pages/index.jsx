/**
 * Homepage React Functional Component
 * ===============================================================
 * @param {object?} props - Next JS server props: if available, it will contain the initial props passed by the server
 * @returns {import("react").ReactComponentElement}
 */
export default function Home(props) {
    return (
        <div className="p-20">
            <h1>Welcome to Medium Clone</h1>
            <span>Let's Begin. The journey starts here. Like if you want me to continue and finish the project.</span>
        </div>
    );
}
