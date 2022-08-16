/*
What each state is

"Lose" - game is over

0 - Input/name page
1 - select room page
2  through 5 - Sheriff game introductory page
6 - sheriff game begins


*/



let state = 6;
let background;
let backgroundImg1, backgroundImg2, backgroundImg3;
let name;
let playerX = 500;
let playerY = 500;

let x1 = 25;
let x2 = 1500;

let y1 = 25;
let y2 = 800;


let xPos = 950;
let yPos = 500;

let xPos2 = 950;
let yPos2 = 500;

let xPos3 = 950;
let yPos3 = 500;

let xPos4 = 950;
let yPos4 = 500;

let xPos5 = 950;
let yPos5 = 500;

let xPos6 = 950;
let yPos6 = 500;

let xPos7 = 950;
let yPos7 = 500;

let xPos8 = 950;
let yPos8 = 500;

let xPos9 = 950;
let yPos9 = 500;

let xPos10 = 950;
let yPos10 = 500;

let xDirection = 1;
let yDirection = 1;

let xDirection2 = 1;
let yDirection2 = 1;

let xDirection3 = 1;
let yDirection3 = 1;

let xDirection4 = 1;
let yDirection4 = 1;

let xDirection5 = 1;
let yDirection5 = 1;

let xDirection6 = 1;
let yDirection6 = 1;

let xDirection7 = 1;
let yDirection7 = 1;

let xDirection8 = 1;
let yDirection8 = 1;

let xDirection9 = 1;
let yDirection9 = 1;

let xDirection10 = 1;
let yDirection10 = 1;


function preload() {
    lakitu = loadImage("images/lakitu.webp");
    backgroundImg1 = loadImage("images/background1.jpg");
    backgroundImg2 = loadImage("images/charmander.png");
    backgroundImg3 = loadImage("images/black.webp");
    mad = loadImage("images/mad.png");
    robber = loadImage("images/robber.png");



}


function setup() {
    fill(0, 0, 255);
    createCanvas(1900, 1000);
    xSpeed = random(-5, 10);
    ySpeed = random(-5, 10);

    xSpeed2 = random(-5, 10);
    ySpeed2 = random(-5, 10);

    xSpeed3 = random(-5, 10);
    ySpeed3 = random(-5, 10);

    xSpeed4 = random(-5, 10);
    ySpeed4 = random(-5, 10);

    xSpeed5 = random(-5, 10);
    ySpeed5 = random(-5, 10);

    xSpeed6 = random(-5, 10);
    ySpeed6 = random(-5, 10);

    xSpeed7 = random(-5, 10);
    ySpeed7 = random(-5, 10);

    xSpeed8 = random(-5, 10);
    ySpeed8 = random(-5, 10);

    xSpeed9 = random(-5, 10);
    ySpeed9 = random(-5, 10);

    xSpeed10 = random(-5, 10);
    ySpeed10 = random(-5, 10);



    //inp.input(myInputEvent);





}

function myInputEvent() {
    name = this.value();
    console.log(name);
    //console.log('you are typing: ', this.value());
}


