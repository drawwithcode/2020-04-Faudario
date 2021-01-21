var nameInput;
var greeting;
var submitButton;
// //var myFont;
var intro;

const urlString = window.location.href;
const url = new URL(urlString);

function preload (){
  }

function setup() {


  greeting = createElement("h1","Hi there,");
  greeting.style('font-size', '80px');
  // greeting.style('font-family', 'neue-haas-grotesk-display');
  greeting.style('color', 'coral');
  greeting.style('margin-left', '250px')
  // greeting.style('text-transform', 'uppercase')
  intro = createP('Find out the how to bring positive vibes in your room with stones and houseplants<br> <br> click on the button to get your personalized results')
  intro.style('font-size', '20px');
  // intro.style('font-family', 'neue-haas-grotesk-display');
  intro.style('color', 'coral');
  intro.style('margin-left', '150px');
  intro.style('font-weight', '100');
  // intro.position(0, 700)
  intro.style('text-transform', 'uppercase')

  nameInput = createInput("").attribute("placeholder", "   insert your name");
  submitButton = createButton("LET'S GET GOING");




  // nameInput.style('font-family', 'neue-haas-grotesk-display');
  nameInput.style('font-size', '30px' )
  nameInput.style('color', 'coral')
  nameInput.style('border-color', 'coral');
  nameInput.style("border-radius", "25px");
  // nameInput.style("border-style", "solid");
  // // nameInput.style('border-style', 'none')
  nameInput.style('margin-left', '250px')
  nameInput.style('margin-top', '30px')
  nameInput.style("padding", "10px 20px 10px 20px")


//   submitButton.style('font-family', 'neue-haas-grotesk-display');
  submitButton.style('font-size', '30px');
  submitButton.style('background-color', 'coral');
  submitButton.style('color', 'peachpuff');
  submitButton.style('border-color', 'coral');
  submitButton.style('border-radius', '25px')
//   submitButton.style("border-style", "solid");
//   submitButton.style('border-style', 'none')
  submitButton.style("padding", "8px 20px 8px 20px")
submitButton.style('margin-left', '30px')

  submitButton.mouseClicked(goTo);


}

function draw() {
  if (nameInput.value() == ""){
  greeting.html("Hi there, what's your name?");
} else {
  name = nameInput.value();
  greeting.html("Hi there, " + name + "!")
}

}

function goTo(){
  if(nameInput.value() != ""){
 name = nameInput.value();
    window.open(url.origin + '/index2.html?name=' + name, "_self");

  }
}
