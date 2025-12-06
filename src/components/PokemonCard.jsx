export default function PokemonCard({pokemon}){
    return (
        <>
        <div style={{
            backgroundColor: 'white',
            borderRadius: '15px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)', 
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            transition: 'transform 0.2s',
            border: '1px solid #eee'
        }}>
        
        <img src={pokemon.imgSrc} height={150} width={150}/>
        <label style={{marginRight:5,
        }} >{pokemon.name}</label>
        <label style={{marginRight:5}} >{pokemon.height}</label>
        <label style={{marginRight:5}} >{pokemon.weight}</label>
        </div>
        </>
    )
}