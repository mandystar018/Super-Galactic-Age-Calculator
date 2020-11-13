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

  yearsMercury(){
    let mercuryYears = (Math.round(this.years / .24));
    return this.mercury += mercuryYears;
  }

  yearsVenus(){
    let venusYears = (Math.round(this.years / .62));
    return this.venus += venusYears;
  }

  yearsMars(){
    let marsYears = (Math.round(this.years / 1.88));
    return this.mars += marsYears;
  }
    // 
    // let jupiterYears = (Math.round(this.years / 11.86));
    // this.jupiter += jupiterYears;
    // 
      // if (this.exercise && this.eatingHabits === "non-active" && "unhealthy") {
      //   return 
      // 
  }