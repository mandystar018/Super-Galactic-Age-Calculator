export class User {
  constructor(years, exercise, eatingHabits) {
    this.years = years;
    this.exercise = exercise;
    this.eatingHabits = eatingHabits;
    this.mercury = (Math.round(this.years / .24));
    this.venus = (Math.round(this.years / .62));
    this.mars = (Math.round(this.years / 1.88));
    this.jupiter = (Math.round(this.years / 11.86));
    this.lifeExpectancy =[];
  }

  // yearsMercury(){
  //   let mercuryYears = (Math.round(this.years / .24));
  //   return this.mercury += mercuryYears;
  // }

  // yearsVenus(){
  //   let venusYears = (Math.round(this.years / .62));
  //   return this.venus += venusYears;
  // }

  // yearsMars(){
  //   let marsYears = (Math.round(this.years / 1.88));
  //   return this.mars += marsYears;
  // }

  // yearsJupiter(){
  //   let jupiterYears = (Math.round(this.years / 11.86));
  //   return this.jupiter += jupiterYears;
  // }
    
  lifeExpectancy(){
    if (this.exercise && this.eatingHabits === "non-active" && "unhealthy") {
      return 
    }

  }

}