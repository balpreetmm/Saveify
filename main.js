function calcData() {
  document.getElementById( 'info' ).style.display = 'block';
  var mealPlanCosts = parseInt(document.getElementById("groceries").value);
  var suppliesCosts = parseInt(document.getElementById("supplies").value);
  var transportationCosts = parseInt(document.getElementById("transportation").value);
  var personalCosts = parseInt(document.getElementById("personal").value);
  var entertainmentCosts = parseInt(document.getElementById("entertainment").value);
  var eventsCosts = parseInt(document.getElementById("events").value);
  var eatingOutCosts = parseInt(document.getElementById("eating").value);
  var otherCosts = parseInt(document.getElementById("other").value);

  console.log(mealPlanCosts);
  console.log(suppliesCosts);
  console.log(transportationCosts);
  console.log(personalCosts);
  console.log(entertainmentCosts);
  console.log(eventsCosts);
  console.log(eatingOutCosts);
  console.log(otherCosts);

  var totalCost = mealPlanCosts + suppliesCosts + transportationCosts + personalCosts + entertainmentCosts + eventsCosts + + eatingOutCosts + otherCosts;
  console.log(totalCost);

  var percentMeal = Math.round(mealPlanCosts/totalCost*100);
  var percentSupplies = Math.round(suppliesCosts/totalCost*100);
  var percentTransportation = Math.round(transportationCosts/totalCost*100);
  var percentPersonal = Math.round(personalCosts/totalCost*100);
  var percentEntertainment = Math.round(entertainmentCosts/totalCost*100);
  var percentEvent = Math.round(eventsCosts/totalCost*100);
  var percentEatingOut = Math.round(eatingOutCosts/totalCost*100);
  var percentOther = Math.round(otherCosts/totalCost*100);

  var averageSuppliesPercent =  10;
  var averageTransportationPercent =  12;
  var averagePersonalPercent =  22;
  var averageEntertainmentPercent = 24;
  var averageEventPercent = 4;
  var averageEatingPercent =  28;


  //****************************************

  mealTip = "Make sure budget your monthly spending appropriately so you don't run out  of money by the end of the year. Eating out is even more expensive, so try and spend less of you meal plan to make sure this does not happen."

  //****************************************

  if(percentSupplies > averageSuppliesPercent) {
    suppliesTip = "You spend more on school supplies than the average student\n.Course textbooks can often be very expensive, so search for cheaper alternatives by buying used textbooks from other students or finding online versions!"
  }

  else if (percentSupplies == averageSuppliesPercent) {
    suppliesTip = "You spend the same percent on supplies as the average student.\nReduce your expenses further by finding online textbooks and joining textbook exchange groups on Facebook."

  }

  else if (percentSupplies < averageSuppliesPercent) {
    suppliesTip = "Congrats, you spend less on school supplies than the average student.\nMake sure you are not skimping out on buying school supplies, because having the right supplies can make your studying efforts more productive."
  }

  //****************************************

  if(percentTransportation > averageTransportationPercent) {
    transportationTip = "You spend more on transportation than the average student.\nGetting around campus can get expensive, so look for student deals for bussing, rideshare groups or even insurance if you drive."

  }

  else if (percentTransportation == averageTransportationPercent) {
    transportationTip = "Congrats, you spend the same percent on transportation as the average student!\nReduce your expenses further by carpooling, and taking advantage of student deals for bussing!"

  }

  else if (percentTransportation < averageTransportationPercent) {
    transportationTip = "Congrats, you spend less on transportation than the average student. Since you spend less on transportation, you may want to consider planning trips to explore the city!"
  }

  //****************************************

  if(percentPersonal > averagePersonalPercent) {
    personalTip = "You spend more on personal care than the average student.\nTry cutting down on your expenses by looking for sales before you go to buy new things."

  }

  else if (percentPersonal == averagePersonalPercent) {
    personalTip = "Congrats, you spend the same percent on entertainment as the average student!"

  }

  else if (percentPersonal < averagePersonalPercent) {
    personalTip = "Congrats, you spend less on personal care than the average student.\nDon’t forget to treat yourself once in a while to take your mind off school and relax"
  }

  //****************************************

  if(percentEntertainment > averageEntertainmentPercent) {
    entertainmentTip = "You spend more on entertainment than the average student. \n Even though a healthy balance between school and spending time with your friends is important, be careful not to overspend. You can try limiting costly activities to once a week. "

  }

  else if (percentEntertainment == averageEntertainmentPercent) {
    entertainmentTip = "Congrats, you spend the same percent on entertainment as the average student! \n Continue to maintain a healthy balance between school and having fun!"

  }

  else if (percentEntertainment < averageEntertainmentPercent) {
    entertainmentTip = "Congrats, you spend less on entertainment than the average student.\n It is important to study, but it's always nice to take a break to go the movies or out with your friends to help take your mind off studying."
  }

  //****************************************

  if(percentEvent > averageEventPercent) {
    eventTip = "Extracurriculars are an excellent way to enhance your skill set, however they can be expensive, so make sure that you are getting the most out of your extracurricular experiences."

  }

  else if (percentEvent == averageEventPercent) {
    eventTip = "Congrats, you spend the same percent on extracurriculars as the average student!"

  }

  else if (percentEvent < averageEventPercent) {
    eventTip = "Extracurriculars are a great way to apply and learn new skills, so do not be put off by club fees, as they are a awesome way to improve your university experience."
  }

  //****************************************

  if(percentEatingOut > averageEatingPercent) {
    eatingTip = "You spend more on eating out than the average student. \n Eating out is a lot more convenient with your busy schedule, but making some of your own food is an easy way to save money."

  }

  else if (percentEatingOut == averageEatingPercent) {
    eatingTip = "Congrats, you spend the same percent on eating out as the average student! \n To reduce your expenses even further, consider buying ingredients and making your own food at home. Not only is it cheaper, but it is often healthier as well."

  }

  else if (percentEatingOut < averageEatingPercent) {
    eatingTip = "Congrats, you spend less on eating out than the average student. \n To reduce your expenses even further, consider buying ingredients and making your own food at home. Not only is it cheaper, but it is often healthier as well. "
  }

  //****************************************

  document.getElementById("infoTitle").innerHTML = "Monthly Expenditures";

  document.getElementById("mealTitle").innerHTML = "Meal Plan Cost";
  document.getElementById("mealPlanCost").innerHTML = "You spent $" + mealPlanCosts + ".";
  document.getElementById("mealPer").innerHTML = "That's " + percentMeal + "% of your total spending.";
  document.getElementById("mealTip").innerHTML = mealTip;

  document.getElementById("suppliesTitle").innerHTML = "Supply Costs";
  document.getElementById("suppliesCost").innerHTML = "You spent $" + suppliesCosts + ".";
  document.getElementById("suppliesPer").innerHTML = "That's " + percentSupplies + "% of your total spending.";
  document.getElementById("suppliesTip").innerHTML = suppliesTip;

  document.getElementById("transportationTitle").innerHTML = "Transportation Expenses";
  document.getElementById("transportationCost").innerHTML = "You spent $" + transportationCosts + ".";
  document.getElementById("transportationPer").innerHTML = "That's " + percentTransportation + "% of your total spending.";
  document.getElementById("transportationTip").innerHTML = transportationTip;

  document.getElementById("personalTitle").innerHTML = "Personal Expenses";
  document.getElementById("personalCost").innerHTML = "You spent $" + personalCosts + ".";
  document.getElementById("personalPer").innerHTML = "That's " + percentPersonal+ "% of your total spending.";
  document.getElementById("personalTip").innerHTML = personalTip;

  document.getElementById("entertainmentTitle").innerHTML = "Entertainment Costs";
  document.getElementById("entertainmentCost").innerHTML = "You spent $" + entertainmentCosts + ".";
  document.getElementById("entertainmentPer").innerHTML = "That's " + percentEntertainment+ "% of your total spending.";
  document.getElementById("entertainmentTip").innerHTML = entertainmentTip;

  document.getElementById("eventTitle").innerHTML = "Extra-Curricular Costs ";
  document.getElementById("eventCost").innerHTML = "You spent $" + eventsCosts + ".";
  document.getElementById("eventPer").innerHTML = "That's " + percentEvent+ "% of your total spending.";
  document.getElementById("eventTip").innerHTML = eventTip;

  document.getElementById("eatingTitle").innerHTML = "Eating Out Costs";
  document.getElementById("eatingOutCost").innerHTML = "You spent $" + eatingOutCosts + ".";
  document.getElementById("eatingPer").innerHTML = "That's " + percentEatingOut+ "% of your total spending.";
  document.getElementById("eatingTip").innerHTML = eatingTip;

  document.getElementById("otherTitle").innerHTML = "Other Costs";
  document.getElementById("otherCost").innerHTML = "You spent $" + otherCosts + ".";
  document.getElementById("otherPer").innerHTML = "That's " + percentOther+ "% of your total spending.";

  //document.getElementsByClassName("costBoxes").style.display = "block";

};
