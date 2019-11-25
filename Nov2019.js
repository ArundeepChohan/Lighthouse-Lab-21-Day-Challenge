	/*
	Input:
		const volunteers = [
			'Sally',
			'Jake',
			'Brian',
			'Hamid'
		];
		const neighbourhoods = [
			'Central Valley',
			'Big Mountain',
			'Little Bridge',
			'Bricktown',
			'Brownsville',
			'Paul's Boutique',
			'Clay Park',
			'Fox Nest'
		];
	Output:
		2
	*/		
	const doorToDoor = (volunteers, neighbourhoods) => {
		//console.log(volunteers.length);
		//console.log(neighbourhoods.length);
		return (neighbourhoods.length/volunteers.length);
	};
	
	/*
	Input:
		const topic = 'economy'
	Output:
		Time is money.
	*/
	const interviewAnswer = (topic) => {
		switch(topic)
		{
			case "arts funding":
			  return "We'll have to get creative!";
			case "economy":
			  return "Time is money.";
			case "transportation":
			  return "It's going to be a long road, so we better get moving.";
			default:
			  return "QUACK";
		 }
	};
	
	/*
	Input:
		const name = 'Sally';
		const votes = [
			0, // Tim
			2, // Sally
			1  // Beth
		]
	Output:
		[
			0, // Tim
			3, // Sally
			1  // Beth
		]
	*/
	const castVote = (name, votes) => {
		switch(name)
		{
		  case "Tim":
			votes[0]+=1;
			break;
		  case "Sally":
			votes[1]+=1;
			break;
		  case "Beth":
			votes[2]+=1;
			break;
		  default:
			break;
		}
		return votes;
	};
	
	/*
	Input:
		const name = 'Bradley';
		const unregisteredVoters = ['Jake', 'Alanna', 'Bradley', 'Stephanie'];
	Output:
		['Jake', 'Alanna', 'Stephanie']
	*/
	const registerToVote = (name, unregisteredVoters) => {
		const i = unregisteredVoters.length;
		while(i>=0)
		{
		  if(name===unregisteredVoters[i])
		  {
			unregisteredVoters.splice(i,1);
		  }
		  i--;
		}
		return unregisteredVoters;
	};
	
	/*
	Input:
		const stations = [
		  ['Big Bear Donair', 10, 'restaurant'],
		  ['Bright Lights Elementary', 50, 'school'],
		  ['Moose Mountain Community Centre', 45, 'community centre']
		];  
	Output:
		['Bright Lights Elementary', 'Moose Mountain Community Centre']
	*/
	const chooseStations = (stations) => {
		const substring = "community centre";
		const substring2 = "school";
		var appropriate = [];
		for(let i = 0;i<stations.length;i++)
		{
		  if((stations[i][1]>=20)&&((stations[i][2]===substring)||(stations[i][2]===substring2)))
		  {
			appropriate.push(stations[i][0]);
		  }
		}
		return appropriate;
	};
	
	/*
	Input:
		const voter_signatures = [
			'Bill Billiamson',
			'Kate Etak',
			'Brandon Brandonus',
			'Fake McFakerson',
			'Jane Janesford'
		]
		const voter_ids = [
			'Bill Billiamson',
			'Kate Etak',
			'Brandon Brandonus',
			'Simon Simonson',
			'Jane Janesford'
		]
	Output:
		FRAUD!
	*/
	const voterTurnout = (voter_signatures, voter_ids) => {
		if(voter_signatures.length!==voter_ids.length)
		{
		return false;
		}
  
		for(let i=0;i<voter_signatures.length;i++)
		{
		  if(voter_signatures[i]!==voter_ids[i])
		  {
            return "FRAUD!";
		  }
		}
		return "All clear, we can count the votes!";
	};
	
	/*
	Input:
		const interviews = [
		  'smart city', 
		  'rebuild the lighthouse', 
		  'arts funding', 
		  'transportation',
		  'arts funding', 
		  'rebuild the lighthouse', 
		  'sports funding', 
		  'tax cuts', 
		  'smart city',
		  'arts funding', 
		  'smart city'
		]
	Output:
		[
		  3, // smart city
		  3, // arts funding
		  1  // transportation
		]
	*/
	const termTopics = (interviews) => {
		var total = new Array(3).fill(0);
		const len = interviews.length;
		//console.log(len);
		for(let i = 0;i<len;i++)
		{
		  let x = interviews[i];
		  //console.log(x);
		  //console.log((x==="smart city"));
		  switch(x)
		  {
		    case "smart city":
			  total[0]++;
			  //console.log(total[0]);
			  break;
		    case "arts funding":
			  total[1] = total[1]+1;
			  break;
		    case "transportation":
			  total[2] = total[2]+1;
			  break;
		    default:
		  }
	  }
	  return total;
	};
	
	/*
	Input:
		const bins = {
			waste: 4,
			recycling: 2,
			compost: 5
		}
		const trash = 'recycling'   
	Output:
		{
			waste: 4,
			recycling: 3,
			compost: 5
		}
	*/
	const smartGarbage = (trash, bins) => {
		if("undefined" === typeof(bins[trash]))
		{
		  return bins;
		}
		bins[trash]++;
		return bins;
	};
	
	/*
	Input:
		const cars = [
		  {
			time: 1568329654807,
			speed: 40,
		  },
		  {
			time: 1568329821632,
			speed: 42,
		  },
		  {
			time: 1568331115463,
			speed: 35
		  }
		]
		const speed = 38
	Output:
		[
		  {
			time: 1568329654807,
			speed: 40,
		  },
		  {
			time: 1568329821632,
			speed: 42,
		  },
		  {
			time: 1568331115463,
			speed: 35
		  },
		  {
			time: 1568431216417,
			speed: 38
		  }
		]
	*/
	const carPassing = (cars, speed) => {
		const sum = cars.reduce((a, {speed}) => a + speed, 0);
		console.log(sum/cars.length);
		const time = Date.now();
		console.log(time);
		const newCar = {
		time: time,
		speed : (sum/cars.length),
		};
		cars.push(newCar);
		return cars;
	};
	
	/*
	Input:
		const spots = [
		  // COLUMNS ARE X
		  //    0    1    2    3    4    5
			  ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
			  ['s', 'M', 's', 'S', 'R', 'M'], // 1
			  ['s', 'M', 's', 'S', 'R', 'm'], // 2
			  ['S', 'r', 's', 'm', 'R', 'M'], // 3
			  ['S', 'r', 's', 'm', 'R', 'M'], // 4
			  ['S', 'r', 'S', 'M', 'M', 'S'], // 5
		  ]
		const vehicle = 'regular' // possible options are 'regular', 'small', or 'motorcycle'
	Output:
		[4, 0]
	*/
	const whereCanIPark = (spots, vehicle) => {
		for(let y=0;y<spots.length;y++)
		{
		  for(let x=0;x<spots[y].length;x++)
		  {
		    if(vehicle ==='regular')
		    {
			  if(spots[y][x]==='R')
			  {
			    return [x,y];
			  }
		    }
		    else if(vehicle ==='small')
		    {
			   if(spots[y][x]==='R'||spots[y][x]==='S')
			  {
			    return [x,y];
			  }
		    }
		    else if(vehicle ==='motorcycle')
		    {
			   if(spots[y][x]==='R'||spots[y][x]==='S'||spots[y][x]==='M')
			   {
			     return [x,y];
			   }
		    }
		  }
	    }
		return false;
	};
	
	/*
	Input:
		const buses = {
		  pickadilly: {
			  distance: 10,
			  speed: 5
		  },
		  uptown: {
			  distance: 13,
			  speed: 10
		  }
		} 
	Output:
		{
		  pickadilly: 2,
		  uptown: 1.3
		}
	*/
	const busTimes = buses => {
		for (var dest in buses){
		  buses[dest]=(buses[dest].distance/buses[dest].speed);
		}
		return buses;
	};
	
	/*
	Input:
		const samples = ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty']
		const threshold = 0.3 
	Output:
		Polluted
	*/
	const checkAir = function (samples, threshold) {
		const amountOfDirties = samples.filter(x => x==="dirty").length;
		console.log(amountOfDirties);
		console.log(amountOfDirties/samples.length);
		if((amountOfDirties/samples.length)>=threshold)
		  return "Polluted";
	  	return "Clean";
	};
	
	/*
	Input:
		// for lightsOff() function
		const lights = [
		  {
			  id: 1,
			  on: true
		  },
		  {
			  id: 2,
			  on: true
		  },
		  {
			  id: 3,
			  on: true
		  },
		  {
			  id: 4,
			  on: true
		  },
		  {
			  id: 5,
			  on: true
		  }
		]  
	Output:
		[
		  {
			  id: 1,
			  on: false
		  },
		  {
			  id: 2,
			  on: false
		  },
		  {
			  id: 3,
			  on: false
		  },
		  {
			  id: 4,
			  on: false
		  },
		  {
			  id: 5,
			  on: false
		  }
		],
	*/
	const lightsOn = function(lights) {
		lights = lights.map(a=>a.on=false);
		return lights;
	};
	
	const lightsOff = function(lights) {
		lights = lights.map(a=>a.on=true);
		return lights;
	};
	
	const toggleLights = function(lights, lightsAreOn) {
		if(lightsAreOn===true)
		{
		  return lightsOn(lights);
		}
		return lightsOff(lights);
	};
	
	/*
	Input:
		const numberOfPeople = 15
		const distanceTraveled = 10
	Output:
		$3.50
	*/
	const dynamicPricing = (numberOfPeople, distanceTraveled) => {
		const basePrice = 1;
		var totalPrice = basePrice+(0.25*distanceTraveled);
		if(numberOfPeople>=30)
		{
		  totalPrice+=0.25;
		}
		return "$"+parseFloat(Math.round(totalPrice* 100) / 100).toFixed(2);
	};
	
	/*
	Input:
		const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  
	Output:
		[-1, 4]
	*/
	const finalPosition = (moves) => {
		var x = 0;
		var y = 0;
		for(let i = 0;i<moves.length;i++)
		{
			switch(moves[i])
			{
			  case "north":
				y++;
				break;
			  case "south":
				y--;
				break;
			  case "east":
				x++;
				break;
			  case "west":
				x--;
				break;
			  default:
			}
		}
		return [x,y];
	};
	
	/*
	Input:
		const color1 = 100
	Output:
		[250, 310]
	*/
	const festivalColours = color1 => {
		//console.log(color1);
		var split1= (color1 + 150) ;
		var split2 = (color1 + 210) ;
		//console.log(split1+" "+split2);
		return [split1,split2];
	};
	
	/*
	Input:
		const vegetables = [
		  {
			submitter: 'Old Man Franklin',
			redness: 10,
			plumpness: 5
		  },
		  {
			submitter: 'Sally Tomato-Grower',
			redness: 2,
			plumpness: 8
		  },
		  {
			submitter: 'Hamid Hamidson',
			redness: 4,
			plumpness: 3
		  }
		]
		const metric = 'redness'
	Output:
		Old Man Franklin
	*/
	const judgeVegetable = (vegetables, metric) => {
		let current = null;
		let name = null;
		for(let vege of vegetables)
		{
		  //console.log(vege);
		  //console.log(vege[metric]);
		  if((vege[metric]>current)||(current === null))
		  {
		    current = vege[metric];
		    name = vege[submitter];
		  }
	    }
		return name;
	};
	
	/*
	Input:
		// for bestOdds() function
		const tickets = [
		  'red',
		  'red',
		  'green',
		  'blue',
		  'green'
		]
		const raffleEntries = {
		  red: 10,
		  green: 30,
		  blue: 15
		}
	Output:
		"You have the best odds of winning the red raffle."
	Input:
		// for countVotes() helper function
		const tickets = [
		  'red',
		  'red',
		  'green',
		  'blue',
		  'green'
		]
	Output:
		{
		  red: 2,
		  green: 2,
		  blue: 1
		}
	*/
	const countTickets = (tickets) => {
		return tickets.reduce((acc, next) => ({ ...acc, [next]: acc[next] + 1 }), 
		{ red: 0, green: 0, blue: 0 });
	};

	const bestOdds = (tickets, raffleEntries) => {
		const ticketCounts = countTickets(tickets);
		// console.log(ticketCount);
		// console.log(raffleEntries);
		// console.log(ticketCount.red/raffleEntries.red);
		// console.log(Object.keys(ticketCounts));
		const color = Object.keys(ticketCounts).reduce((acc, cv) => {
		return ticketCounts[cv] / raffleEntries[cv] > ticketCounts[acc] / raffleEntries[acc] ? cv : acc;
		});
		return `You have the best odds of winning the ${color} raffle.`
	};
	
	/*
	Input:
		const money = 9
	Output:
		[1, 1, 1, 48]
	*/
	const pumpkinSpice = money => {
		//console.log(~~(money/5)+" "+(~~(money/5)*30));
		//console.log(~~((money%5)/3)+" "+(~~((money%5)/3)*15));
		//console.log(~~(((money%5)%3))+" "+(~~(((money%5)%3))*3));
		const pumpkinSlices = [~~(money/5),~~((money%5)/3),~~(((money%5)%3)),(~~(money/5)*30)+(~~((money%5)/3)*15)+(~~(((money%5)%3))*3)];
		//console.log(pumpkinSlices);
		return pumpkinSlices;
	};
	
	/*
	Input:
		const sphere = {
		  type: 'sphere',
		  radius: 2
		}
		sphereVolume(sphere.radius)
	Output:
		33.5102
	Input:
		const cone = {
		  type: 'cone',
		  radius: 3,
		  height: 5
		}
		coneVolume(cone.radius, cone.height)
	Output:
		47.12385
	Input:
		const prism = {
		  type: 'prism',
		  height: 3,
		  width: 4,
		  depth: 5
		}
		prismVolume(prism.height, prism.width, prism.depth)
	Output:
		60
	Input:
		const largeSphere = {
		  type: 'sphere',
		  radius: 40
		}
		const smallSphere = {
		  type: 'sphere',
		  radius: 10
		}
		const cone = {
		  type: 'cone',
		  radius: 3,
		  height: 5
		}
		const duck = [
		  largeSphere,
		  smallSphere,
		  cone
		]
		totalVolume(duck)
	Output:
		272318.257
	*/
	const PI = 3.14159;

	const sphereVolume = function (radius) {
		return ((4/3) * PI * Math.pow(radius,3));
	};

	const coneVolume = function (radius, height) {
		return ((height/3)*PI*Math.pow(radius,2));
	};

	const prismVolume = function (height, width, depth) {
		return (height * width * depth);
	};

	const getVolume = (solid) => {
		switch(solid.type){
		  case 'sphere': return sphereVolume(solid.radius);
		  case 'cone': return coneVolume(solid.radius, solid.height);
		  case 'prism': return prismVolume(solid.height, solid.width, solid.depth);
		  default: return 0;
		}
	};

	const totalVolume = function (solids) {
		return solids.reduce((acc, solid) => acc + getVolume(solid), 0);
	};
	/*
	Input:
		const bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard']
		const bakeryB = ['milk', 'butter', 'cream cheese']
		const recipes = [
			{
				name: 'Coconut Sponge Cake',
				ingredients: ['coconut', 'cake base']
			},
			{
				name: 'Persian Cheesecake',
				ingredients: ['saffron', 'cream cheese']
			},
			{
				name: 'Custard Surprise',
				ingredients: ['custard', 'ground beef']
			}
			]
	Output:
		Persian Cheesecake
	*/
	const chooseRecipe = function(bakeryA, bakeryB, recipes) {
		for(var recipe of recipes)
		{
		  //console.log(recipe.ingredients);
		  if(bakeryA.includes(recipe.ingredients[0])&&bakeryB.includes(recipe.ingredients[1]))
		  {
		    return recipe.name;
		  }
		  else if(bakeryA.includes(recipe.ingredients[1])&&bakeryB.includes(recipe.ingredients[0]))
		  {
		    return recipe.name;
		  }
		}
		return null;
	};

