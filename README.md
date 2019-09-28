# usePhrases
Created with CodeSandbox
This react hook return a list of given array for making the UX not bored when waiting the responses.
# Install
$ npm install --save react-useinterval
# API
```javascript
import React from "react";
import usePhrases from "usePhrases";

function App() {
  const [loaded, set] = useState(false);
  
  const loading = usePhrases(arr);
  
  return <div className="App">{loaded ? loading : "data"}</div>;
}

const arr = [
  "They see me loading,They waiting",
  "Start your engines",
  "Reviving dead memes",
  "Looking for the power button",
  "Loading your digital hug"
];
//Those phrases credit by discord
```
For more phrases visit <a>https://gist.github.com/fourjr/f94fc112cef6da07fc274216d5755420</a>
