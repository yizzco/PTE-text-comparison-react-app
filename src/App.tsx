import React, { useEffect } from 'react';
import './App.css';
import ReadAloudData from './RA.json';
import {ReadAloudTopic} from './models/ReadAloudTopic'
import Dropdown from './components/Dropdown';
import ContentText from './components/ContentText';
import InputText from './components/InputText';
import ResultText from './components/ResultText';


const App: React.FC = () => {
  // read data from json file into objects
  const readAloudTopics: ReadAloudTopic[] = ReadAloudData.map(data => data); // read data from json file into objects
  // console.log(readAloudTopics); //debug

  const [selectedTopicContent, setTopicContent] = React.useState<string>("");
  const [submittedText, setSubmittedText] = React.useState<string>("");
  const [matchedWordIndexes, setMatchedWordIndexes] = React.useState<number[]>([]);
  const [isSubmitted, setIsSubmitted] = React.useState<boolean>(false);

  useEffect(()=>{
    if(submittedText=="") setIsSubmitted(false);
  });

  return (
    <div className="App">
      <h1>PTE Text Comparison App</h1>
      <Dropdown 
        topics={readAloudTopics} 
        selectedTopicContent={selectedTopicContent} 
        setTopicContent={setTopicContent} />
      <br />
      <br />
      <ContentText selectedContent = {selectedTopicContent} />
      <br />
      <br />
      <InputText 
        submittedText = {submittedText} 
        setSubmittedText = {setSubmittedText}
        originalText = {selectedTopicContent}
        setMatchedWordIndexes = {setMatchedWordIndexes}
        setIsSubmitted = {setIsSubmitted}
      />
      <br />
      <br />
      <ResultText 
        matchedWordIndexes = {matchedWordIndexes} 
        originalText = {selectedTopicContent}
        isSubmitted = {isSubmitted}
      />
    </div>
  );
}

export default App;
