var input;
var greeting;
var submitButton;

let img_diamond, img_emerald, img_pearl, img_ruby, img_peridot, img_sapphire, img_tourmaline, img_citrine, img_topaz, img_garnet, img_amethyst

let img_agave, img_fiddlefig, img_philodendron, img_pachira, img_bromeliad, img_ficus, img_monstera, img_dracena, img_alocasia, img_bonsai, img_pothos, img_zz

let januaryTxt = "January - Garnet"
let februaryTxt = "February - Amethyst"
let marchTxt = "March - Aquamarine"
let aprilTxt = "April - Diamond"
let mayTxt = "May - Emerald"
let juneTxt = "June - Pearl"
let julyTxt = "July - Ruby"
let augustTxt = "August - Peridot"
let septemberTxt = "September - Sapphire"
let octoberTxt = "October - Tourmaline"
let novemberTxt = "November - Citrine"
let decemberTxt = "December - Topaz"
let ariesTxt = "Aries - Agave Regina"
let taurusTxt = "Taurus - Fiddle Leaf Fig"
let geminiTxt = "Gemini - Philodendron Xanady"
let cancerTxt = "Cancer - Pachira Aquatica"
let leoTxt = "Leo - Bromeliad"
let virgoTxt = "Virgo - Ficus Elastica"
let libraTxt = "Libra - Monstera Deliciosa"
let scorpioTxt = "Scorpio - Dracena"
let sagittariusTxt = "Sagittarius - Alocasia Polly"
let capricornTxt = "Capricorn - Bonsai Ficus"
let aquariusTxt = "Aquarius - Pothos"
let piscesTxt = "Pisces - ZZ Plant"

const urlString = window.location.href;
const url = new URL(urlString);
let name = url.searchParams.get('name');

function preload() {

  img_diamond = loadImage('assets/diamond.jpg');
  img_emerald = loadImage('assets/emerald.jpg');
  img_pearl = loadImage('assets/pearl.jpg');
  img_ruby = loadImage('assets/ruby.jpg');
  img_peridot = loadImage('assets/peridot.jpg');
  img_sapphire = loadImage('assets/sapphire.jpg');
  img_tourmaline = loadImage('assets/tourmaline.jpg');
  img_citrine = loadImage('assets/citrine.jpg');
  img_topaz = loadImage('assets/topaz.jpg');
  img_garnet = loadImage('assets/garnet.jpg');
  img_amethyst = loadImage('assets/amethyst.jpg');
  img_aquamarine = loadImage('assets/aquamarine.jpg');

  img_agave = loadImage('assets/agave.jpg');
  img_fiddlefig = loadImage('assets/fiddlefig.jpg');
  img_philodendron = loadImage('assets/philodendron.jpg');
  img_pachira = loadImage('assets/pachira.jpg');
  img_bromeliad = loadImage('assets/bromeliad.jpg');
  img_ficus = loadImage('assets/ficus.jpg');
  img_monstera = loadImage('assets/monstera.jpg');
  img_dracena = loadImage('assets/dracena.jpg');
  img_alocasia = loadImage('assets/alocasia.jpg');
  img_bonsai = loadImage('assets/bonsai.jpg');
  img_pothos = loadImage('assets/pothos.jpg');
  img_zz = loadImage('assets/zz.jpg');

}

