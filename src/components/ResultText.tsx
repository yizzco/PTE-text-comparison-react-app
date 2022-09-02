import React from 'react';

interface Props{
    matchedWordIndexes: number[];
    originalText: string;
    isSubmitted: boolean;
}

interface Result{
  word: string;
  isValid: boolean;
}
const ResultText: React.FC<Props> = ({matchedWordIndexes, originalText, isSubmitted}) => {
  const originalArr = originalText.toLowerCase().replace(/[^0-9a-zA-Z ]/g, "").split(" ").slice(0, 300);

  const buildResult = () => {
    let result: Result[]= [];
    for (let i = 0; i < originalArr.length; i++) {
      if(matchedWordIndexes.includes(i))
      {
        result.push({word: originalArr[i], isValid: true})
      }else{
        result.push({word: originalArr[i], isValid: false})
      }      
    }
    return result;
  }

  const calculateCorrectRate = () => {
    return (matchedWordIndexes.length/originalArr.length*100).toFixed(2);
  }

  return (
      <div>
        <p>{
          isSubmitted ? buildResult().map((word, index)=>{
            return(
              <span key = {index} style={word.isValid?{color: "green"}:{color: "red"}} >{word.word} </span>
            )
          }):""
          }</p>
          <p>
          {isSubmitted ? calculateCorrectRate()+"%" : ""}</p>
          

        
           
      </div>
    )
}

export default ResultText