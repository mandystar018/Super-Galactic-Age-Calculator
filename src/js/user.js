export class User {
  constructor(years, exercise, eatingHabits) {
    this.years = years;
    this.exercise = exercise;
    this.eatingHabits = eatingHabits;
    this.mercury = (Math.round(this.years / .24));
    this.venus = (Math.round(this.years / .62));
    this.mars = (Math.round(this.years / 1.88));
    this.jupiter = (Math.round(this.years / 11.86));
    this.life =[];
  }
    
  lifeExpectancy(){
    if (this.exercise === "non-active" && this.eatingHabits === "unhealthy") {
      return this.mercury -=40;
    } else {
      return "Keep Trying"
    }
    
  }

}