import React from "react"; // react in scope
import coverpage from "./../Images/coverpage.jpg"
import story1 from "./../Images/story1.jpg"
import story2 from "./../Images/story2.jpg"
import story5 from "./../Images/story5.jpg"
import story4 from "./../Images/story4.jpg"
import { Container, Link } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";

const LandingPage = () => {
const mystyle1 = {
    height: "2600px",
}

const mystyle2 = {
width: "35%", 
float:"left",
 height:"300px", 
 margin: "10px",
}
const mystyle3 = {
    color: "white",
    backgroundColor: "#dc3545",
    paddingTop: "3em",
    position: "relative",
    bottom: "0",
    width: "100%",
  }
       return ( 
            <div style={mystyle1}>
        <img src={coverpage} style ={{width: "100%", fontFamily: "Arial"}}  alt="coverpage" />
        <div>
          <h1> 
              Top Stories
          </h1>
        </div>
        <div>
        <img src={story1} style ={mystyle2}  alt="story1" />
        <h1 style = {{marginTop: "50px"}}>Story: </h1>
        <p style ={{paddingLeft: "400px",  fontSize: "20px", textAlign:"justify"}}> 
        Once upon a time, a farmer had a goose that laid one golden egg every day. The egg provided enough money for the farmer and his wife to support their daily needs. The farmer and his wife continued to be happy for a long time.

But, one day, the farmer thought to himself, “Why should we take just one egg a day? Why can’t we take them all at once and make a lot of money?” The farmer told his wife his idea, and she foolishly agreed.

Then, the next day, as the goose laid its golden egg, the farmer was quick with a sharp knife. He killed the goose and cut its stomach open, in the hopes of finding all its golden eggs. But, as he opened the stomach, the only thing he found was guts and blood.

The farmer quickly realized his foolish mistake and proceeded to cry over his lost resource. As the days went on, the farmer and his wife became poorer and poorer. How jinxed and how foolish they were.
        </p>
        <h2 style = {{marginTop: "-10px"}}>Name: </h2>
        <p style ={{fontSize: "20px"}}>All is not lost</p> 
        </div>
        <div>
        <img src={story5} style ={mystyle2}  alt="story5" />
        <h1 style = {{marginTop: "50px"}}>Story: </h1>
        <p style ={{paddingLeft: "400px",  fontSize: "20px", textAlign:"justify"}}> 
        Once upon a time, a farmer had a goose that laid one golden egg every day. The egg provided enough money for the farmer and his wife to support their daily needs. The farmer and his wife continued to be happy for a long time.

But, one day, the farmer thought to himself, “Why should we take just one egg a day? Why can’t we take them all at once and make a lot of money?” The farmer told his wife his idea, and she foolishly agreed.

Then, the next day, as the goose laid its golden egg, the farmer was quick with a sharp knife. He killed the goose and cut its stomach open, in the hopes of finding all its golden eggs. But, as he opened the stomach, the only thing he found was guts and blood.

The farmer quickly realized his foolish mistake and proceeded to cry over his lost resource. As the days went on, the farmer and his wife became poorer and poorer. How jinxed and how foolish they were.
        </p>
        <h2 style = {{marginTop: "-10px"}}>Name: </h2>
        <p style ={{fontSize: "20px"}}>All is not lost</p> 
        </div>
        <div>
        <img src={story2} style ={mystyle2}  alt="story2" />
        <h1 style = {{marginTop: "50px"}}>Story: </h1>
        <p style ={{paddingLeft: "400px",  fontSize: "20px", textAlign:"justify"}}> 
        Once upon a time, a farmer had a goose that laid one golden egg every day. The egg provided enough money for the farmer and his wife to support their daily needs. The farmer and his wife continued to be happy for a long time.

But, one day, the farmer thought to himself, “Why should we take just one egg a day? Why can’t we take them all at once and make a lot of money?” The farmer told his wife his idea, and she foolishly agreed.

Then, the next day, as the goose laid its golden egg, the farmer was quick with a sharp knife. He killed the goose and cut its stomach open, in the hopes of finding all its golden eggs. But, as he opened the stomach, the only thing he found was guts and blood.

The farmer quickly realized his foolish mistake and proceeded to cry over his lost resource. As the days went on, the farmer and his wife became poorer and poorer. How jinxed and how foolish they were.
        </p>
        <h2 style = {{marginTop: "-10px"}}>Name: </h2>
        <p style ={{fontSize: "20px"}}>All is not lost</p> 
        </div>
        <div>
        <img src={story4} style ={mystyle2}  alt="story4" />
        <h1 style = {{marginTop: "50px"}}>Story: </h1>
        <p style ={{paddingLeft: "400px",  fontSize: "20px", textAlign:"justify"}}> 
        Once upon a time, a farmer had a goose that laid one golden egg every day. The egg provided enough money for the farmer and his wife to support their daily needs. The farmer and his wife continued to be happy for a long time.

But, one day, the farmer thought to himself, “Why should we take just one egg a day? Why can’t we take them all at once and make a lot of money?” The farmer told his wife his idea, and she foolishly agreed.

Then, the next day, as the goose laid its golden egg, the farmer was quick with a sharp knife. He killed the goose and cut its stomach open, in the hopes of finding all its golden eggs. But, as he opened the stomach, the only thing he found was guts and blood.

The farmer quickly realized his foolish mistake and proceeded to cry over his lost resource. As the days went on, the farmer and his wife became poorer and poorer. How jinxed and how foolish they were.
        </p>
        <h2 style = {{marginTop: "-10px"}}>Name: </h2>
        <p style ={{fontSize: "20px"}}>All is not lost</p> 
        </div>

     
    
      </div>
     );
}
export default LandingPage;