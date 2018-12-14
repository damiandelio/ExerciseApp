import React, { Component } from 'react'
import ExercisesPreview from '../../views/ExercisesPreview';

// styles
import { CategoryName, GridView } from './ExercisesStyled';

export default class Exercises extends Component {
  state = {
    exercises: {
      static: [
        {id: '01', name: 'L-Sit', img: 'aca va la url'},
        {id: '02', name: 'Straddle L', img: 'aca va la url'},
        {id: '03', name: 'Manna', img: 'aca va la url'},
        {id: '04', name: 'Back Lever', img: 'aca va la url'},
        {id: '05', name: 'Front Lever', img: 'aca va la url'},
        {id: '06', name: 'Planche', img: 'aca va la url'},
      ],
      dynamic: [
        {id: '07', name: 'Push-up Variations', img: 'aca va la url'},
        {id: '08', name: 'Dip Variations', img: 'aca va la url'},
        {id: '09', name: 'Row Variations', img: 'aca va la url'},
        {id: '10', name: 'Pull-up Variations', img: 'aca va la url'},
        {id: '11', name: 'Curl Variations', img: 'aca va la url'},
        {id: '12', name: 'Muscle-up Variations', img: 'aca va la url'},
        {id: '13', name: 'V-up Variations', img: 'aca va la url'},
        {id: '14', name: 'HLL Variations', img: 'aca va la url'},
        {id: '15', name: 'Deck Squat Variations', img: 'aca va la url'},
        {id: '16', name: 'Single Leg Squat Variations', img: 'aca va la url'},
      ]
    }
  }

  render() {
    const { exercises } = this.state;
    return (
      <GridView container>
        <CategoryName>Static: </CategoryName>
        {exercises.static.map( item => <ExercisesPreview key={item.id} exerciseName={item.name} exerciseImg={item.img} />)}
        <CategoryName>Dynamic: </CategoryName>
        {exercises.dynamic.map( item => <ExercisesPreview key={item.id} exerciseName={item.name} exerciseImg={item.img} />)}
      </GridView>
    )
  }
}