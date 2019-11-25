  var navigation = {
    x: -2,
    y: 4,
    z: 7,
    speed: "raaaaid"
  };

  var ship = {
    powerOn: false,
    modules: [],
    antenna: {
      active: false
    }
  };

  var radio = {
    range: {
      low: 88,
      high: 108,
    },
    frequency: 0,
    message: "Bugs are cool.",
    beacon: false
  };
  
  /*
	You are the captain of the exploratory vessel, the ISS Lighthouse, on a mission to explore the galaxy. Just as you depart the solar system, you encounter a gigantic space bug, which knocks you off course! Now you're lost in space, your radio and navigation are out, and it's up to you to work with your computer to get things going again.
	Fortunately, your ship enabled your LARRY (Language-Aware Repair Robot of the Year), when the systems went offline. For some reason, the engineers who created LARRY made him duck-shaped, but he is very good at doing exactly what he is told to do. He has a terminal on his back that lets you use JavaScript to make changes to the ship.
	Your job as captain of the ISS Lighthouse is to use your JavaScript skills to talk to LARRY and get your ship back in working order! You've got 21 days to fix the navigation and radio before the command centre back on Earth gets worried and launches another ship to come looking for you.
	"POWER OFF!" quacks LARRY. That sounds like a big problem! You should probably get the power back on, otherwise things are not going to go very well for you in the depths of uncharted space! Unfortunately, the manual for your ship is hard to read in the dark.
	"Ship's powerOn property set to false!" LARRY exclaims. "MUST CHANGE VALUE! QUACK!" Okay, that sounds pretty serious. Fortunately, you remember from orientation that there are things called "properties" in JavaScript. You access properties using the '.' operator. With just the light from LARRY's terminal, you need to write a function called powerOn() which will change the 'powerOn' property of the 'ship' object. If that's set to 'false', changing it to 'true' should get things going.
	You don't need to define the ship variable in the evaluator since it already exists in the system. You can view it's properties by clicking the Show Global Objects link above
  */
  function powerOn()
  {
    ship.powerOn = !ship.powerOn;
  }
  
  /*
	The lights flicker on, and you can see the interior of the ship, along with LARRY, your duck-shaped friend. You feel relieved, until LARRY’s eyes start to glow red, and he starts blaring, "SHIP IN DANGER! SHIP IN DANGER!"
	What can it be? You've turned the power back on, everything should be back to normal, right? "MODULES NOT ACTIVE!" Modules, what modules? A quick check of the ship's status board reveals an empty array labelled 'modules'.
	You flip through the manual to the section labelled 'Modules', where the first page describes a number of available modules. They are stored in memory in the availableModules array. Each module is an object, with four properties:
	the name of the module is a string
	the size of the module is an integer
	the enabled and essential properties are booleans
	Start off by finding out how many modules there are. Make a function called countModules to reveal how many modules there are to choose from.
  */
  function countModules()
  {
    return availableModules.length;
  }
  
  /*
	"QUACK QUACK QUACK QUACK QUACK QUACK QUACK", goes LARRY, his eyes still glowing red. He’s counting off each of the seven modules on the list - you must be on the right track! Now to find out how many of them are essential.
	Use your JavaScript skills to write a function called countEssential() which will count how many modules from the availableModules array have the essential flag set to true.
  */
  function countEssential()
  {
    var count = 0;
    for(let i=0;i<availableModules.length;i++)
    {
      if(availableModules[i].essential)
      {
        count++;
      }
    }
    return count;
  }
  
   /*
	"DANGER QUACK DANGER QUACK!"
	LARRY seemed so happy before, but he really is starting to get a bit agitated. Now that you know there are three essential modules, you need to load them into the ship's systems.
	Write a function called loadModule(). It needs to take a parameter, called index. Your function should be set up like this:
	function loadModule(index) { }
	When loadModule() gets the index number of a module, it should do the following:
	Access the right module by using the index parameter. Remember how to access particular items in an array? If not, this resource might help you
	Check if the module's essential flag is set to true. If it isn't, return null;
	Set the modules enabled flag to true
	Load the corresponding module from the availableModules array into the ship’s modules property (which is also an array).
	"ALMOST THERE" quacks LARRY. The modules still aren't loading it seems. You realize you need to get the index from somewhere, so you decide to write another function called loopModule() that will loop over the availableModules array and find the module with the name life-support to get its index. Once you have the right index, use your loadModule() function to load the life-support module. Don't forget, you'll need to call your loopModule() function for it to run
  */
  function loadModule(index) 
  { 
    availableModules[index].enabled=true;
    ship.modules.push(availableModules[index]);
  }
  
    /*
	The little duck-shaped robot shudders back and forth for a moment, and his eyes flash as he releases a barrage of ten quacks. "Thank you!" he exclaims.
	"COMMUNICATION MODULE NEEDED," LARRY blares suddenly. He repeats it twice more - he’s rather insistent!
	Luckily, you've got the code for this. Load the module called communication using findModuleIndex() and loadModule() from before.
	But wait, your manual says that there are only three essential modules: navigation, propulsion, and life-support. Is communication essential too? LARRY seems to think so.
	Update your loadModule() function so if any of the modules that LARRY requires you to load are not essential, you override the system and set the essential property to true before loading the module. The function should now look like function loadModule(index){...}
	Once you've done that, use your functions from the previous challenges to load the communication module
	function findModuleIndex(name) { }
	Use your new findModuleIndex() function to find the "propulsion" module and then load it into the ship's system.
	Don't forget: you still need to load the life-support module!
  */
  function loopModule()
  {
    for(let i=0;i<availableModules.length;i++)
    {
      if(availableModules[i].name =="life-support")
      {
        loadModule(i);
      }
    }
  }
  
  loopModule();
  
  /*
	"BREATHE EASIER!" LARRY quacks out. "LITERALLY. Life support module loaded. Propulsion needed."
	You realize that you can re-use your code from before, but this time you should do what all good programmers do: modularize your code.
	Rename your loopModule() function to findModuleIndex(). Update your function to take in a name that you’re looking for, and return the index of that module in the availableModules array, before loading it into the ship. It should look like this to start:
  */
  function findModuleIndex(str1)
  {
    let index = -1;
    for(let i=0;i<availableModules.length;i++)
    {
      if(availableModules[i].name==str1&&availableModules[i].essential)
      {
        index=i;
      }
    }
    if(index!=-1)
    {
      loadModule(index);
    }
    return index;
  }
  
  findModuleIndex("propulsion");
  
  /*
	"NAVIGATION SYSTEM needed," LARRY tells you. Navigation is important - you can't move through space without it!
	Use your already-defined methods and load in the "navigation" module. It's pretty simple once you have the functions to do it, and LARRY's eyes are finally easing from red back to normal.
  */
  findModuleIndex("navigation");
  
  /*
	You look over at LARRY, expecting him to quack out his next prompt, but it seems LARRY is now the one malfunctioning! You open up the manual, and find the section on LARRY. Apparently, loading modules can sometimes cause LARRY to get stuck in an infinite loop.
	You can fix him, you'll just need to write some code! Write and call a function called resetLARRY() which will prompt LARRY to quack ten times so he breaks out of his loop.
	There is a function called LARRY.quack() that you can use in your code.
  */
  function resetLARRY()
  {
    for(let i=0;i<10;i++)
    {
      LARRY.quack();
    }
  }
  
   resetLARRY();
   findModuleIndex("communication");
   
   /*
	"QUAAAACK radio beacon not sending!" Now that LARRY is reset, he can't help but point out all the things wrong with the ship. The radio beacon is important - it’s the part of the ship that relays messages to Earth about your location and welfare. Resetting it is a two-stage process: first you need to set the message. The message needs to contain the current state of the navigation object.
	This is where you learn about something called JSON. JSON stands for JavaScript Object Notation, and it allows us to express an entire JS object as a string. There’s a built-in function in JavaScript that will take in an object and turn it into JSON. That function is JSON.stringify() - if you pass your object to that function as a parameter, it turns into a string.
	You need to write a function called setMessage(). This function should set the message property on the radio object to be the JSON version of the navigation object. Don't forget you need to call your setMessage() function.
   */
  function setMessage()
  {
    radio.message = JSON.stringify(navigation);
  }
   
   setMessage();
   
   /*
	"Beacon not sending!" LARRY is still blaring, and it’s time for step two: activate the beacon.
	You check out the radio object, and see that it has a 'beacon' property. Now that the message is set, write a function called activateBeacon() which will set the beacon property to true.
   */
  function activateBeacon()
  {
    radio.beacon = true;
  }
   
   /*
	"Beacon active!" LARRY sounds as pleased as a robot can be. In fact, you spot the faintest hint of smile on his robot duck bill.
	"Calibration QUACK complete! Now start RADIO! NEED to use the RADIO! QUACK QUACK!"
	LARRY's prompt sends you back to the ship's manual, where you find an entire section about the radio. You notice that the radio has a feature you missed before, the range! Your particular radio has a range of 88 to 108 MHz, much like the FM radio in your car back on Earth. There's a note in the manual that says that the radio should be tuned to the same frequency as the lower end plus the upper end, and that total divided by two.
	Write a function called setFrequency() that will set the frequency property on the radio object using the above formula.
	Be careful because not all radios will have the same range, so make sure your code is reuseable. Instead of coding the numbers directly into your equation use dot notation to access them from the radio object, which you can see by clicking the Show Global Objects link above.
   */
  function setFrequency()
  {
    radio.frequency = (radio.range.low+radio.range.high)/2;
  }
   
  /*
	"QUACK! Navigation system offline!" blares LARRY. "Initialization sequence broken!"
	You quickly check the documentation for the navigation system and find out that the nav system's initialization sequence needs three values, because you are in three-dimensional space. It needs an X, Y, and Z value.
	Your next task is to write a function called initialize() which will set the x, y, and z values correctly to start off at 0 in the navigation system. For example, the navigation system's x value is navigation.x.
	Don't worry about calling your initialize() function, this one runs automatically
  */
  function initialize()
  {
    navigation.x = 0;
    navigation.y = 0;
    navigation.z = 0;
  }
  
  /*
	Great job resetting the navigation system! You're off to a good start, and you'll surely be back in contact with Earth in no time!
	"Navigation system not calibrated! Three calibrations needed! QUAAACK!" There goes LARRY again, trying to help. Another browse through the nav system's documentation shows that each axis (x, y, and z) needs to be calibrated, and each requires a different calibration. Looks like you'll be writing plenty of JavaScript for this!
	To start, let's focus on calibrating just the x-axis. The x-axis has 12 possible settings and you'll need to write some code to find the right one. Start by writing a function called calibrateX(). There are a lot of steps involved in this one, luckily your manual has great documentation instructing that your function needs to:
	Loop from 1 - 12
	Call the built-in checkSignal() function each time, and assign the result to a variable called signal
	Make sure your signal variable is not undefined
	If the value is defined, set the navigation object's x property to that value
	Break out of the loop!
	Don't forget to call your calibrateX() function to activate it!
  */
  function calibrateX()
  {
    let signal = 0;
    for(let i=0;i<12;i++)
    {
      signal = checkSignal();
      if(signal!==undefined)
      {
        navigation.x = signal;
        break;
      }
    }
  } 
  
  /*
	"X Calibrated!" LARRY quacks happily. "Y and Z need calibration now! QUACK!"
	Let's write calibrateY() and calibrateZ(). The manual says you'll need to loop from 1 to 60, and again you have to call checkSignal() each time.
  */
  function calibrateY() 
  {
    let signal = 0;
    for(let i=1;i<=60;i++)
    {
      signal = checkSignal();
      if(signal!==undefined)
      {
        navigation.y = signal;
        break;
      }
    }
 }
 
  function calibrateZ()
  {
    let signal = 0;
    for(let i=1;i<=60;i++)
    {
      signal=checkSignal();
      if(signal!==undefined)
      {
        navigation.z=signal;
        break;
      }
    }
 }
 
  /*
	"One-step calibration needed," LARRY quacks. The last page of the calibration manual says that for proper calibration, you need to write a function called calibrate() which the nav system can call anytime it wants, which will calibrate your X, Y, and Z axes. The good news is, you’ve already done the hard part. Write one function called calibrate() which will call your other three functions in it, one after the other.
	You don't need call the calibrate() function yourself, but don't forget to remove the other calibrateX, calibrateY and calibrateZ calls you already wrote
  */
  */
  function calibrate()
  {
    calibrateX();
    calibrateY();
    calibrateZ();
  }

  /*
	"QUACK propulsion module needs to make us go!" LARRY points his bill at the ship’s command center, where the navigation system speed is set to "raaaaid".
	That clearly isn't correct - speed needs to be a non-negative integer.
	Write a function called setSpeed(speed) which will take in a string as a parameter, and set the speed in the navigation object (see globals above) to an integer.
	Luckily the propulsion module lets us know the speed it needs to be set at, so you don't need to call this function yourself
  */
  function setSpeed(speed)
  {
    let parsed = parseInt(speed);
    if(parsed>=0)
    {
      navigation.speed=parsed;
    }
  }
   
   /*
	"QUACK time to set the ship antenna to active." The ship has a pretty rich configuration object, with the power and modules and a nested object for the antenna's status.
	Write a function called activateAntenna() which will set the active property on the antenna to true. You’ve worked with object sub-properties before when you set the radio frequency (you can see the ship object in the Global Objects list above), remember how to access them?
	Your antenna is a bit out of date, so it doesn't activate automatically. Make sure to call your function to activate it!
   */
  function activateAntenna()
  {
    ship.antenna.active=true;
  }
  
  /*
	"Antenna active! Broadcast function enabled!" LARRY announces triumphantly.
	Now that the power is back on, you should try the radio by sending out a beacon message so Earth knows where you are.
	Create a new function called sendBroadcast(). In this function you'll need to write a loop to call the newly-enabled broadcast() function 100 times - you want to make sure Earth gets the message! Don't worry what broadcast() does; it's built into the ship's computer.
	When you're ready to send your broadcast out, be sure to call your sendBroadcast() function
  */
  function sendBroadCast()
  {
    for(let i =0;i<100;i++)
    {
      broadcast();
    }
  }
   
  sendBroadCast();
  
  /*
	Wait a second! It looks like your message isn't making it all the way to Earth. Another look at the radio manual and you realize you must configure the radio before sending your broadcast. Write and call a function called configureBroadcast() which will get the broadcast to Earth.
	Your function will need to follow a precise order:
	set the frequency on the radio
	set the antenna to active
	send your announcement
	You've already written all the code to complete this challenge with a few minor tweaks you'll be phoning home in no time. Unfortunately this requires manual configuration, so you'll need to call your configureBroadcast() function to kick things off
	PS. Remember to disable your previous frequency, antenna and announcement function calls as they were out of order!
  */
  function configureBroadcast()
  {
    setFrequency();
    activateAntenna();
  }
   
  configureBroadcast();
   
   /*
	Success! Earth has received your message and it looks like they are trying to send something back in return
	"th1s 1s 4 t3st. th1s 1s 0nl5 4 t3st. 1f th1s w3r3 4 r34l m3ss4g3, 502 w021d g3t s0m3th1ng m34n1ngf2l." This message chatters out of the radio.
	After staring at the message for a while, you aren't quite sure what they are trying to say.
	"VOWELS ERROR!" LARRY tells you. VOWELS ERROR? What is that? "My QUACK current operating system cannot process vowels, so I've replaced them all with numbers".
	Write a function called decodeMessage(message). This function takes in a coded message and changes all the numbers back to their respective vowels before returning the newly decoded message.
	This function is much more complicated than what you have had to build until now, and there are multiple ways you could solve this, so you head to your manual to see what it says about decoding messages. The manual suggests you should read about:
	Splitting a string into an array of characters using message.split(''). Read more here
	Joining an array of characters back into a string using message.join(''). Read more here
	Take a look at the hints if you need more help
	Your decoder is automatic, so no need to call this function
   */
  function decodeMessage(message)
  {
   //"th1s 1s 4 t3st. th1s 1s 0nl5 4 t3st. 1f th1s w3r3 4 r34l m3ss4g3, 502 w021d g3t s0m3th1ng m34n1ngf2l." 
   /*
   1->i
   4->a
   3->e
   0->O
   2->u
   5->y
   */
   return message.replace(/0/g, "o").replace(/1/g, "i").replace(/2/g, "u").replace(/3/g, "e").replace(/4/g, "a").replace(/5/g, "y");
  }
  
   /*
    "Let's QUACK head for home!" LARRY states anxiously. However, you realize quickly that the x, y and z coordinates you've set in your navigation object won't get you precisely to Earth. 
	You need to confirm with your home base before resetting the nagivation's x, y and z coordinates. It looks like you'll need to write a function called returnToEarth(). 
	This function is a bit complicated, so you ask LARRY to walk you through it. LARRY responds, quacking that your function should:
	Call the built-in broadcast() function three times. Each of these calls should pass either "x", "y" or "z" as a parameter.
	Store the response from each broadcast() call in it's own variable (The broadcast() function returns a coded-message from Earth with the correct coordinate to return home in HEX! Check out the hints for more on this)
	Decode the returned message using the decodeMessage() function you wrote earlier
	Change the decoded hex-coordinate to an integer using parseInt()
	Set each of the navigation object's x, y and z parameters to the integer coordinates
	Call your returnToEarth() and head for home. "QUACK" shouts LARRY one final time "That's one small step for ducks and a giant leap for duck-kind." Mission complete.
   */
  function returnToEarth()
  {
    let hexX = broadcast("x");
    let hexY = broadcast("y");
    let hexZ = broadcast("z");
    //Hexidecimal => radix=16
    navigation.x = parseInt(decodeMessage(hexX), '16');
    navigation.y = parseInt(decodeMessage(hexY), '16');
    navigation.z = parseInt(decodeMessage(hexZ), '16')
   }
   
   returnToEarth();