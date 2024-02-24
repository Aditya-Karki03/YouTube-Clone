
const RestroCards=({imageURL,restroName='Karkis',address='RR Hill',rating='5.0',time='10 minutes'})=>(
    <div className='card'>
        <img src={imageURL} alt='Res logo' />
        <h2>{restroName}</h2>
        <h6>{address}</h6>
        <h6>{rating}</h6>
        <h6>{time}</h6>
    </div>
)
export default RestroCards;