import React, { Component } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';

import { addTodo, toggleTodo, setFilter } from './TodoActions';
import { connect } from 'react-redux';

// Redux Store: Application Level State
// React State: Component Level State
class TodoView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            id: 0
        };
    }
    render() {
        const { todos, visibilityFilter, addTodo, toggleTodo, setFilter } = this.props;
        const visibleTodos = getVisibleTodo(todos, visibilityFilter);
        return (
            <View>
                <Button 
                    title='Add Todo' 
                    onPress={() => {
                        this.setState({ text: '' });
                        addTodo(this.state.text, this.state.id++);
                    }}
                />                
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    value={this.state.text}
                    onChangeText={(text) => { this.setState({ text }); }}
                />

                <FlatList
                    data={visibleTodos}
                    extraData={this.props}
                    renderItem={({ item }) => {
                        if (item.completed) {
                            return <Button color='red' title={item.text} onPress={() => toggleTodo(item.id)} />;
                        }
                        return <Button color='green' title={item.text} onPress={() => toggleTodo(item.id)} />;
                    }}
                    keyExtractor={todo => todo.id}
                />

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Button title='All' onPress={() => setFilter('SHOW_ALL')} />
                    <Button title='Active' onPress={() => setFilter('SHOW_ACTIVE')} />
                    <Button title='Completed' onPress={() => setFilter('SHOW_COMPLETED')} />
                </View>
            </View>
        );
    }
}
const getVisibleTodo = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_ACTIVE':
            return todos.filter(todo => !todo.completed);
        case 'SHOW_COMPLETED':
            return todos.filter(todo => todo.completed);
    }
};

const mapStateToProps = ({ todos, visibilityFilter }) => {
    // console.log(todos);
    return { todos, visibilityFilter };
};
export default connect(mapStateToProps, { addTodo, toggleTodo, setFilter })(TodoView);
