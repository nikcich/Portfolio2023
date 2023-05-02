import Blob from "./Blob";

function FloatingBlobs(options) {
    const { mouse } = options;
    return (
        <>
            <Blob start={[0, 0, -3]} startDirs={["DOWN", "LEFT"]} color="red" mouse={mouse}/>

            <Blob start={[-6, -1, -4]}  startDirs={["UP", "RIGHT"]} color="blue" mouse={mouse}/>

            <Blob start={[8, 2, -5]} startDirs={["DOWN", "LEFT"]} color="green" mouse={mouse}/>

            <Blob start={[3, -3, -2]} startDirs={["DOWN", "LEFT"]} color="purple" mouse={mouse}/>

            <Blob start={[-10, 3, -6]} startDirs={["UP", "RIGHT"]} color="pink" mouse={mouse}/>
        </>
    );
}

export default FloatingBlobs;