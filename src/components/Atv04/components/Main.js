export default function Button(){
    function handleClick(){
        alert('You cliked me!');
    }

    return(
        <button onClick={handleClick}>Click me</button>
    );
}


function AlertButton({message, children}) {
    return(
        <button on onClick={() => alert(message)}>{children}</button>
    );
}

export default function Toolbar(){
    return(
        <div>
            <AlertButton message="Playing!">Play movie</AlertButton>
            <AlertButton message="Uploading">Upload Image</AlertButton>
        </div>
    );
}
