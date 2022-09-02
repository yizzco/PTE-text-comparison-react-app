import React from 'react'
import { TextField, Button } from '@mui/material';

interface Props{
    submittedText: string;
    setSubmittedText: React.Dispatch<React.SetStateAction<string>>;
    originalText: string;
    setMatchedWordIndexes: React.Dispatch<React.SetStateAction<number[]>>;
    setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
}
const InputText: React.FC<Props> = ({submittedText, setSubmittedText, originalText, setMatchedWordIndexes, setIsSubmitted}) => {  
    const formatString = (str: string) => {
        return str.toLowerCase().replace(/[^0-9a-zA-Z ]/g, "").split(" ").slice(0, 300);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>  {
        e.preventDefault();

        let indexes: number[] = [];

        const submittedArr = formatString(submittedText);
        //console.log(inputArr); // debug

        const originalArr = formatString(originalText);
        //console.log(comparedArr); // debug

        for (let i = 0; i < originalArr.length; i++) {
            const comparedWord = originalArr[i];
            // console.log("comparedWord: " + comparedWord); //debug

            for (let j = (i - 3) < 0 ? 0 : i - 3 ; (j < i+3 && j < submittedArr.length); j++) {
                const inputWord = submittedArr[j];
                // console.log("inputWord: " + inputWord); //debug

                if(inputWord == comparedWord){
                indexes.push(i);
                break;
                }
            }    
        } 
        setMatchedWordIndexes(indexes);
        setIsSubmitted(true);
      }
    return (
        <form onSubmit={handleSubmit} >
            <TextField
                id="outlined-multiline-static"
                label="Multiline"
                value={submittedText}
                onChange={(e) => setSubmittedText(e.target.value)}
                fullWidth
                multiline
                rows={10}
            />
            <Button variant="contained" type = "submit">Compare</Button>
      </form>
  )
}
export default InputText