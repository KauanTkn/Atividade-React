export default function ToolBar() {
    return (
        <PlayUpload
            onPlayMovie={()=>alert('Playing!')}
            onUploadImage={()=>alert('Uploading!')}
        />
    )
}

function PlayUpload({ onPlayMovie, onUploadImage }){
    return(
        <div className="Toolbar" onClick={()=>{
            alert('You clicked on the toolbar!');
        }}>
            <Button onClick={onPlayMovie}>
                Play Movie
            </Button>
            <Button onClick={onUploadImage}>
                Upload Image
            </Button>
        </div>
    );
}

function Button({ onClick, children }) {
    return(
        <button onClick={e=>{
            e.stopPropagation();
            onClick();
        }}>
            {children}
        </button>
    );
}