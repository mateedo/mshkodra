import PFP from "../../public/pfp.png"
import Image from "next/image"
export default function About() {
    return (
        <div className="homeStyling">
            <Image src={PFP} alt="pfp" width="100" height="100"/>
            <h1>
                My name is Mateo Shkodra,
            </h1>

            {/* <h2>
                I am a student at the University of Waterloo entering my 3rd year this fall. I am studying Combinatorics & Optimization and Statistics, but who knows, maybe that is subject to change.
            </h2> */}

            <h2>
                I am a student entering my 3A term this fall at the University of Waterloo where I am double majoring in Combinatorics & Optimization and Statistcs.
            </h2>

            <h2 style={{fontWeight: "500"}}><br/>Fall 2024 Courseload:</h2>
            <ul>
                <li>CO 330 - Combinatorial Enumeration</li>
                <li>CO 342 - Introduction to Graph Theory</li>
                <li>STAT 333 - Stochastic Processes 1</li>
                <li>STAT 341 - Computational Statistics and Data Analysis</li>
                <li>MUSIC 223 - Music Studio</li>
            </ul>
            <h2>
                I love playing soccer and the piano, and recently I started reading a lot of literature. I support Chelsea FC, the pride of London. I played soccer competitively when I was a kid until high school, and now I just play for fun.
            </h2>

       
            <h2 style={{fontWeight: "500"}}><br/>Current Repertoire:</h2>
            <ul>
                <li className="flicker">Waltz in A-flat Major Op. 64, No. 3 - Chopin</li>
                <li>Prelude in C# Minor Op. 3, No. 2 - Rachmaninoff</li>
                <li>Waltz in C# Minor Op. 64, No. 2 - Chopin</li>
            </ul>

            <h2 style={{fontWeight: "500"}}><br/>Current Reading List:</h2>
            <ul>
                <li className="flicker">The Brothers Karamazov - Fyodor Dostoevsky</li>
                <li>Klara and the Sun - Kazuo Ishiguro</li>
                <li>When We Were Orphans - Kazuo Ishiguro</li>
            </ul>

            <br/>
        </div>


    )
}