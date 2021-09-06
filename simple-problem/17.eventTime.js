/**
 * Peter is organizing an event in his University. The event will be in April month, beginning and finishing within April month. The problem is: Peter wants to calculate the event duration in seconds, knowing obviously the begin and the end time of the event.
 * 
 * You know that the event can take from few seconds to some days, so, you must help Peter to compute the total time corresponding to duration of the event.
 * 
 * Input
 * The first line of the input contains information about the beginning day of the event in the format: “Dia xx”. The next line contains the start time of the event in the format presented in the sample input. Follow 2 input lines with same format, corresponding to the end of the event.
 * 
 * Output
 * Your program must print the following output, one information by line, considering that if any information is null for example, the number 0 must be printed in place of W, X, Y or Z:
 * 
 * W dia(s)
 * X hora(s)
 * Y minuto(s)
 * Z segundo(s)
 * 
 * Obs: Consider that the event of the test case have the minimum duration of one minute. “dia” means day, “hora” means hour, “minuto” means minute and “Segundo” means second in Portuguese.
 * 
 */

 var input = require('fs').readFileSync('./data/17.eventTime', 'utf8');
 var lines = input.split('\n');
 
 // extract lines 
 let [firstLines,secoundLines,thirdLine,fourLine] = lines;
 secoundLines = secoundLines.split(' ')
 fourLine = fourLine.split(' ');
 
 let startDay = Number.parseInt(firstLines.split(' ')[1]);
 let startHour = Number.parseInt(secoundLines[0])
 let startMinute = Number.parseInt(secoundLines[2]);
 let startSecound = Number.parseInt(secoundLines[4]);
 
 let endDay = Number.parseInt(thirdLine.split(' ')[1]);
 let endHour = Number.parseInt(fourLine[0]);
 let endMinute = Number.parseInt(fourLine[2]);
 let endSecound = Number.parseInt(fourLine[4]);
 
 
 let eventDay = 0;
 let eventHour = 0;
 let eventMinute = 0;
 let eventSecound = 0;
 
 
 // conver start time
 let startTime = startSecound + (startMinute*60) + (startHour*60*60) + (startDay*24*60*60);
 let endTime = endSecound + (endMinute*60) + (endHour*60*60)+(endDay*24*60*60) 
 let eventTime = endTime - startTime;
 
 eventSecound = eventTime%60;
 eventTime = Number.parseInt(eventTime / 60);
 
 eventMinute = eventTime%60;
 eventTime = Number.parseInt(eventTime / 60);
 
 eventHour = eventTime % 24;
 eventTime = Number.parseInt(eventTime / 24);
 
 eventDay = eventTime;
 
 console.log(eventDay + " dia(s)")
 console.log(eventHour + " hora(s)")
 console.log(eventMinute+" minuto(s)")
 console.log(eventSecound+" segundo(s)");