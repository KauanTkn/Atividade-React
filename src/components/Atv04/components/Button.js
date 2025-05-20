function Button({onSmash, children}){
    return(
        <button onclick={onSmash}>
            {children}
        </button>
    );
}
export default function App(){
    return(
        <div>
            <button onSmash={()=>alert('Playing!')}>Play Movie</button>
            <button onSmash={()=>alert('Uploading!')}>Upload Image</button>
        </div>
    );
}