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
      this.mercury -=40;
      this.venus -=30;
      this.mars -=20;
      return this.jupiter -=10;
    } else if (this.exercise === "regular" && this.eatingHabits === "normal") {
      this.mercury -=25;
      this.venus -= 20;
      this.mars -= 10;
      return this.jupiter -=5;
    } else {
      this.mercury;
      this.venus;
      this.mars;
      return this.jupiter;
    }
  }
}