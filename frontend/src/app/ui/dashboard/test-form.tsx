import React, { useState, useRef, FormEvent, ChangeEvent } from 'react';

export interface TestFormProps {
    onCreate: (test: string) => void;
}

export default function TestForm(props: TestFormProps) {
    const [testString, setTestString] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTestString(e.target.value)
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.onCreate(testString);
        setTestString('DefaultTestString');
        
        if (inputRef.current){
            inputRef.current.focus();
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="입력하세요..."
                    value={testString}
                    onChange={handleChange}
                    ref={inputRef}
                />
                <button type="submit">제출</button>
            </form>
        </div>
    );
}