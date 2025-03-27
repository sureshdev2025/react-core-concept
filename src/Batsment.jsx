import { useState } from "react"

export default function Batsmen(){
    const [runs, setRuns] = useState(0);
    const [sixes, setSixes] = useState(0);
    const [four, setFour] = useState(0);
    const [single, setSingle] = useState(0);
    


    const handleDecrease = () => {
        // setRuns( prevState => prevState - 1);
        setRuns(runs - 1);
    }

    const handleSingle = () => {
        const updatedRuns = runs + 1;
        const updateSingle = single + 1;
        setSingle(updateSingle);
        setRuns(updatedRuns);
    }

    const handleFour = () => {
        const fourRuns = runs + 4;
        const updateFour = four + 1;
        setFour(updateFour);
        setRuns(fourRuns);
    }

    const handleSix = () => {
        const sixRuns = runs + 6;
        const updatedSixes = sixes + 1;
        setSixes(updatedSixes);
        setRuns(sixRuns);
    }

    const playerStyle = {
        border : '2px solid green',
        borderRadius : '20px',
    }
    return(
        <div style={playerStyle}>
            <h3>Player : Indian Batsmen</h3>
            <p><small>Six : {sixes}</small></p>
            <p><small>Four : {four}</small></p>
            <p><small>Single : {single}</small></p>
            {
                runs >= 50 && <p>Your score : 50</p>
            }
            {
                runs >= 100 && <p>Your score : 100</p>
            }
            <h1>Score : {runs}</h1>
            <button onClick={handleSingle}>Singles</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
            <button onClick={handleDecrease}>Decrease</button>
        </div>
    )
}