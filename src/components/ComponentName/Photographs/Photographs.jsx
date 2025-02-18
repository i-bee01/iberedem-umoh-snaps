import "./Photographs.scss";

const Photographs = ({photo}) =>{
    return(
        <div className="snaps">
            <div className="snaps__container">
                <img className="snaps__image" src={photo.photo} alt="Photo Description"/>
                <p className="snaps__photographer">{photo.photographer}</p>
            </div>
            <div className="snaps__tag-list">
                {photo.tags.map((tag, index)=>(
                 <p key={index} className= "snaps__tag">{tag}</p> 
                )
            )}
            </div>
        </div>
    )
}

export default Photographs;