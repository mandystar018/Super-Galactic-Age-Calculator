export class User {
  constructor(years, exercise, eatingHabits) {
    this.years = years;
    this.exercise = exercise;
    this.eatingHabits = eatingHabits;
    this.mercury = 0;
    this.venus = 0;
    this.mars = 0;
    this.jupiter = 0;
  }

  mercuryCal(){
    let mercuryYears = (Math.round(this.years / .24)); // 79
    // this.mercury += mercuryYears;
    if (this.exercise && this.eatingHabits === "non-active" && "unhealthy") {
      return mercuryYears -40, this.mercury;
    }
  } 
}