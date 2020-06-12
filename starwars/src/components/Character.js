// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const WrapperDiv = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 90vh;
`

const StyledContainer = styled.div`
    display:flex;
`

const CharCard = styled.div`
    display:flex;
    flex-direction: column;
`
const CharName = styled.h2`
    color: black;
    text-shadow: 1px 1px 5px #fff;
`

const CharBirth = styled.h3`
    color: white;
    text-shadow: 1px 1px 5px black;
`

const Characters = (props) => {
    const {data} = props;

    return (
        <WrapperDiv>
            <StyledContainer>
            {data.map((people) => {
                return (
                    <CharCard>
                        <CharName>{people.name}</CharName>
                        <CharBirth>Birth Year: {people.birth_year}</CharBirth>
                        {/* <h3>Species: {people.species}</h3> */}
                    </CharCard>
                )
            })}
            </StyledContainer>
        </WrapperDiv>

    )
}

export default Characters;

// {
// 	"name": "Luke Skywalker",
// 	"height": "172",
// 	"mass": "77",
// 	"hair_color": "blond",
// 	"skin_color": "fair",
// 	"eye_color": "blue",
// 	"birth_year": "19BBY",
// 	"gender": "male",
// 	"homeworld": "https://swapi.dev/api/planets/1/",
// 	"films": [
// 		"https://swapi.dev/api/films/2/",
// 		"https://swapi.dev/api/films/6/",
// 		"https://swapi.dev/api/films/3/",
// 		"https://swapi.dev/api/films/1/",
// 		"https://swapi.dev/api/films/7/"
// 	],
// 	"species": [
// 		"https://swapi.dev/api/species/1/"
// 	],
// 	"vehicles": [
// 		"https://swapi.dev/api/vehicles/14/",
// 		"https://swapi.dev/api/vehicles/30/"
// 	],
// 	"starships": [
// 		"https://swapi.dev/api/starships/12/",
// 		"https://swapi.dev/api/starships/22/"
// 	],
// 	"created": "2014-12-09T13:50:51.644000Z",
// 	"edited": "2014-12-20T21:17:56.891000Z",
// 	"url": "https://swapi.dev/api/people/1/"
// }