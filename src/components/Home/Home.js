import { Link } from 'react-router-dom';
import { BlogItem } from '../Blogs/BlogItem';
import { useBlogContext } from '../../contexts/blogContext';

import "./Home.css";


export const Home = () => {

    const { blogs, isAuthenticated, userName } = useBlogContext();

    return (
        <>
            <section className="home">
                <div className="home-page">
                    {!isAuthenticated ? (
                        <>
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
                        </>
                    ) :
                        <>
                            <h2>Welcome, {userName}!</h2>
                            <h2>This is the Manchester United Blog!</h2>
                            <p>
                                Your best source for quality Manchester United news, rumors,
                                analysis from the fan perspective.
                            </p>
                            <p>
                                Create articles, interact with other fans, stay informed and become
                                popular.
                            </p>
                            <p>
                                Start now!
                            </p>
                            <Link to="/blogs">VIEW ALL BLOGS</Link>
                            <Link to="/create">CREATE NEW BLOG</Link>
                        </>
                    }

                    <img src="images/Marcus Rashford.png" alt="rashford" />
                </div>

                <aside>
                    <iframe title="table" className="league-table" frameBorder="0" scrolling="no" width="320" height="560"
                        src="https://www.fctables.com/england/premier-league/iframe/?type=table&lang_id=2&country=67&template=10&team=189577&timezone=Europe/Sofia&time=24&po=1&ma=1&wi=0&dr=0&los=0&gf=0&ga=0&gd=1&pts=1&ng=0&form=0&width=320&height=560&font=Helvetica&fs=14&lh=22&bg=FFFFFF&fc=000000&logo=1&tlink=0&ths=1&thb=1&thba=FFFFFF&thc=000000&bc=ffffff&hob=faedef&hobc=e71d35&lc=333333&sh=1&hfb=1&hbc=e71d35&hfc=FFFFFF"></iframe>

                    <iframe title="next-game" className="next-game" frameBorder="0" scrolling="no" width="320" height="180"
                        src="https://www.fctables.com/teams/manchester-united-189577/iframe/?type=team-next-match&lang_id=2&country=67&template=10&team=189577&timezone=Europe/Sofia&time=24&width=320&height=180&font=Arial&fs=12&lh=22&bg=FFFFFF&fc=000000&logo=1&tlink=0&scfs=22&scfc=333333&scb=1&sclg=1&teamls=80&sh=1&hfb=1&hbc=e71d35&hfc=FFFFFF"></iframe>
                </aside>
            </section>

            <section className="projcard-container">
                <h1>Latest blogs:</h1>
                {blogs.slice(-3).map(x => <BlogItem key={x._id} {...x} />).reverse()}

                {blogs.length === 0 &&
                    <h3>No blog posts yet...</h3>}
            </section>
        </>




    );
}