import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Unicons from "@iconscout/react-unicons";
import "../base/practice.css";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/webpack-resolver";
import axios from 'axios';


const Practice = () => {
    const [code, setCode] = useState(''); // State to store the code
    const [language, setLanguage] = useState('javascript'); // Default language
    const [output, setOutput] = useState('');
    const [isLoading, setIsLoading] = useState(false);


    const handleChange = (newCode) => {
        setCode(newCode);
    };

    const handleResetCode = () => {
        setCode(''); // Reset the code editor
      };

    const handleRunCode = () => {
        setIsLoading(true);
    
        // Prepare the request payload
        const requestData = {
          code: code,
        };
        console.log(requestData)
    
        // Make an API call to the backend for code execution
        axios.post('/api/user/execute-code', requestData)
          .then((response) => {
            // Handle the response from the backend
            setOutput(response.data.output);
          })
          .catch((error) => {
            // Handle any errors, e.g., server errors or invalid code
            setOutput(`Error: ${error.message}`);
          })
          .finally(() => {
            setIsLoading(false);
          });
    };
    return (
        <>
        <div className="overview">
            <div className="title">
                <Unicons.UilBookOpen />
                <span className="text">Topics</span>
            </div>

            <div >
                {/* ... Dashboard boxes ... */}
                <Link to="https://docs.oracle.com/en/java/javase/11/docs/api/" style={{textDecoration:"none",display:"inline-block", margin:"30px"}} target="_blank" rel="noopener noreferrer">
                    <div className="card">
                        <p className="title1">Java</p>
                        <p className="title2">Standerd Edition</p>
                        <img src="img/codingIcon/java.svg" className='svg' width={94} alt="" />
                    </div>
                </Link>
                <Link to="https://mu.ac.in/wp-content/uploads/2021/05/Data-Structure-Final-.pdf" style={{textDecoration:"none",display:"inline-block", margin:"30px"}} target="_blank" rel="noopener noreferrer">
                    <div className="card">
                        <p className="title1">DSA</p>
                        <p className="title2"></p>
                        <img src="img/codingIcon/DSA.svg" className='svg' width={94} alt="" />
                    </div>
                </Link>

                <Link to="https://docs.python.org/3/tutorial/introduction.html" style={{textDecoration:"none", display:"inline-block", margin:"30px"}} target="_blank" rel="noopener noreferrer">
                    <div className="card">
                        <p className="title1">Pyhton</p>
                        <p className="title2">3.12</p>
                        <img src="img/codingIcon/python.svg" className='svg' width={94} alt="" />
                    </div>
                </Link>

            </div>
            <div className="code-editor-top-bar" style={{marginBottom:"2%"}}>
                <span>Language: {language}</span>
                <button className='btn btn-danger' style={{marginLeft:"60%"}} onClick={handleResetCode}>Reset</button>
                <button className='btn btn-primary' style={{marginLeft:"2%"}} onClick={handleRunCode} disabled={isLoading}>
                    {isLoading ? 'Running...' : 'Run Code'}
                </button>
            </div>
            <AceEditor
            height="100px"
            value={code}
            onChange={handleChange}
            name="code-editor"
            mode="javascript"
            theme="monokai"
            fontSize="16px"
            highlightActiveLine={true}
            style={{ width: '90%', height: '400px', borderRadius:"1rem" }}
            setOptions={{
                enableLiveAutocompletion: true,
                showLineNumbers: true,
                tabSize: 2
            }}
            />
            {/* Output Section */}
            <div className="output-section">
                <h2>Output:</h2>
                <AceEditor
                height="100px"
                value={output}
                name="code-editor"
                mode="html"
                theme="monokai"
                fontSize="16px"
                style={{ width: '90%', height: '100px', borderRadius:"1rem" }}
                setOptions={{
                    showLineNumbers: true
                }}
                disabled
                />
            </div>
            
        </div>

        <div className="activity">
            <div className="activity-data">
                {/* ... Activity data ... */}
            </div>
        </div>
        </>
    );
};

export default Practice; 