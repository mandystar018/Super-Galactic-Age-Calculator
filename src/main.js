import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { User } from './js/user.js'

$(document).ready(function() {
  $('#planet').submit(function(event) {
    event.preventDefault();

    const userYear = $("#year").val();
    const userDiet = $("#diet").val();
    const userExercise = $("#exercise").val();
    let userData = new User(userYear, userExercise, userDiet);

  });
});