function draw() {
    if (state == "lose") {
        image(backgroundImg3, 0, 0, 1900, 1000);
        image(mad, 750, 300);
        textSize(100);
        fill(0, 0, 255);
        text("You Failure", 700, 100, 5000, 500);
        text("You Wasted my Time!", 550, 700, 5000, 500);

    }

    if (state == 0) {
        image(backgroundImg1, 0, 0, 1900, 1000);
        textSize(100);
        let inp = createInput('');
        inp.position(500, 500);
        inp.size(100);
        //text("What is your name?", 400, 500);
        //line(50, 350, 300, 350);
        //line(300, 350, 300, 825);
        //edges for the sheriff
        //top left is (50, 350), and top right is (300, 350)
        //bottom right is (300, 825)
        //bottom left is (50, 825)

        //line(325, 280, 325, 825);
        //line(325, 280, 625, 280)


        //edges for the bank
        //top left (325, 280)
        //top right (625, 280)
        //bottom left (325, 825)
        //bottom right(625, 825)


        //line(680, 175, 880, 175);
        //line(680, 175, 690, 825)

        //edges for the 3rd building
        //top left(680, 175)
        //top right (880, 175)
        //bottom left(680, 825)
        //bottom right (880, 825)

        /*
        let inp = createInput();
        inp.position(950, 500);
        inp.size(500, 100);
        inp.input(myInputEvent);*/

        //fill(255, 0, 0);
        /*rect(200, 200, 500, 200);
        rect(800, 200, 500, 200);*/
    }

    else if (state == 1) {
        image(backgroundImg1, 0, 0, 1900, 1000);
    }

    if (state == 1 && mouseX > 50 && mouseX < 300 && mouseY > 350 && mouseY < 825) {
        line(50, 350, 300, 350);
        line(300, 350, 300, 825);
        //line(880, 825, 680, 825);
        line(50, 350, 50, 825);
        line(50, 825, 300, 825);
        textSize(20);
        fill(0, 0, 0);
        text("Test your luck in the sheriff building", 25, 300, 1000, 100);

    }
    else if (state == 2) {
        image(backgroundImg3, 0, 0, 1900, 1000);
        image(lakitu, 800, 0);
        fill(255, 255, 255);
        rect(700, 600, 500, 100);

        fill(0, 0, 0);
        textSize(20);
        text("Did you know that each year there are over 350,000 armed attacks attempted in the United States? That is almost 1,000 a day!", 710, 610, 500, 100);

        fill(255, 0, 0);
        rect(100, 100, 100, 50);
        fill(0, 0, 0);
        fill(255, 255, 255);
        text("Continue", 110, 120, 100, 100);


    }
    else if (state == 3) {
        image(backgroundImg3, 0, 0, 1900, 1000);
        image(lakitu, 800, 0);
        fill(255, 255, 255);
        rect(700, 600, 500, 100);

        fill(0, 0, 0);
        textSize(18);
        text("Most people don't realize how big of an issue this is in America in comparison to other countries. Most countries, even other big ones like Japan, average less than 1 a day!", 710, 610, 500, 100);

        fill(255, 0, 0);
        rect(1500, 700, 100, 50);
        fill(255, 255, 255);
        text("Continue", 1510, 720, 100, 100);

    }
    else if (state == 4) {
        image(backgroundImg3, 0, 0, 1900, 1000);
        image(lakitu, 800, 0);
        fill(255, 255, 255);
        rect(700, 600, 500, 100);

        fill(255, 0, 0);
        rect(700, 800, 500, 100);



        fill(0, 0, 0);
        textSize(20);
        text("Speaking of armed attacks, there seems to be a robber who just broke into the sheriff's building. But all of the policemen are currently busy with other crime.", 710, 610, 500, 100);

        fill(255, 0, 0);
        textSize(20);
        rect(700, 800, 500, 100);

        fill(255, 255, 255);
        textSize(50);
        text("Continue", 840, 830, 500, 100);


    }
    else if (state == 5) {
        image(backgroundImg3, 0, 0, 1900, 1000);
        image(lakitu, 800, 0);
        fill(255, 255, 255);
        rect(700, 600, 500, 100);





        fill(0, 0, 0);
        textSize(20);
        text("We need a brave soldier to fight the burglar. Are you up for the task?", 710, 610, 475, 85);


        textSize(50);

        fill(0, 255, 0);
        rect(600, 800, 100, 100);
        fill(255, 0, 0);


        rect(1200, 800, 100, 100);
        fill(0, 0, 0);

        fill(255, 255, 255);
        text("Yes", 605, 830, 500, 85);
        text("No", 1215, 830, 500, 85);


    }

    if (state == 6) {
        
        image(backgroundImg3, 950, 500, 1900, 1000);

        imageMode(CENTER);
        image(robber, xPos, yPos, 50, 50);
        xPos += xSpeed * xDirection;
        yPos += ySpeed * yDirection;

        if (xPos < x1 || xPos > x2) {
            xDirection *= -1;
        }
        else if (yPos < y1 || yPos > y2) {
            yDirection *= -1;
        }

        image(robber, xPos2, yPos2, 50, 50);
        xPos2 += xSpeed2 * xDirection2;
        yPos2 += ySpeed2 * yDirection2;

        if (xPos2 < x1 || xPos2 > x2) {
            xDirection2 *= -1;
        }
        else if (yPos2 < y1 || yPos2 > y2) {
            yDirection2 *= -1;
        }

        image(robber, xPos3, yPos3, 50, 50);
        xPos3 += xSpeed3 * xDirection3;
        yPos3 += ySpeed3 * yDirection3;

        if (xPos3 < x1 || xPos3 > x2) {
            xDirection3 *= -1;
        }
        else if (yPos3 < y1 || yPos3 > y2) {
            yDirection3 *= -1;
        }

        image(robber, xPos4, yPos4, 50, 50);
        xPos4 += xSpeed4 * xDirection4;
        yPos4 += ySpeed4 * yDirection4;

        if (xPos4 < x1 || xPos4 > x2) {
            xDirection4 *= -1;
        }
        else if (yPos4 < y1 || yPos4 > y2) {
            yDirection4 *= -1;
        }

        image(robber, xPos5, yPos5, 50, 50);
        xPos5 += xSpeed5 * xDirection5;
        yPos5 += ySpeed5 * yDirection5;

        if (xPos5 < x1 || xPos5 > x2) {
            xDirection5 *= -1;
        }
        else if (yPos5 < y1 || yPos5 > y2) {
            yDirection5 *= -1;
        }

        image(robber, xPos6, yPos6, 50, 50);
        xPos6 += xSpeed6 * xDirection6;
        yPos6 += ySpeed6 * yDirection6;

        if (xPos6 < x1 || xPos6 > x2) {
            xDirection6 *= -1;
        }
        else if (yPos6 < y1 || yPos6 > y2) {
            yDirection6 *= -1;
        }

        image(robber, xPos7, yPos7, 50, 50);
        xPos7 += xSpeed7 * xDirection7;
        yPos7 += ySpeed7 * yDirection7;

        if (xPos7 < x1 || xPos7 > x2) {
            xDirection7 *= -1;
        }
        else if (yPos7 < y1 || yPos7 > y2) {
            yDirection7 *= -1;
        }

        image(robber, xPos8, yPos8, 50, 50);
        xPos8 += xSpeed8 * xDirection8;
        yPos8 += ySpeed8 * yDirection8;

        if (xPos8 < x1 || xPos8 > x2) {
            xDirection8 *= -1;
        }
        else if (yPos8 < y1 || yPos8 > y2) {
            yDirection8 *= -1;
        }

        image(robber, xPos9, yPos9, 50, 50);
        xPos9 += xSpeed9 * xDirection9;
        yPos9 += ySpeed9 * yDirection9;

        if (xPos9 < x1 || xPos9 > x2) {
            xDirection9 *= -1;
        }
        else if (yPos9 < y1 || yPos9 > y2) {
            yDirection9 *= -1;
        }

        image(robber, xPos10, yPos10, 50, 50);
        xPos10 += xSpeed10 * xDirection10;
        yPos10 += ySpeed10 * yDirection10;

        if (xPos10 < x1 || xPos10 > x2) {
            xDirection10 *= -1;
        }
        else if (yPos10 < y1 || yPos10 > y2) {
            yDirection10 *= -1;
        }
        rect(playerX, playerY, 50, 50);
        movement();
        /*
        if(playerX - 25 > blockRight1 || playerX + 25  < blockLeft1 || playerTop > blockBottom1 || playerBottom < blockTop1){
        }
        else{
            fill(255, 255, 0);
            text(" Collision", 200, 200);
    
        }*/

        

        







        /*
        xPos = 5;
        image(backgroundImg3, 0, 0, 1900, 1000);
        image(robber, xPos, 0, 100, 100);
        image(robber, xPos, 150, 100, 100);
        image(robber, xPos, 300, 100, 100);
        image(robber, xPos, 450, 100, 100);
        image(robber, xPos, 600, 100, 100);
        image(robber, xPos, 750, 100, 100);

        xPos += 3;*/

    }

}

