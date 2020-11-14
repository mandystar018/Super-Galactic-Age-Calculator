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
    let mercury = this.mercury;
    let venus = this.venus;
    let mars = this.mars;
    let jupiter = this.jupiter;
    let planets = [mercury, mars, venus, jupiter];

    for (i = 0; i <= planets.length; i++) {
      if (this.exercise === "non-active" && this.eatingHabits === "unhealthy") {
        return planets[i] -=40;
      }
    }
  }
    
}