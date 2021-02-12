import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const serializers = {
    types: {
        codeBlock: ({ node = {} }) => {
            const { language, code } = node;
            if (!code) {
                return null
            }
            return (<SyntaxHighlighter language={language || 'text'} style={dark}>{code}</SyntaxHighlighter>)
        }
    }
}

export default serializers