function mouseClicked() {
    if (state == 1 && mouseX > 50 && mouseX < 300 && mouseY > 350 && mouseY < 825) {
        //checks if mouse is clicking sheriff
        state = 2;

    }
    else if (state == 1 && mouseX > 325 && mouseX < 625 && mouseY > 280 && mouseY < 825) {
        //checks if mouse is clicking the bank

    }
    else if (state == 1 && mouseX > 680 && mouseX < 880 && mouseY > 175 && mouseY < 825) {
        //checks if mouse is clicking the 3rd building

    }

    if (state == 2 && mouseX > 100 && mouseX < 200 && mouseY > 100 && mouseY < 150) {
        state = 3;


    }
    if (state == 3 && mouseX > 1500 && mouseX < 1600 && mouseY > 700 && mouseY < 800) {

        state = 4;
    }

    if (state == 4 && mouseX > 710 && mouseX < 1210 && mouseY > 800 && mouseY < 900) {
        state = 5;


    }

    if (state == 5 && mouseX > 600 && mouseX < 700 && mouseY > 800 && mouseY < 900) {
        state = 6;

    }
    else if (state == 5 && mouseX > 1200 && mouseX < 1300 && mouseY > 800 && mouseY < 900) {

        state = "lose";

    }

}



function movement() { // we will call in the draw 
    if (keyIsDown(LEFT_ARROW)) {
        playerX -= 3;
    }
        
    if (keyIsDown(RIGHT_ARROW)) {
        playerX += 3;
    }

    if (keyIsDown(UP_ARROW)) {
        playerY -= 3;
    }

    if (keyIsDown(DOWN_ARROW)) {
        playerY +=3;
    }
}




