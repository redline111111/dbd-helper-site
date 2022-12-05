import { Link } from 'react-router-dom';

export const PerksItem = ({
    id,
    title, 
    character, 
    user, 
    perks, 
    viewsCount, 
    description }) => {

    console.log(character);
    return (
        <>
            <div className="wrapper">
                <div className="perk-card">
                    <Link to={`/FullPost/${id}`}>
                        <img className="perk-card__image" src={`http://localhost:80/uploads/${character}.png`} alt="trapper" />
                    </Link>
                    <div className="perk-card__unit-name">{character}</div>
                    <div className="perk-card__unit-description">
                        {description}
                    </div>
                    
                    <div className="perk-card__unit-stats clearfix">
                        
                        <div className="one-third">
                            <img src={`http://localhost:80/uploads/perks/${perks[0]}.png`} alt={character} />
                        </div>

                        <div className="one-third">
                            <img src={`http://localhost:80/uploads/perks/${perks[1]}.png`} alt={character} />
                        </div>

                        <div className="one-third">
                            <img src={`http://localhost:80/uploads/perks/${perks[2]}.png`} alt={character} />
                        </div>

                        <div className="one-third no-border">
                            <img src={`http://localhost:80/uploads/perks/${perks[3]}.png`} alt={character} />
                        </div>
                    </div>
                </div> 
            </div>
        </>
        
    );
}

