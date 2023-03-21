import  { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <section className="home">
            <div className="home-page">
                <h2>Welcome to Manchester United Blog</h2>
                <p>
                    Your best source for quality Manchester United news, rumors,
                    analysis from the fan perspective.
                </p>
                <p>
                    Create articles, interact with other fans, stay informed and become
                    popular.
                </p>
                <p>Create an account and start writing articles</p>
                <Link to="/register">CREATE AN ACCOUNT</Link>
                <Link to="/login">LOGIN</Link>
                <img src="images/Marcus Rashford.png" alt="rashford" />
            </div>

            <aside>
                <iframe title="table" className="league-table" frameBorder="0" scrolling="no" width="320" height="560"
                    src="https://www.fctables.com/england/premier-league/iframe/?type=table&lang_id=2&country=67&template=10&team=189577&timezone=Europe/Sofia&time=24&po=1&ma=1&wi=0&dr=0&los=0&gf=0&ga=0&gd=1&pts=1&ng=0&form=0&width=320&height=560&font=Helvetica&fs=14&lh=22&bg=FFFFFF&fc=000000&logo=1&tlink=0&ths=1&thb=1&thba=FFFFFF&thc=000000&bc=ffffff&hob=faedef&hobc=e71d35&lc=333333&sh=1&hfb=1&hbc=e71d35&hfc=FFFFFF"></iframe>

                <iframe title="next-game"  className="next-game" frameBorder="0" scrolling="no" width="320" height="180"
                    src="https://www.fctables.com/teams/manchester-united-189577/iframe/?type=team-next-match&lang_id=2&country=67&template=10&team=189577&timezone=Europe/Sofia&time=24&width=320&height=180&font=Arial&fs=12&lh=22&bg=FFFFFF&fc=000000&logo=1&tlink=0&scfs=22&scfc=333333&scb=1&sclg=1&teamls=80&sh=1&hfb=1&hbc=e71d35&hfc=FFFFFF"></iframe>
            </aside>
        </section>
    );
}