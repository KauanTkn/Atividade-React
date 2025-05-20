function Button({onClick, children}){
    return(
        <button onClick={onClick}>{children}</button>
    );
}
function PlayButton({movieName}){
    function handlePlayClick(){
        alert('Playing ${movieName}!')
    }
    return(
        <button onClick={handPlayClick}> Play "movieName"</button>
    );
}
function UploadButton(){
    return(
        <div>
            <PlayButton movie name="Kiki's Delivery Service"/>
            <UploadButton/>
        </div>
    );
}