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

  planetCalculator(){
    let mercuryYears = (Math.round(this.years / .24));
    let totalMercury = this.mercury += mercuryYears;
    let venusYears = (Math.round(this.years / .62));
    let totalVenus = this.venus += venusYears;
    let marsYears = (Math.round(this.years / 1.88));
    let totalMars = this.mars += marsYears;
    let jupiterYears = (Math.round(this.years / 11.86));
    let totalJupiter = this.jupiter += jupiterYears;
    return totalMercury + totalVenus + totalMars + totalJupiter;
  }

} 
      // if (this.exercise && this.eatingHabits === "non-active" && "unhealthy") {
      //   return 
      // }