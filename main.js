function Time(hours, minutes, seconds) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
  }
  Time.prototype.toString = function() {
    return `${this.hours}:${this.minutes}:${this.seconds}`;
  };

  Time.prototype.addSeconds = function(seconds) {
    this.seconds += seconds;
    if (this.seconds >= 60) {
      this.minutes += Math.floor(this.seconds / 60);
      this.seconds %= 60;
    }
    if (this.minutes >= 60) {
      this.hours += Math.floor(this.minutes / 60);
      this.minutes %= 60;
    }
  };

  Time.prototype.addMinutes = function(minutes) {
    this.minutes += minutes;
    if (this.minutes >= 60) {
      this.hours += Math.floor(this.minutes / 60);
      this.minutes %= 60;
    }
  };

  Time.prototype.addHours = function(hours) {
    this.hours += hours;
  };