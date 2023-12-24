class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }
  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error('Отсутствуют обязательные аргументы');
    } else if ( this.alarmCollection.find(setup => setup.time === time) ) {  //проверка на звонок в это же время
      console.warn('Уже присутствует звонок на это же время');
    }
    this.alarmCollection.push({time, callback, canCall: true});  //добавление в массив звонков объекта со свойствами задачи
  }
  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(  //удаление звонков по фильтру времени
      setup => setup.time !== time
    )
  }
  getCurrentFormattedTime() {
    return new Date().toLocaleTimeString().slice(0, -3);
  }
  start() {
    if (this.intervalId) {
      return
    }
    this.intervalId = setInterval( () => {
      this.alarmCollection.forEach( setup => {
        if (setup.time === this.getCurrentFormattedTime() && setup.canCall) {
          setup.canCall = false;    //предотвратить повторные вызовы callback функции
          setup.callback();
        }
      })
    }, 1000);
  }
  stop() {
          if (!this.intervalId) {
              return;
          }

          clearInterval(this.intervalId);
          this.intervalId = null;
      }

      resetAllCalls() {
          if (!this.alarmCollection) {
              console.error('Коллекция звонков отсутствует!');
              return;
          }

          this.alarmCollection.forEach(alarm => {
              alarm.canCall = true;
          });
      }

      clearAlarms() {
          this.stop();
          this.alarmCollection = [];
      }
  }