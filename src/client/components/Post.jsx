import "./components.css";

export const Post = ({
    id,
    title, 
    character, 
    user, 
    perks, 
    viewsCount, 
    description,
 }) => {
    console.log(perks);
    return (
        <main className="post">
            <div className="post__body">
                <div className="post__block">
                    <div className="post-card">
                        <img className="post-card__image" src={`http://localhost:4444/uploads/${character}.png`} alt="trapper" />
                        <div className="post-card__character-name">{character}</div>
                        <div className="post-card__unit-description">{description}</div>
                    </div>
                </div>
                <div className="post__block">
                    <div className="post-description">
                        <div className="post-description__profile">Redline11111</div>
                        <div className="post-description__title">{title}</div>
                        <div className="post-description__description">{description}</div>
                    </div>
                </div>
                <div className="post__block">
                    <div className="post-perks">
                        <div className="post-perks__icons">
                            {perks.map((item, index) => {
                                return <img key={index} src={`http://localhost:4444/uploads/perks/${item}.png`} alt={character} />
                            })}
                        </div>
                        <div className="post-perks__info">
                            <div className="post-perks__title">Название перка</div>
                            <div className="post-perks__desc">Описание перка</div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};