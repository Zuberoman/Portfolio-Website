//Mouse Circle
const mouseCircle=document.querySelector(".mouse-circle");
const mouseDot=document.querySelector(".mouse-dot");

const mouseCircleFn=(x,y)=>{
    mouseCircle.style.cssText=`top: ${y}px;left: ${x}px;opacity:1`;
    mouseDot.style.cssText=`top: ${y}px;left: ${x}px;opacity:1`;
};
//End of Mouse Circle
//Animated Circles
const circles=document.querySelectorAll('.circle');
const mainImg=document.querySelector('.main-circle img');
let mX=0;
let mY=0;
const z=20

const animatedCircles=(e,x,y)=>{

    if(x<mX){
        circles.forEach((circle)=>{
            circle.style.left=`${z}px`;
        });
        mainImg.style.left=`${z}px`;
    }else if(x>mX){
        circles.forEach((circle)=>{
            circle.style.left=`-${z}px`;
        });
        mainImg.style.left=`-${z}px`;

    }
    if(y<mY){
        circles.forEach((circle)=>{
            circle.style.top=`${z}px`;
        });
        mainImg.style.top=`${z}px`;
    }else if(y>mY){
        circles.forEach((circle)=>{
            circle.style.top=`-${z}px`;
        });
        mainImg.style.top=`-${z}px`;

    }
    mX=e.clientX;
    mY=e.clientY;

}

document.body.addEventListener('mousemove',(e)=>{
    let x =e.clientX;
    let y =e.clientY;

    mouseCircleFn(x,y);
    animatedCircles(e,x,y);

});

document.body.addEventListener('mouseleave',() => {
    mouseCircle.style.opacity='0';
    mouseDot.style.opacity='0';
})


//End of Animated Circles
//Main Button
const mainBtns=document.querySelectorAll('.main-btn');
mainBtns.forEach((btn)=>{
    let ripple;

    btn.addEventListener('mouseenter',(e)=>{
        const left=e.clientX-e.target.getBoundingClientRect().left;
        const top=e.clientY-e.target.getBoundingClientRect().top;
        ripple=document.createElement('div');
        ripple.classList.add('ripple');
        ripple.style.left=`${left}px`;
        ripple.style.top=`${top}px`;
        btn.prepend(ripple);
    
    });  
    btn.addEventListener('mouseleave',()=>{
        btn.removeChild(ripple);
    });  
})
//let ripple;

//mainBtn.addEventListener('mouseenter',(e)=>{
//    const left=e.clientX-e.target.getBoundingClientRect().left;
  //  const top=e.clientY-e.target.getBoundingClientRect().top;
    //ripple=document.createElement('div');
    //ripple.classList.add('ripple');
    //ripple.style.left=`${left}px`;
    //ripple.style.top=`${top}px`;
    //mainBtn.prepend(ripple);

//});
//mainBtn.addEventListener('mouseleave',()=>{
  //  mainBtn.removeChild(ripple);
//});
//End of Main Button
//Navigation
const menuIcon=document.querySelector('.menu-icon');
const navbar=document.querySelector('.navbar');

document.addEventListener('scroll',()=>{
    menuIcon.classList.add('show-menu-icon');
    navbar.classList.add('hide-navbar');

    if (window.scrollY===0){
        menuIcon.classList.remove("show-menu-icon");
        navbar.classList.remove("hide-navbar");
    }

});

menuIcon.addEventListener('click',()=>{
    menuIcon.classList.remove("show-menu-icon");
    navbar.classList.remove("hide-navbar");
});
//End of Navigation
//About me text
const aboutProto=document.querySelector('.about-proto');
const aboutProtoContent="Protoshop was build in year....";
Array.from(aboutProtoContent).forEach((char)=>{
    const span=document.createElement('span');
    span.textContent=char;
    aboutProto.appendChild(span);

    //span.addEventListener('mouseenter',(e)=>{
      //  e.target.style.animation='aboutAnim 10s infinite';

    //});
});

//End of about me text

//Projects
const container=document.querySelector('.container');
const projects=document.querySelectorAll('.project');
const projectHiddenBtn=document.querySelector('.project-hide-btn');

projects.forEach((project,i)=>{
    project.addEventListener("mouseenter",()=>{
        project.firstElementChild.style.top=`-${
            project.firstElementChild.offsetHeight-project.offsetHeight+20
        }px`;
    });
project.addEventListener('mouseleave',()=>{
    project.firstElementChild.style.top="2rem";
});
//Big Project Image
project.addEventListener('click',()=>{
    const bigImgWrapper=document.createElement('div');
    bigImgWrapper.className='project-img-wrapper';
    container.appendChild(bigImgWrapper);

    const bigImg=document.createElement('img');
    bigImg.className="project-img";
    const imgPath=project.firstElementChild.getAttribute('src').split('.')[0];
    bigImg.setAttribute('src',`${imgPath}-big.jpg`);
    bigImgWrapper.appendChild(bigImg);
    document.body.style.overflowY="hidden";
    projectHiddenBtn.classList.add('change');
    projectHiddenBtn.onclick=()=>{
        projectHiddenBtn.classList.remove("change");
        bigImgWrapper.remove();
        document.body.style.overflowY="scroll";
    };

});

//End of Big Project Image

i>=6 &&(project.style.cssText="display:none;opacity:0");

});
//Projects Button
const section3=document.querySelector('.section-3');
const projectsBtn=document.querySelector('.projects-btn');
const projectsBtnText=document.querySelector('.projects-btn span');
let showHideBool=true;
const showProjects=(project,i)=>{
    setTimeout(()=>{
                
        project.style.display="flex";
        section3.scrollIntoView({block:"end"});
    },300);
    setTimeout(()=>{
        project.style.opacity="1";
    },i*200);

};
const hideProjects=(project,i)=>{
    setTimeout(()=>{
        project.style.display="none";
        section3.scrollIntoView({block:"end"});
    },900);
    setTimeout(()=>{
        project.style.opacity="0";
    },i*100);

}

projectsBtn.addEventListener('click',(e)=>{
    e.preventDefault();
projectsBtn.firstElementChild.nextElementSibling.classList.toggle("change");

    projects.forEach((project,i)=>{
        if(i>=6){
            if (showHideBool){
                showProjects(project,i);
                projectsBtnText.textContent="Show Less";
            }else{
                hideProjects(project,i);
                projectsBtnText.textContent="Show More";
            }
        }

    });
    showHideBool=!showHideBool;
});

//End of Projects Button
//End of Projects
