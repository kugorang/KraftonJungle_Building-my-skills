import React from 'react';

export default function postForm() {
    input = React.createRef()

    state = {
        name: '',
        deco: 'AA',
        phone: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleNewChange = (e) => {
        this.setState({
            deco: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // 같은거
        // name: this.state.name,
        // phone: this.state.phone
        this.props.onCreate(this.state);
        this.setState({
            name: 'thisIsDefaultName',
            phone: 'thisIsDefaultPhone',
        });
        this.input.current.focus();
    }

    return (
        <div>
            hello
            hello
            <form onSubmit={this.handleSubmit}>
                {/* <input onChange = {this.handleChange} value = {this.state.name} /> */}
                <input
                    name="name"
                    placeholder="이름"
                    onChange={this.handleChange}
                    value={this.state.name}
                    ref={this.input}
                />
                <input
                    name="phone"
                    placeholder="전화번호"
                    onChange={this.handleChange}
                    value={this.state.phone}
                />
                <button type="submit">등록</button>
                {/* <div>
                        {this.state.name} {this.state.phone}
                    </div> */}
            </form>
        </div>
    );
}