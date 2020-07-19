import React, {Component} from 'react';

import {
    SectionList,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

const DATA = [
    {
        title: "Main dishes",
        data: [
            {
                title: "Pizza",
                desc: 'testPizza',
                prepTime: {
                    hours: 0,
                    minutes: 1
                },
                cookTime: {
                    hours: 0,
                    minutes: 22
                }

            },
            {
                title: "Burger",
                desc: 'test Burger',
                prepTime: {
                    hours: 0,
                    minutes: 5
                },
                cookTime: {
                    hours: 0,
                    minutes: 10
                }
            },
            {
                title: "Risotto",
                desc: 'test Risotto',
                prepTime: {
                    hours: 0,
                    minutes: 20
                },
                cookTime: {
                    hours: 1,
                    minutes: 22
                }
            },
        ]
    },
    {
        title: "Desserts",
        data: [
            {
                title: "Cheese Cake",
                desc: 'test Cheese Cake',
                prepTime: {
                    hours: 0,
                    minutes: 1
                },
                cookTime: {
                    hours: 0,
                    minutes: 22
                }
            },
            {
                title: "Ice Cream",
                desc: 'test Ice Cream',
                prepTime: {
                    hours: 1,
                    minutes: 1
                },
                cookTime: {
                    hours: 0,
                    minutes: 22
                }
            },
            "Ice Cream"
        ]
    }
];

const Item = ({object} ) => {
    return (
        <View>
            <TouchableOpacity
                onPress={() => alert('pressed')}
            >
                <View>
                    <Text>{object.title}</Text>
                    <Text>{object.desc}</Text>
                </View>
            </TouchableOpacity>

        </View>
    );
}

const RecipeList = () => (
    <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item object={item} />}
        renderSectionHeader={({ section: { title } }) => (
            <Text>{title}</Text>
        )}
    />
);


export default RecipeList;
