import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import {ReadAloudTopic} from '../models/ReadAloudTopic'

interface Props{
    topics: ReadAloudTopic[];
    selectedTopicContent: string;
    setTopicContent: React.Dispatch<React.SetStateAction<string>>;
}

const Dropdown: React.FC<Props> = ({topics, selectedTopicContent,  setTopicContent}) => {
    return(
        <FormControl fullWidth>
        <InputLabel id="demo-select-small">Read Aloud Topic</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={selectedTopicContent}
          label="selectedTopicContent"
          onChange={(e) => setTopicContent(e.target.value)}
        >
            {
                topics.map((topic, index) => {
                    return(
                        <MenuItem key={index} value={topic.content}>{topic.id} {topic.title}</MenuItem>
                    )
                })
            }
        </Select>
      </FormControl>    
    );
}

export default Dropdown