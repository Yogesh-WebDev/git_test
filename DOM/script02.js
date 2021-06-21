const container = document.querySelector('#container');

// const content = document.createElement('div');
// content.classList.add('content');
// content.textContent = 'This is the glorious text-content!';

// container.appendChild(content);


const para=document.createElement('p');
para.style.cssText=["color:red"];
para.textContent="Hey I’m red!";
container.appendChild(para);

const heading=document.createElement('h3');
heading.style.cssText=["color:blue"];
heading.textContent="I’m a blue h3!";
container.appendChild(heading);

const para1=document.createElement('p');
//para1.style.cssText=["color:red"];
para1.textContent="ME TOO!";
container.appendChild(para1);

const heading1=document.createElement('h1');
//heading1.style.cssText=["color:blue"];
heading1.textContent="I’m in a div";
container.appendChild(heading1);



const division=document.createElement('div');
division.style.cssText=["border:1px solid black; background-color:pink"];
division.appendChild(heading1);
division.appendChild(para1);
container.appendChild(division);