function setup() {

  textAlign(CENTER);
  //greeting user with name
  greeting = createElement("h2", "HELLO " + name);
  greeting.style('font-size', '80px');
  greeting.style('color', 'coral');
  greeting.position(150, 120)
  greeting.style('margin-top', '0px')
  greeting.style('text-transform', 'uppercase')

  //paragraph month
  pMonth = createElement('h1', "What month <br> were you born in?")
  pMonth.style('font-size', '20px');
  pMonth.style('color', 'coral');
  pMonth.style('font-weight', '100');
  pMonth.position(60, 260)
  pMonth.style('text-transform', 'uppercase')
  pMonth.style('textAlign', 'RIGHT')

  //dropdown month
  sMonth = createSelect();
  sMonth.position(280, 285);
  sMonth.option('-');
  sMonth.option('January');
  sMonth.option('February');
  sMonth.option('March');
  sMonth.option('April');
  sMonth.option('May');
  sMonth.option('June');
  sMonth.option('July');
  sMonth.option('August');
  sMonth.option('September');
  sMonth.option('October');
  sMonth.option('November');
  sMonth.option('December');
  sMonth.size(155, 30);
  sMonth.style('font-size', '24px');
  sMonth.style('color', 'coral');
  sMonth.style('border-color', 'coral');

  //paragrafo sign
  pSign = createElement('h1', "What's your <br>star sign?");
  pSign.style('font-size', '20px');
  pSign.style('color', 'coral');
  pSign.style('font-weight', '100');
  pSign.position(630, 260)
  pSign.style('text-transform', 'uppercase')

  //dropdown sign
  sSign = createSelect();
  sSign.position(455, 285);
  sSign.option('-');
  sSign.option('Aries');
  sSign.option('Taurus');
  sSign.option('Gemini');
  sSign.option('Cancer');
  sSign.option('Leo');
  sSign.option('Virgo');
  sSign.option('Libra');
  sSign.option('Scorpio');
  sSign.option('Sagittarius');
  sSign.option('Capricorn');
  sSign.option('Aquarius');
  sSign.option('Pisces');
  sSign.size(155, 30);
  sSign.style('font-size', '24px');
  sSign.style('color', 'coral');
  sSign.style('border-color', 'coral');
  //  sSign.changed(mute);

  //bottone submitButton
  submitButton = createButton("SHOW ME MY RESULTS!");
  submitButton.style("background-color", "coral");
  submitButton.style("color", "white");
  submitButton.style("cursor", "pointer")
  submitButton.style("font-size", "20px");
  submitButton.style("width", "290px");
  submitButton.style("padding", "8px 20px 8px 20px");
  submitButton.style("border-radius", "15px");
  submitButton.style("border-color", "coral");
  submitButton.style("border-width", "2px");
  submitButton.position(300, 370);
  submitButton.mousePressed(result);




  //results function
  function result() {


    let month = (sMonth.value());
    let sign = (sSign.value());


    //april aries
    if (month === 'April' && sign === 'Aries') {
      console.log('april, aries')
      //sketch for april
      let sketchMonth = function(p1) {
        p1.setup = function() {
          let resultCanvas = p1.createCanvas(300, 300);
          p1.img_diamond = loadImage('assets/diamond.jpg');
          resultCanvas.position(115, 500)
          resultCanvas.style('z-index', '-1')
        }
        p1.draw = function() {
          p1.background(img_diamond)
        }
      }
      //sketch for aries
      let sketchSign = function(p2) {
        p2.setup = function() {
          let resultCanvas = p2.createCanvas(300, 300);
          p2.img_agave = loadImage('assets/agave.jpg');
          resultCanvas.position(480, 500)
          resultCanvas.style('z-index', '-1')
        }
        p2.draw = function() {
          p2.background(img_agave)
        }
      }

      let p1 = new p5(sketchMonth);
      let p2 = new p5(sketchSign);


      //paragraph for stone
      parMonth = createButton(aprilTxt);
      parMonth.style('font-size', '24px');
      parMonth.style('color', 'coral')

      parMonth.style('font-weight', 200);
      parMonth.position(120, 850);
      parMonth.style("width", "290px");
      parMonth.style('margin-left', '0px')
      parMonth.style('z-index', '+1');
      parMonth.style('border-style', 'none');
      parMonth.style('background-color', 'white');

      parMonth.style('z-index', '-1')
      parMonth.style('textAlign', 'CENTER')

      //paragraph for plant
      parSign = createButton(ariesTxt)
      parSign.style('font-size', '24px');
      parSign.style('color', 'coral')

      parSign.style('font-weight', 200);
      parSign.position(485, 850);
      parSign.style("width", "290px");
      parSign.style('margin-left', '0px')
      parSign.style('z-index', '+1');
      parSign.style('border-style', 'none');
      parSign.style('background-color', 'white');

      parSign.style('z-index', '-1')
      parSign.style('textAlign', 'CENTER')
    }

    //april taurus
    else if (month === 'April' && sign === 'Taurus') {
      console.log('april, taurus')
      //sketch for april
      let sketchMonth = function(p1) {
        p1.setup = function() {
          let resultCanvas = p1.createCanvas(300, 300);
          p1.img_diamond = loadImage('assets/diamond.jpg');
          resultCanvas.position(115, 500)
          resultCanvas.style('z-index', '-1')
        }
        p1.draw = function() {
          p1.background(img_diamond)
        }
      }
      //sketch for taurus
      let sketchSign = function(p2) {
        p2.setup = function() {
          let resultCanvas = p2.createCanvas(300, 300);
          p2.img_agave = loadImage('assets/fiddlefig.jpg');
          resultCanvas.position(480, 500)
          resultCanvas.style('z-index', '-1')
        }
        p2.draw = function() {
          p2.background(img_fiddlefig)
        }
      }

      let p1 = new p5(sketchMonth);
      let p2 = new p5(sketchSign);

      //paragraph for stone
      parMonth = createButton(aprilTxt);
      parMonth.style('font-size', '24px');
      parMonth.style('color', 'coral')

      parMonth.style('font-weight', 200);
      parMonth.position(120, 850);
      parMonth.style("width", "290px");
      parMonth.style('margin-left', '0px')
      parMonth.style('z-index', '+1');
      parMonth.style('border-style', 'none');
      parMonth.style('background-color', 'white');

      parMonth.style('z-index', '-1')
      parMonth.style('textAlign', 'CENTER')

      //paragraph for plant
      parSign = createButton(taurusTxt);
      parSign.style('font-size', '24px');
      parSign.style('color', 'coral')

      parSign.style('font-weight', 200);
      parSign.position(485, 850);
      parSign.style("width", "290px");
      parSign.style('margin-left', '0px')
      parSign.style('z-index', '+1');
      parSign.style('border-style', 'none');
      parSign.style('background-color', 'white');

      parSign.style('z-index', '-1')
      parSign.style('textAlign', 'CENTER')

    }

    //may taurus
    else if (month === 'May' && sign === 'Taurus') {
      console.log('may, taurus')
      //sketch for may
      let sketchMonth = function(p1) {
        p1.setup = function() {
          let resultCanvas = p1.createCanvas(300, 300);
          p1.img_diamond = loadImage('assets/emerald.jpg');
          resultCanvas.position(115, 500)
          resultCanvas.style('z-index', '-1')
        }
        p1.draw = function() {
          p1.background(img_emerald)
        }
      }
      //sketch for taurus
      let sketchSign = function(p2) {
        p2.setup = function() {
          let resultCanvas = p2.createCanvas(300, 300);
          p2.img_agave = loadImage('assets/fiddlefig.jpg');
          resultCanvas.position(480, 500)
          resultCanvas.style('z-index', '-1')
        }
        p2.draw = function() {
          p2.background(img_fiddlefig)
        }
      }

      let p1 = new p5(sketchMonth);
      let p2 = new p5(sketchSign);

      //paragraph for stone
      parMonth = createButton(mayTxt);
      parMonth.style('font-size', '24px');
      parMonth.style('color', 'coral')

      parMonth.style('font-weight', 200);
      parMonth.position(120, 850);
      parMonth.style("width", "290px");
      parMonth.style('margin-left', '0px')
      parMonth.style('z-index', '+1');
      parMonth.style('border-style', 'none');
      parMonth.style('background-color', 'white');

      parMonth.style('z-index', '-1')
      parMonth.style('textAlign', 'CENTER')

      //paragraph for plant
      parSign = createButton(taurusTxt);
      parSign.style('font-size', '24px');
      parSign.style('color', 'coral')

      parSign.style('font-weight', 200);
      parSign.position(485, 850);
      parSign.style("width", "290px");
      parSign.style('margin-left', '0px')
      parSign.style('z-index', '+1');
      parSign.style('border-style', 'none');
      parSign.style('background-color', 'white');

      parSign.style('z-index', '-1')
      parSign.style('textAlign', 'CENTER')

    }

    //may gemini
    else if (month === 'May' && sign === 'Gemini') {
      console.log('may, gemini')
      //sketch for may
      let sketchMonth = function(p1) {
        p1.setup = function() {
          let resultCanvas = p1.createCanvas(300, 300);
          p1.img_diamond = loadImage('assets/emerald.jpg');
          resultCanvas.position(115, 500)
          resultCanvas.style('z-index', '-1')
        }
        p1.draw = function() {
          p1.background(img_emerald)
        }
      }
      //sketch for gemini
      let sketchSign = function(p2) {
        p2.setup = function() {
          let resultCanvas = p2.createCanvas(300, 300);
          p2.img_agave = loadImage('assets/philodendron.jpg');
          resultCanvas.position(480, 500)
          resultCanvas.style('z-index', '-1')
        }
        p2.draw = function() {
          p2.background(img_philodendron)
        }
      }

      let p1 = new p5(sketchMonth);
      let p2 = new p5(sketchSign);


      //paragraph for stone
      parMonth = createButton(mayTxt);
      parMonth.style('font-size', '24px');
      parMonth.style('color', 'coral')

      parMonth.style('font-weight', 200);
      parMonth.position(120, 850);
      parMonth.style("width", "290px");
      parMonth.style('margin-left', '0px')
      parMonth.style('z-index', '+1');
      parMonth.style('border-style', 'none');
      parMonth.style('background-color', 'white');

      parMonth.style('z-index', '-1')
      parMonth.style('textAlign', 'CENTER')

      //paragraph for plant
      parSign = createButton(geminiTxt)
      parSign.style('font-size', '24px');
      parSign.style('color', 'coral')

      parSign.style('font-weight', 200);
      parSign.position(485, 850);
      parSign.style("width", "290px");
      parSign.style('margin-left', '0px')
      parSign.style('z-index', '+1');
      parSign.style('border-style', 'none');
      parSign.style('background-color', 'white');

      parSign.style('z-index', '-1')
      parSign.style('textAlign', 'CENTER')
    }

    //june gemini
    else if (month === 'June' && sign === 'Gemini') {
      console.log('june, gemini')
      //sketch for june
      let sketchMonth = function(p1) {
        p1.setup = function() {
          let resultCanvas = p1.createCanvas(300, 300);
          p1.img_diamond = loadImage('assets/pearl.jpg');
          resultCanvas.position(115, 500)
          resultCanvas.style('z-index', '-1')
        }
        p1.draw = function() {
          p1.background(img_pearl)
        }
      }
      //sketch for gemini
      let sketchSign = function(p2) {
        p2.setup = function() {
          let resultCanvas = p2.createCanvas(300, 300);
          p2.img_agave = loadImage('assets/philodendron.jpg');
          resultCanvas.position(480, 500)
          resultCanvas.style('z-index', '-1')
        }
        p2.draw = function() {
          p2.background(img_philodendron)
        }
      }

      let p1 = new p5(sketchMonth);
      let p2 = new p5(sketchSign);


      //paragraph for stone
      parMonth = createButton(juneTxt);
      parMonth.style('font-size', '24px');
      parMonth.style('color', 'coral')

      parMonth.style('font-weight', 200);
      parMonth.position(120, 850);
      parMonth.style("width", "290px");
      parMonth.style('margin-left', '0px')
      parMonth.style('z-index', '+1');
      parMonth.style('border-style', 'none');
      parMonth.style('background-color', 'white');

      parMonth.style('z-index', '-1')
      parMonth.style('textAlign', 'CENTER')

      //paragraph for plant
      parSign = createButton(geminiTxt)
      parSign.style('font-size', '24px');
      parSign.style('color', 'coral')

      parSign.style('font-weight', 200);
      parSign.position(485, 850);
      parSign.style("width", "290px");
      parSign.style('margin-left', '0px')
      parSign.style('z-index', '+1');
      parSign.style('border-style', 'none');
      parSign.style('background-color', 'white');

      parSign.style('z-index', '-1')
      parSign.style('textAlign', 'CENTER')
    }

    //june cancer
    else if (month === 'June' && sign === 'Cancer') {
      console.log('june, cancer')
      //sketch for june
      let sketchMonth = function(p1) {
        p1.setup = function() {
          let resultCanvas = p1.createCanvas(300, 300);
          p1.img_diamond = loadImage('assets/pearl.jpg');
          resultCanvas.position(115, 500)
          resultCanvas.style('z-index', '-1')
        }
        p1.draw = function() {
          p1.background(img_pearl)
        }
      }
      //sketch for cancer
      let sketchSign = function(p2) {
        p2.setup = function() {
          let resultCanvas = p2.createCanvas(300, 300);
          p2.img_agave = loadImage('assets/pachira.jpg');
          resultCanvas.position(480, 500)
          resultCanvas.style('z-index', '-1')
        }
        p2.draw = function() {
          p2.background(img_pachira)
        }
      }

      let p1 = new p5(sketchMonth);
      let p2 = new p5(sketchSign);


      //paragraph for stone
      parMonth = createButton(juneTxt);
      parMonth.style('font-size', '24px');
      parMonth.style('color', 'coral')

      parMonth.style('font-weight', 200);
      parMonth.position(120, 850);
      parMonth.style("width", "290px");
      parMonth.style('margin-left', '0px')
      parMonth.style('z-index', '+1');
      parMonth.style('border-style', 'none');
      parMonth.style('background-color', 'white');

      parMonth.style('z-index', '-1')
      parMonth.style('textAlign', 'CENTER')

      //paragraph for plant
      parSign = createButton(cancerTxt)
      parSign.style('font-size', '24px');
      parSign.style('color', 'coral')

      parSign.style('font-weight', 200);
      parSign.position(485, 850);
      parSign.style("width", "290px");
      parSign.style('margin-left', '0px')
      parSign.style('z-index', '+1');
      parSign.style('border-style', 'none');
      parSign.style('background-color', 'white');

      parSign.style('z-index', '-1')
      parSign.style('textAlign', 'CENTER')
    }

    //july cancer
    else if (month === 'July' && sign === 'Cancer') {
      console.log('july, cancer')
      //sketch for july
      let sketchMonth = function(p1) {
        p1.setup = function() {
          let resultCanvas = p1.createCanvas(300, 300);
          p1.img_diamond = loadImage('assets/ruby.jpg');
          resultCanvas.position(115, 500)
          resultCanvas.style('z-index', '-1')
        }
        p1.draw = function() {
          p1.background(img_ruby)
        }
      }
      //sketch for cancer
      let sketchSign = function(p2) {
        p2.setup = function() {
          let resultCanvas = p2.createCanvas(300, 300);
          p2.img_agave = loadImage('assets/pachira.jpg');
          resultCanvas.position(480, 500)
          resultCanvas.style('z-index', '-1')
        }
        p2.draw = function() {
          p2.background(img_pachira)
        }
      }

      let p1 = new p5(sketchMonth);
      let p2 = new p5(sketchSign);


      //paragraph for stone
      parMonth = createButton(julyTxt);
      parMonth.style('font-size', '24px');
      parMonth.style('color', 'coral')

      parMonth.style('font-weight', 200);
      parMonth.position(120, 850);
      parMonth.style("width", "290px");
      parMonth.style('margin-left', '0px')
      parMonth.style('z-index', '+1');
      parMonth.style('border-style', 'none');
      parMonth.style('background-color', 'white');

      parMonth.style('z-index', '-1')
      parMonth.style('textAlign', 'CENTER')

      //paragraph for plant
      parSign = createButton(cancerTxt)
      parSign.style('font-size', '24px');
      parSign.style('color', 'coral')

      parSign.style('font-weight', 200);
      parSign.position(485, 850);
      parSign.style("width", "290px");
      parSign.style('margin-left', '0px')
      parSign.style('z-index', '+1');
      parSign.style('border-style', 'none');
      parSign.style('background-color', 'white');

      parSign.style('z-index', '-1')
      parSign.style('textAlign', 'CENTER')
    }

    //july leo
    else if (month === 'July' && sign === 'Leo') {
      console.log('july, leo')
      //sketch for july
      let sketchMonth = function(p1) {
        p1.setup = function() {
          let resultCanvas = p1.createCanvas(300, 300);
          p1.img_diamond = loadImage('assets/ruby.jpg');
          resultCanvas.position(115, 500)
          resultCanvas.style('z-index', '-1')
        }
        p1.draw = function() {
          p1.background(img_ruby)
        }
      }
      //sketch for leo
      let sketchSign = function(p2) {
        p2.setup = function() {
          let resultCanvas = p2.createCanvas(300, 300);
          p2.img_agave = loadImage('assets/bromeliad.jpg');
          resultCanvas.position(480, 500)
          resultCanvas.style('z-index', '-1')
        }
        p2.draw = function() {
          p2.background(img_bromeliad)
        }
      }

      let p1 = new p5(sketchMonth);
      let p2 = new p5(sketchSign);


      //paragraph for stone
      parMonth = createButton(julyTxt);
      parMonth.style('font-size', '24px');
      parMonth.style('color', 'coral')

      parMonth.style('font-weight', 200);
      parMonth.position(120, 850);
      parMonth.style("width", "290px");
      parMonth.style('margin-left', '0px')
      parMonth.style('z-index', '+1');
      parMonth.style('border-style', 'none');
      parMonth.style('background-color', 'white');

      parMonth.style('z-index', '-1')
      parMonth.style('textAlign', 'CENTER')

      //paragraph for plant
      parSign = createButton(leoTxt)
      parSign.style('font-size', '24px');
      parSign.style('color', 'coral')

      parSign.style('font-weight', 200);
      parSign.position(485, 850);
      parSign.style("width", "290px");
      parSign.style('margin-left', '0px')
      parSign.style('z-index', '+1');
      parSign.style('border-style', 'none');
      parSign.style('background-color', 'white');

      parSign.style('z-index', '-1')
      parSign.style('textAlign', 'CENTER')
    }

    //august leo
    else if (month === 'August' && sign === 'Leo') {
      console.log('august, leo')
      //sketch for august
      let sketchMonth = function(p1) {
        p1.setup = function() {
          let resultCanvas = p1.createCanvas(300, 300);
          p1.img_diamond = loadImage('assets/peridot.jpg');
          resultCanvas.position(115, 500)
          resultCanvas.style('z-index', '-1')
        }
        p1.draw = function() {
          p1.background(img_peridot)
        }
      }
      //sketch for leo
      let sketchSign = function(p2) {
        p2.setup = function() {
          let resultCanvas = p2.createCanvas(300, 300);
          p2.img_agave = loadImage('assets/bromeliad.jpg');
          resultCanvas.position(480, 500)
          resultCanvas.style('z-index', '-1')
        }
        p2.draw = function() {
          p2.background(img_bromeliad)
        }
      }

      let p1 = new p5(sketchMonth);
      let p2 = new p5(sketchSign);


      //paragraph for stone
      parMonth = createButton(augustTxt);
      parMonth.style('font-size', '24px');
      parMonth.style('color', 'coral')

      parMonth.style('font-weight', 200);
      parMonth.position(120, 850);
      parMonth.style("width", "290px");
      parMonth.style('margin-left', '0px')
      parMonth.style('z-index', '+1');
      parMonth.style('border-style', 'none');
      parMonth.style('background-color', 'white');

      parMonth.style('z-index', '-1')
      parMonth.style('textAlign', 'CENTER')

      //paragraph for plant
      parSign = createButton(leoTxt)
      parSign.style('font-size', '24px');
      parSign.style('color', 'coral')

      parSign.style('font-weight', 200);
      parSign.position(485, 850);
      parSign.style("width", "290px");
      parSign.style('margin-left', '0px')
      parSign.style('z-index', '+1');
      parSign.style('border-style', 'none');
      parSign.style('background-color', 'white');

      parSign.style('z-index', '-1')
      parSign.style('textAlign', 'CENTER')
    }

    //august virgo
    else if (month === 'August' && sign === 'Virgo') {
      console.log('august, virgo')
      //sketch for august
      let sketchMonth = function(p1) {
        p1.setup = function() {
          let resultCanvas = p1.createCanvas(300, 300);
          p1.img_diamond = loadImage('assets/peridot.jpg');
          resultCanvas.position(115, 500)
          resultCanvas.style('z-index', '-1')
        }
        p1.draw = function() {
          p1.background(img_peridot)
        }
      }
      //sketch for virgo
      let sketchSign = function(p2) {
        p2.setup = function() {
          let resultCanvas = p2.createCanvas(300, 300);
          p2.img_agave = loadImage('assets/ficus.jpg');
          resultCanvas.position(480, 500)
          resultCanvas.style('z-index', '-1')
        }
        p2.draw = function() {
          p2.background(img_ficus)
        }
      }

      let p1 = new p5(sketchMonth);
      let p2 = new p5(sketchSign);


      //paragraph for stone
      parMonth = createButton(augustTxt);
      parMonth.style('font-size', '24px');
      parMonth.style('color', 'coral')

      parMonth.style('font-weight', 200);
      parMonth.position(120, 850);
      parMonth.style("width", "290px");
      parMonth.style('margin-left', '0px')
      parMonth.style('z-index', '+1');
      parMonth.style('border-style', 'none');
      parMonth.style('background-color', 'white');

      parMonth.style('z-index', '-1')
      parMonth.style('textAlign', 'CENTER')

      //paragraph for plant
      parSign = createButton(virgoTxt)
      parSign.style('font-size', '24px');
      parSign.style('color', 'coral')

      parSign.style('font-weight', 200);
      parSign.position(485, 850);
      parSign.style("width", "290px");
      parSign.style('margin-left', '0px')
      parSign.style('z-index', '+1');
      parSign.style('border-style', 'none');
      parSign.style('background-color', 'white');

      parSign.style('z-index', '-1')
      parSign.style('textAlign', 'CENTER')
    }

    //semptember virgo
    else if (month === 'September' && sign === 'Virgo') {
      console.log('september, virgo')
      //sketch for september
      let sketchMonth = function(p1) {
        p1.setup = function() {
          let resultCanvas = p1.createCanvas(300, 300);
          p1.img_diamond = loadImage('assets/sapphire.jpg');
          resultCanvas.position(115, 500)
          resultCanvas.style('z-index', '-1')
        }
        p1.draw = function() {
          p1.background(img_sapphire)
        }
      }
      //sketch for virgo
      let sketchSign = function(p2) {
        p2.setup = function() {
          let resultCanvas = p2.createCanvas(300, 300);
          p2.img_agave = loadImage('assets/ficus.jpg');
          resultCanvas.position(480, 500)
          resultCanvas.style('z-index', '-1')
        }
        p2.draw = function() {
          p2.background(img_ficus)
        }
      }

      let p1 = new p5(sketchMonth);
      let p2 = new p5(sketchSign);


      //paragraph for stone
      parMonth = createButton(septemberTxt);
      parMonth.style('font-size', '24px');
      parMonth.style('color', 'coral')

      parMonth.style('font-weight', 200);
      parMonth.position(120, 850);
      parMonth.style("width", "290px");
      parMonth.style('margin-left', '0px')
      parMonth.style('z-index', '+1');
      parMonth.style('border-style', 'none');
      parMonth.style('background-color', 'white');

      parMonth.style('z-index', '-1')
      parMonth.style('textAlign', 'CENTER')

      //paragraph for plant
      parSign = createButton(virgoTxt)
      parSign.style('font-size', '24px');
      parSign.style('color', 'coral')

      parSign.style('font-weight', 200);
      parSign.position(485, 850);
      parSign.style("width", "290px");
      parSign.style('margin-left', '0px')
      parSign.style('z-index', '+1');
      parSign.style('border-style', 'none');
      parSign.style('background-color', 'white');

      parSign.style('z-index', '-1')
      parSign.style('textAlign', 'CENTER')
    }

    //semptember libra
    else if (month === 'September' && sign === 'Libra') {
      console.log('september, libra')
      //sketch for september
      let sketchMonth = function(p1) {
        p1.setup = function() {
          let resultCanvas = p1.createCanvas(300, 300);
          p1.img_diamond = loadImage('assets/sapphire.jpg');
          resultCanvas.position(115, 500)
          resultCanvas.style('z-index', '-1')
        }
        p1.draw = function() {
          p1.background(img_sapphire)
        }
      }
      //sketch for libra
      let sketchSign = function(p2) {
        p2.setup = function() {
          let resultCanvas = p2.createCanvas(300, 300);
          p2.img_agave = loadImage('assets/monstera.jpg');
          resultCanvas.position(480, 500)
          resultCanvas.style('z-index', '-1')
        }
        p2.draw = function() {
          p2.background(img_monstera)
        }
      }

      let p1 = new p5(sketchMonth);
      let p2 = new p5(sketchSign);


      //paragraph for stone
      parMonth = createButton(septemberTxt);
      parMonth.style('font-size', '24px');
      parMonth.style('color', 'coral')

      parMonth.style('font-weight', 200);
      parMonth.position(120, 850);
      parMonth.style("width", "290px");
      parMonth.style('margin-left', '0px')
      parMonth.style('z-index', '+1');
      parMonth.style('border-style', 'none');
      parMonth.style('background-color', 'white');

      parMonth.style('z-index', '-1')
      parMonth.style('textAlign', 'CENTER')

      //paragraph for plant
      parSign = createButton(libraTxt)
      parSign.style('font-size', '24px');
      parSign.style('color', 'coral')

      parSign.style('font-weight', 200);
      parSign.position(485, 850);
      parSign.style("width", "290px");
      parSign.style('margin-left', '0px')
      parSign.style('z-index', '+1');
      parSign.style('border-style', 'none');
      parSign.style('background-color', 'white');

      parSign.style('z-index', '-1')
      parSign.style('textAlign', 'CENTER')
    }

    //october libra
    else if (month === 'October' && sign === 'Libra') {
      console.log('october, libra')
      //sketch for october
      let sketchMonth = function(p1) {
        p1.setup = function() {
          let resultCanvas = p1.createCanvas(300, 300);
          p1.img_diamond = loadImage('assets/tourmaline.jpg');
          resultCanvas.position(115, 500)
          resultCanvas.style('z-index', '-1')
        }
        p1.draw = function() {
          p1.background(img_tourmaline)
        }
      }
      //sketch for libra
      let sketchSign = function(p2) {
        p2.setup = function() {
          let resultCanvas = p2.createCanvas(300, 300);
          p2.img_agave = loadImage('assets/monstera.jpg');
          resultCanvas.position(480, 500)
          resultCanvas.style('z-index', '-1')
        }
        p2.draw = function() {
          p2.background(img_monstera)
        }
      }

      let p1 = new p5(sketchMonth);
      let p2 = new p5(sketchSign);


      //paragraph for stone
      parMonth = createButton(octoberTxt);
      parMonth.style('font-size', '24px');
      parMonth.style('color', 'coral')

      parMonth.style('font-weight', 200);
      parMonth.position(120, 850);
      parMonth.style("width", "290px");
      parMonth.style('margin-left', '0px')
      parMonth.style('z-index', '+1');
      parMonth.style('border-style', 'none');
      parMonth.style('background-color', 'white');

      parMonth.style('z-index', '-1')
      parMonth.style('textAlign', 'CENTER')

      //paragraph for plant
      parSign = createButton(libraTxt)
      parSign.style('font-size', '24px');
      parSign.style('color', 'coral')

      parSign.style('font-weight', 200);
      parSign.position(485, 850);
      parSign.style("width", "290px");
      parSign.style('margin-left', '0px')
      parSign.style('z-index', '+1');
      parSign.style('border-style', 'none');
      parSign.style('background-color', 'white');

      parSign.style('z-index', '-1')
      parSign.style('textAlign', 'CENTER')
    }

    //october Scorpio
    else if (month === 'October' && sign === 'Scorpio') {
      console.log('october, scorpio')
      //sketch for october
      let sketchMonth = function(p1) {
        p1.setup = function() {
          let resultCanvas = p1.createCanvas(300, 300);
          p1.img_diamond = loadImage('assets/tourmaline.jpg');
          resultCanvas.position(115, 500)
          resultCanvas.style('z-index', '-1')
        }
        p1.draw = function() {
          p1.background(img_tourmaline)
        }
      }
      //sketch for scorpio
      let sketchSign = function(p2) {
        p2.setup = function() {
          let resultCanvas = p2.createCanvas(300, 300);
          p2.img_agave = loadImage('assets/dracena.jpg');
          resultCanvas.position(480, 500)
          resultCanvas.style('z-index', '-1')
        }
        p2.draw = function() {
          p2.background(img_dracena)
        }
      }

      let p1 = new p5(sketchMonth);
      let p2 = new p5(sketchSign);


      //paragraph for stone
      parMonth = createButton(octoberTxt);
      parMonth.style('font-size', '24px');
      parMonth.style('color', 'coral')

      parMonth.style('font-weight', 200);
      parMonth.position(120, 850);
      parMonth.style("width", "290px");
      parMonth.style('margin-left', '0px')
      parMonth.style('z-index', '+1');
      parMonth.style('border-style', 'none');
      parMonth.style('background-color', 'white');

      parMonth.style('z-index', '-1')
      parMonth.style('textAlign', 'CENTER')

      //paragraph for plant
      parSign = createButton(scorpioTxt)
      parSign.style('font-size', '24px');
      parSign.style('color', 'coral')

      parSign.style('font-weight', 200);
      parSign.position(485, 850);
      parSign.style("width", "290px");
      parSign.style('margin-left', '0px')
      parSign.style('z-index', '+1');
      parSign.style('border-style', 'none');
      parSign.style('background-color', 'white');

      parSign.style('z-index', '-1')
      parSign.style('textAlign', 'CENTER')
    }

    //November Scorpio
    else if (month === 'November' && sign === 'Scorpio') {
      console.log('november, scorpio')
      //sketch for november
      let sketchMonth = function(p1) {
        p1.setup = function() {
          let resultCanvas = p1.createCanvas(300, 300);
          p1.img_diamond = loadImage('assets/citrine.jpg');
          resultCanvas.position(115, 500)
          resultCanvas.style('z-index', '-1')
        }
        p1.draw = function() {
          p1.background(img_citrine)
        }
      }
      //sketch for scorpio
      let sketchSign = function(p2) {
        p2.setup = function() {
          let resultCanvas = p2.createCanvas(300, 300);
          p2.img_agave = loadImage('assets/dracena.jpg');
          resultCanvas.position(480, 500)
          resultCanvas.style('z-index', '-1')
        }
        p2.draw = function() {
          p2.background(img_dracena)
        }
      }

      let p1 = new p5(sketchMonth);
      let p2 = new p5(sketchSign);


      //paragraph for stone
      parMonth = createButton(novemberTxt);
      parMonth.style('font-size', '24px');
      parMonth.style('color', 'coral')

      parMonth.style('font-weight', 200);
      parMonth.position(120, 850);
      parMonth.style("width", "290px");
      parMonth.style('margin-left', '0px')
      parMonth.style('z-index', '+1');
      parMonth.style('border-style', 'none');
      parMonth.style('background-color', 'white');

      parMonth.style('z-index', '-1')
      parMonth.style('textAlign', 'CENTER')

      //paragraph for plant
      parSign = createButton(scorpioTxt)
      parSign.style('font-size', '24px');
      parSign.style('color', 'coral')

      parSign.style('font-weight', 200);
      parSign.position(485, 850);
      parSign.style("width", "290px");
      parSign.style('margin-left', '0px')
      parSign.style('z-index', '+1');
      parSign.style('border-style', 'none');
      parSign.style('background-color', 'white');

      parSign.style('z-index', '-1')
      parSign.style('textAlign', 'CENTER')
    }

    //November Sagittarius
    else if (month === 'November' && sign === 'Sagittarius') {
      console.log('november, sagittarius')
      //sketch for november
      let sketchMonth = function(p1) {
        p1.setup = function() {
          let resultCanvas = p1.createCanvas(300, 300);
          p1.img_diamond = loadImage('assets/citrine.jpg');
          resultCanvas.position(115, 500)
          resultCanvas.style('z-index', '-1')
        }
        p1.draw = function() {
          p1.background(img_citrine)
        }
      }
      //sketch for sagittarius
      let sketchSign = function(p2) {
        p2.setup = function() {
          let resultCanvas = p2.createCanvas(300, 300);
          p2.img_agave = loadImage('assets/alocasia.jpg');
          resultCanvas.position(480, 500)
          resultCanvas.style('z-index', '-1')
        }
        p2.draw = function() {
          p2.background(img_alocasia)
        }
      }

      let p1 = new p5(sketchMonth);
      let p2 = new p5(sketchSign);


      //paragraph for stone
      parMonth = createButton(novemberTxt);
      parMonth.style('font-size', '24px');
      parMonth.style('color', 'coral')

      parMonth.style('font-weight', 200);
      parMonth.position(120, 850);
      parMonth.style("width", "290px");
      parMonth.style('margin-left', '0px')
      parMonth.style('z-index', '+1');
      parMonth.style('border-style', 'none');
      parMonth.style('background-color', 'white');

      parMonth.style('z-index', '-1')
      parMonth.style('textAlign', 'CENTER')

      //paragraph for plant
      parSign = createButton(sagittariusTxt)
      parSign.style('font-size', '24px');
      parSign.style('color', 'coral')

      parSign.style('font-weight', 200);
      parSign.position(485, 850);
      parSign.style("width", "290px");
      parSign.style('margin-left', '0px')
      parSign.style('z-index', '+1');
      parSign.style('border-style', 'none');
      parSign.style('background-color', 'white');

      parSign.style('z-index', '-1')
      parSign.style('textAlign', 'CENTER')
    }

    //December Sagittarius
    else if (month === 'December' && sign === 'Sagittarius') {
      console.log('december, sagittarius')
      //sketch for december
      let sketchMonth = function(p1) {
        p1.setup = function() {
          let resultCanvas = p1.createCanvas(300, 300);
          p1.img_diamond = loadImage('assets/topaz.jpg');
          resultCanvas.position(115, 500)
          resultCanvas.style('z-index', '-1')
        }
        p1.draw = function() {
          p1.background(img_topaz)
        }
      }
      //sketch for sagittarius
      let sketchSign = function(p2) {
        p2.setup = function() {
          let resultCanvas = p2.createCanvas(300, 300);
          p2.img_agave = loadImage('assets/alocasia.jpg');
          resultCanvas.position(480, 500)
          resultCanvas.style('z-index', '-1')
        }
        p2.draw = function() {
          p2.background(img_alocasia)
        }
      }

      let p1 = new p5(sketchMonth);
      let p2 = new p5(sketchSign);


      //paragraph for stone
      parMonth = createButton(decemberTxt);
      parMonth.style('font-size', '24px');
      parMonth.style('color', 'coral')

      parMonth.style('font-weight', 200);
      parMonth.position(120, 850);
      parMonth.style("width", "290px");
      parMonth.style('margin-left', '0px')
      parMonth.style('z-index', '+1');
      parMonth.style('border-style', 'none');
      parMonth.style('background-color', 'white');

      parMonth.style('z-index', '-1')
      parMonth.style('textAlign', 'CENTER')

      //paragraph for plant
      parSign = createButton(sagittariusTxt)
      parSign.style('font-size', '24px');
      parSign.style('color', 'coral')

      parSign.style('font-weight', 200);
      parSign.position(485, 850);
      parSign.style("width", "290px");
      parSign.style('margin-left', '0px')
      parSign.style('z-index', '+1');
      parSign.style('border-style', 'none');
      parSign.style('background-color', 'white');

      parSign.style('z-index', '-1')
      parSign.style('textAlign', 'CENTER')
    }

    //December Capricorn
    else if (month === 'December' && sign === 'Capricorn') {
      console.log('december, capricorn')
      //sketch for december
      let sketchMonth = function(p1) {
        p1.setup = function() {
          let resultCanvas = p1.createCanvas(300, 300);
          p1.img_diamond = loadImage('assets/topaz.jpg');
          resultCanvas.position(115, 500)
          resultCanvas.style('z-index', '-1')
        }
        p1.draw = function() {
          p1.background(img_topaz)
        }
      }
      //sketch for capricorn
      let sketchSign = function(p2) {
        p2.setup = function() {
          let resultCanvas = p2.createCanvas(300, 300);
          p2.img_agave = loadImage('assets/bonsai.jpg');
          resultCanvas.position(480, 500)
          resultCanvas.style('z-index', '-1')
        }
        p2.draw = function() {
          p2.background(img_bonsai)
        }
      }

      let p1 = new p5(sketchMonth);
      let p2 = new p5(sketchSign);


      //paragraph for stone
      parMonth = createButton(decemberTxt);
      parMonth.style('font-size', '24px');
      parMonth.style('color', 'coral')

      parMonth.style('font-weight', 200);
      parMonth.position(120, 850);
      parMonth.style("width", "290px");
      parMonth.style('margin-left', '0px')
      parMonth.style('z-index', '+1');
      parMonth.style('border-style', 'none');
      parMonth.style('background-color', 'white');

      parMonth.style('z-index', '-1')
      parMonth.style('textAlign', 'CENTER')

      //paragraph for plant
      parSign = createButton(capricornTxt)
      parSign.style('font-size', '24px');
      parSign.style('color', 'coral')

      parSign.style('font-weight', 200);
      parSign.position(485, 850);
      parSign.style("width", "290px");
      parSign.style('margin-left', '0px')
      parSign.style('z-index', '+1');
      parSign.style('border-style', 'none');
      parSign.style('background-color', 'white');

      parSign.style('z-index', '-1')
      parSign.style('textAlign', 'CENTER')
    }

    //January Capricorn
    else if (month === 'January' && sign === 'Capricorn') {
      console.log('january, capricorn')
      //sketch for january
      let sketchMonth = function(p1) {
        p1.setup = function() {
          let resultCanvas = p1.createCanvas(300, 300);
          p1.img_diamond = loadImage('assets/garnet.jpg');
          resultCanvas.position(115, 500)
          resultCanvas.style('z-index', '-1')
        }
        p1.draw = function() {
          p1.background(img_garnet)
        }
      }
      //sketch for capricorn
      let sketchSign = function(p2) {
        p2.setup = function() {
          let resultCanvas = p2.createCanvas(300, 300);
          p2.img_agave = loadImage('assets/bonsai.jpg');
          resultCanvas.position(480, 500)
          resultCanvas.style('z-index', '-1')
        }
        p2.draw = function() {
          p2.background(img_bonsai)
        }
      }

      let p1 = new p5(sketchMonth);
      let p2 = new p5(sketchSign);


      //paragraph for stone
      parMonth = createButton(januaryTxt);
      parMonth.style('font-size', '24px');
      parMonth.style('color', 'coral')

      parMonth.style('font-weight', 200);
      parMonth.position(120, 850);
      parMonth.style("width", "290px");
      parMonth.style('margin-left', '0px')
      parMonth.style('z-index', '+1');
      parMonth.style('border-style', 'none');
      parMonth.style('background-color', 'white');

      parMonth.style('z-index', '-1')
      parMonth.style('textAlign', 'CENTER')

      //paragraph for plant
      parSign = createButton(capricornTxt)
      parSign.style('font-size', '24px');
      parSign.style('color', 'coral')

      parSign.style('font-weight', 200);
      parSign.position(485, 850);
      parSign.style("width", "290px");
      parSign.style('margin-left', '0px')
      parSign.style('z-index', '+1');
      parSign.style('border-style', 'none');
      parSign.style('background-color', 'white');

      parSign.style('z-index', '-1')
      parSign.style('textAlign', 'CENTER')
    }

    //January Aquarius
    else if (month === 'January' && sign === 'Aquarius') {
      console.log('january, aquarius')
      //sketch for january
      let sketchMonth = function(p1) {
        p1.setup = function() {
          let resultCanvas = p1.createCanvas(300, 300);
          p1.img_diamond = loadImage('assets/garnet.jpg');
          resultCanvas.position(115, 500)
          resultCanvas.style('z-index', '-1')
        }
        p1.draw = function() {
          p1.background(img_garnet)
        }
      }
      //sketch for aquarius
      let sketchSign = function(p2) {
        p2.setup = function() {
          let resultCanvas = p2.createCanvas(300, 300);
          p2.img_agave = loadImage('assets/pothos.jpg');
          resultCanvas.position(480, 500)
          resultCanvas.style('z-index', '-1')
        }
        p2.draw = function() {
          p2.background(img_pothos)
        }
      }

      let p1 = new p5(sketchMonth);
      let p2 = new p5(sketchSign);


      //paragraph for stone
      parMonth = createButton(januaryTxt);
      parMonth.style('font-size', '24px');
      parMonth.style('color', 'coral')

      parMonth.style('font-weight', 200);
      parMonth.position(120, 850);
      parMonth.style("width", "290px");
      parMonth.style('margin-left', '0px')
      parMonth.style('z-index', '+1');
      parMonth.style('border-style', 'none');
      parMonth.style('background-color', 'white');

      parMonth.style('z-index', '-1')
      parMonth.style('textAlign', 'CENTER')

      //paragraph for plant
      parSign = createButton(aquariusTxt)
      parSign.style('font-size', '24px');
      parSign.style('color', 'coral')

      parSign.style('font-weight', 200);
      parSign.position(485, 850);
      parSign.style("width", "290px");
      parSign.style('margin-left', '0px')
      parSign.style('z-index', '+1');
      parSign.style('border-style', 'none');
      parSign.style('background-color', 'white');

      parSign.style('z-index', '-1')
      parSign.style('textAlign', 'CENTER')
    }

    //February Aquarius
    else if (month === 'February' && sign === 'Aquarius') {
      console.log('february, aquarius')
      //sketch for february
      let sketchMonth = function(p1) {
        p1.setup = function() {
          let resultCanvas = p1.createCanvas(300, 300);
          p1.img_diamond = loadImage('assets/amethyst.jpg');
          resultCanvas.position(115, 500)
          resultCanvas.style('z-index', '-1')
        }
        p1.draw = function() {
          p1.background(img_amethyst)
        }
      }
      //sketch for aquarius
      let sketchSign = function(p2) {
        p2.setup = function() {
          let resultCanvas = p2.createCanvas(300, 300);
          p2.img_agave = loadImage('assets/pothos.jpg');
          resultCanvas.position(480, 500)
          resultCanvas.style('z-index', '-1')
        }
        p2.draw = function() {
          p2.background(img_pothos)
        }
      }

      let p1 = new p5(sketchMonth);
      let p2 = new p5(sketchSign);


      //paragraph for stone
      parMonth = createButton(februaryTxt);
      parMonth.style('font-size', '24px');
      parMonth.style('color', 'coral')

      parMonth.style('font-weight', 200);
      parMonth.position(120, 850);
      parMonth.style("width", "290px");
      parMonth.style('margin-left', '0px')
      parMonth.style('z-index', '+1');
      parMonth.style('border-style', 'none');
      parMonth.style('background-color', 'white');

      parMonth.style('z-index', '-1')
      parMonth.style('textAlign', 'CENTER')

      //paragraph for plant
      parSign = createButton(aquariusTxt)
      parSign.style('font-size', '24px');
      parSign.style('color', 'coral')

      parSign.style('font-weight', 200);
      parSign.position(485, 850);
      parSign.style("width", "290px");
      parSign.style('margin-left', '0px')
      parSign.style('z-index', '+1');
      parSign.style('border-style', 'none');
      parSign.style('background-color', 'white');

      parSign.style('z-index', '-1')
      parSign.style('textAlign', 'CENTER')
    }

    //February Pisces
    else if (month === 'February' && sign === 'Pisces') {
      console.log('february, pisces')
      //sketch for february
      let sketchMonth = function(p1) {
        p1.setup = function() {
          let resultCanvas = p1.createCanvas(300, 300);
          p1.img_diamond = loadImage('assets/amethyst.jpg');
          resultCanvas.position(115, 500)
          resultCanvas.style('z-index', '-1')
        }
        p1.draw = function() {
          p1.background(img_amethyst)
        }
      }
      //sketch for pisces
      let sketchSign = function(p2) {
        p2.setup = function() {
          let resultCanvas = p2.createCanvas(300, 300);
          p2.img_agave = loadImage('assets/zz.jpg');
          resultCanvas.position(480, 500)
          resultCanvas.style('z-index', '-1')
        }
        p2.draw = function() {
          p2.background(img_zz)
        }
      }

      let p1 = new p5(sketchMonth);
      let p2 = new p5(sketchSign);


      //paragraph for stone
      parMonth = createButton(februaryTxt);
      parMonth.style('font-size', '24px');
      parMonth.style('color', 'coral')

      parMonth.style('font-weight', 200);
      parMonth.position(120, 850);
      parMonth.style("width", "290px");
      parMonth.style('margin-left', '0px')
      parMonth.style('z-index', '+1');
      parMonth.style('border-style', 'none');
      parMonth.style('background-color', 'white');

      parMonth.style('z-index', '-1')
      parMonth.style('textAlign', 'CENTER')

      //paragraph for plant
      parSign = createButton(piscesTxt)
      parSign.style('font-size', '24px');
      parSign.style('color', 'coral')

      parSign.style('font-weight', 200);
      parSign.position(485, 850);
      parSign.style("width", "290px");
      parSign.style('margin-left', '0px')
      parSign.style('z-index', '+1');
      parSign.style('border-style', 'none');
      parSign.style('background-color', 'white');

      parSign.style('z-index', '-1')
      parSign.style('textAlign', 'CENTER')
    }

    //March Pisces
    else if (month === 'March' && sign === 'Pisces') {
      console.log('march, pisces')
      //sketch for march
      let sketchMonth = function(p1) {
        p1.setup = function() {
          let resultCanvas = p1.createCanvas(300, 300);
          p1.img_diamond = loadImage('assets/aquamarine.jpg');
          resultCanvas.position(115, 500)
          resultCanvas.style('z-index', '-1')
        }
        p1.draw = function() {
          p1.background(img_aquamarine)
        }
      }
      //sketch for pisces
      let sketchSign = function(p2) {
        p2.setup = function() {
          let resultCanvas = p2.createCanvas(300, 300);
          p2.img_agave = loadImage('assets/zz.jpg');
          resultCanvas.position(480, 500)
          resultCanvas.style('z-index', '-1')
        }
        p2.draw = function() {
          p2.background(img_zz)
        }
      }

      let p1 = new p5(sketchMonth);
      let p2 = new p5(sketchSign);


      //paragraph for stone
      parMonth = createButton(marchTxt);
      parMonth.style('font-size', '24px');
      parMonth.style('color', 'coral')

      parMonth.style('font-weight', 200);
      parMonth.position(120, 850);
      parMonth.style("width", "290px");
      parMonth.style('margin-left', '0px')
      parMonth.style('z-index', '+1');
      parMonth.style('border-style', 'none');
      parMonth.style('background-color', 'white');

      parMonth.style('z-index', '-1')
      parMonth.style('textAlign', 'CENTER')

      //paragraph for plant
      parSign = createButton(piscesTxt)
      parSign.style('font-size', '24px');
      parSign.style('color', 'coral')

      parSign.style('font-weight', 200);
      parSign.position(485, 850);
      parSign.style("width", "290px");
      parSign.style('margin-left', '0px')
      parSign.style('z-index', '+1');
      parSign.style('border-style', 'none');
      parSign.style('background-color', 'white');

      parSign.style('z-index', '-1')
      parSign.style('textAlign', 'CENTER')
    }

    //March Aries
    else if (month === 'March' && sign === 'Aries') {
      console.log('march, aries')
      //sketch for march
      let sketchMonth = function(p1) {
        p1.setup = function() {
          let resultCanvas = p1.createCanvas(300, 300);
          p1.img_diamond = loadImage('assets/aquamarine.jpg');
          resultCanvas.position(115, 500)
          resultCanvas.style('z-index', '-1')
        }
        p1.draw = function() {
          p1.background(img_aquamarine)
        }
      }
      //sketch for aries
      let sketchSign = function(p2) {
        p2.setup = function() {
          let resultCanvas = p2.createCanvas(300, 300);
          p2.img_agave = loadImage('assets/agave.jpg');
          resultCanvas.position(480, 500)
          resultCanvas.style('z-index', '-1')
        }
        p2.draw = function() {
          p2.background(img_agave)
        }
      }

      let p1 = new p5(sketchMonth);
      let p2 = new p5(sketchSign);


      //paragraph for stone
      parMonth = createButton(marchTxt);
      parMonth.style('font-size', '24px');
      parMonth.style('color', 'coral')

      parMonth.style('font-weight', 200);
      parMonth.position(120, 850);
      parMonth.style("width", "290px");
      parMonth.style('margin-left', '0px')
      parMonth.style('z-index', '+1');
      parMonth.style('border-style', 'none');
      parMonth.style('background-color', 'white');

      parMonth.style('z-index', '-1')
      parMonth.style('textAlign', 'CENTER')

      //paragraph for plant
      parSign = createButton(ariesTxt)
      parSign.style('font-size', '24px');
      parSign.style('color', 'coral')

      parSign.style('font-weight', 200);
      parSign.position(485, 850);
      parSign.style("width", "290px");
      parSign.style('margin-left', '0px')
      parSign.style('z-index', '+1');
      parSign.style('border-style', 'none');
      parSign.style('background-color', 'white');

      parSign.style('z-index', '-1')
      parSign.style('textAlign', 'CENTER')
    }

  }
}
